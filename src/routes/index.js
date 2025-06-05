// aqui se definen las rutas a traves de las cuales nos podemos comunicar 

// tengo definido la solitud a GET/users

// que debe hacer la app cuando recibe la solicitud ? ahi entra la funcion controladora o handler

const { Router } = require ("express");
const userRouter = require("./userRouter")
const postRouter = require("./postRouter")

const router = Router();

router.use("/users", userRouter);
router.use("/posts", postRouter);

module.exports = router;