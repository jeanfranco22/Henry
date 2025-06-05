const userService = require("../services/userService");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userService.getUsers();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({
        error: "Error interno en el servidor",
      });
    }
  },
  createUser: async (req, res) => {
    const { name } = req.body;
    console.log("body recibido", req.body);
    try {
      await userService.createUser(name);
      res.status(201).json({
        message: "usuario creado correctamente",
      });
    } catch (error) {
      console.log("Error en createUser", error);
      res.status(500).json({
        error: "Error al crear el usuario",
      });
    }
  },
};
