const express = require('express');
const { createUser, authUser } = require('../service/user.service');
const { isValidUserBody } = require('../helper/validation');
const { buildResponse } = require('../helper/buildResponse');
const { createToken } = require('../helper/jwt');

const route = express.Router();

route.post('/reg', isValidUserBody, async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/auth', async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const data = await authUser(email, pwd);

    const token = createToken(data);

    res.setHeader('authorization', [token]);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
