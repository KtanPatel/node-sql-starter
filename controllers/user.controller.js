const UserService = require("../services/user.service");
const { getPagination, getPaginationData } = require("../utils/fn");
const { sendSuccessResponse, sendErrorResponse } = require("../utils/response");

exports.me = async (req, res) => {
    try {
        const { id } = req.user;
        const user = await UserService.findUser({ id });
        sendSuccessResponse(res, { data: user });
    } catch (error) {
        sendErrorResponse(res, error.message);
    }
}

exports.findAll = async (req, res) => {
    try {
        const { page, size } = req.query;
        const { limit, offset } = getPagination(page, size);
        const user = await UserService.findAllUsers({ limit, offset });

        sendSuccessResponse(res, getPaginationData(user, page, limit))

    } catch (error) {
        sendErrorResponse(res, error.message);
    }
}

exports.updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, role, firstName, lastName } = req.body;
        const request = {
            email, role, firstName, lastName
        };
        const user = await UserService.updateUser(request, { id });

        sendSuccessResponse(res, { data: user })
    } catch (error) {
        sendErrorResponse(res, error.message);
    }
}