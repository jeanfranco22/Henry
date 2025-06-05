const validateUser = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    console.log("hay un error en el nombre");
  } else {
    next();
  }
};

module.exports = validateUser;
