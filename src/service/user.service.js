const { createUserDb } = require('../repository/user.repository');

async function createUser(name, surname, email, pwd) {
    const data = await createUserDb(name, surname, email, pwd);
    if (!data.length) throw new Error('данные не сохранены');
    return data;
}

module.exports = { createUser }