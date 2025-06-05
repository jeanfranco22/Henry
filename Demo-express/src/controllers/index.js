// En este modulo estaran las funciones que establecen la LOGICA DE NEGOCIO DE CADA RUTA

const userController = (req, res) => {
    res.status(200).send("estamos recibiendo una solicitud para datos de usuarios");
}

const postController = (req, res) => {
    res.status(200).send("Estamos enviando info sobre posts");
}

module.exports = {
    userController,
    postController,
};