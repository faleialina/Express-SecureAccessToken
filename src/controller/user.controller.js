const express = require('express');
const {createUser } = require('../service/user.service');

const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error.message);
    }


})

module.exports = route;
