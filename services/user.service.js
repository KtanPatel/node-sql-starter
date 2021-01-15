const db = require("../database/models");

const UserService = {
    async createUser(values) {
        try {
            return await db.user.create(values);
        } catch (error) {
            throw error;
        }
    },
    async findUser(condition) {
        try {
            return await db.user.findOne({ where: condition });
        } catch (error) {
            throw error;
        }
    },
    async findAllUsers({ limit, offset }) {
        try {
            return await db.user.findAndCountAll({
                limit, offset,
                order: [["createdAt", "DESC"]]
            });
        } catch (error) {
            throw error;
        }
    },
    async updateUser(values, condition) {
        try {
            return await db.user.findOne({
                where: condition,
            }).then((user) => {
                if (user) return user.update(values);
                return;
            });
        } catch (error) {
            throw error;
        }
    },
    async isEmailUnique(email) {
        return await db.user.count({ where: { email } })
            .then(count => {
                return count === 0
            });
    },
}

module.exports = UserService;