const { createUserDb, getUsersByEmail } = require('../repository/user.repository');
const bcrypt = require('bcrypt');

const salt = 2;

async function createUser(name, surname, email, pwd) {
    const user = await getUsersByEmail(email);
    if (user.length) throw new Error('такой user есть');

    const hashPwd = await bcrypt.hash(pwd, salt);

    const data = await createUserDb(name, surname, email, hashPwd);
    if (!data.length) throw new Error('данные не сохранены');
    return data;
};

async function authUser(email, pwd) {
    const user = await getUsersByEmail(email);
    if (!user.length) throw new Error('email not found');

    const bool = await bcrypt.compare(pwd, user[0].pwd);
    if (!bool) throw new Error('пароли не совпадают');
    return user;
}

module.exports = { createUser, authUser }