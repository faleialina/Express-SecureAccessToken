function isValidUserBody(req, res, next) {
  const { name, surname, email, pwd } = req.body;
  if (!name) throw new Error('name отсутствует');
  if (!isNaN(name)) throw new Error('name некорректное значение');
  if (!surname) throw new Error('surname отсутствует');
  if (!isNaN(surname)) throw new Error('surname некорректное значение');
  if (!email) throw new Error('email отсутствует');
  if (!pwd) throw new Error('pwd отсутствует');
  next();
}

module.exports = { isValidUserBody };
