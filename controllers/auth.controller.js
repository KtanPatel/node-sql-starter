const jwt = require('jsonwebtoken');

const { sendSuccessResponse, sendErrorResponse } = require("../utils/response");
const environment = require("../utils/environment");
const UserService = require('../services/user.service');
const { passwordHashCompareSync } = require('../utils/fn');

exports.signup = async (req, res) => {
    try {
        const { email, password, role, firstName, lastName } = req.body;
        const values = { email, password, role, firstName, lastName };
        if (!(await UserService.isEmailUnique(email))) {
            return sendErrorResponse(res, "Account with that email address already exists.", 400);
        }
        const user = await UserService.createUser(values);
        if (!user) return sendErrorResponse(res, 'Error in Register. Please try again later.');
        sendSuccessResponse(res, 'user register successfully');

    } catch (error) {
        sendErrorResponse(res, error.message)
    }
}

exports.login = async (req, res) => {
    try {
        res.clearCookie("token");
        const { email, password } = req.body;

        const user = await UserService.findUser({ email });
        if (!user) return sendErrorResponse(res, 'We are not aware of this user.', 401);
        if (!passwordHashCompareSync(password, user.password)) return sendErrorResponse(res, 'Invalid email or password', 401);

        const token = jwt.sign({ id: user.id, role: user.role },
            environment.jwt.secret,
            { expiresIn: environment.jwt.expiredIn });

        res.cookie("token", token);
        return sendSuccessResponse(res, {
            message: 'Success! You are logged in.',
            token,
            data: user,
        })
    }
    catch (error) {
        sendErrorResponse(res, error.message)
    }
};

exports.logout = async (req, res) => {
    try {
        res.clearCookie("token");
        sendSuccessResponse(res, "User Logged out successfully!")
    } catch (error) {
        sendErrorResponse(res, error.message)
    }
}