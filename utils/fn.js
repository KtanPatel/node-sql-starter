const bcrypt = require('bcrypt');
exports.getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? (page - 1) * limit : 0;

    return { limit, offset };
};

exports.getPaginationData = (data, page, limit) => {
    const { count: totalItems, rows } = data;
    const currentPage = page ? +page : 1;
    const totalPages = Math.ceil(totalItems / limit);

    return { data: rows, ...(limit ? { pagination: { totalItems, totalPages, currentPage, pageSize: limit } } : {}) };
}

exports.passwordHashSync = (plainTextPassword) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(plainTextPassword, salt)
}

exports.passwordHashCompareSync = (plainTextPassword, hash) => {
    return bcrypt.compareSync(plainTextPassword, hash);
}
