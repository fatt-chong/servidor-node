const express = require("express");
const router = express.Router();
const PostController = require("../controllers/Post.controllers");

router.get("/", (req, res) => {
    res.json("en raiz post");
});
//registrar post
router.post("/create", PostController.createPosts);
//listar posts
router.get("/listar", PostController.listPosts);
//buscar post
router.get("/buscar/:id", PostController.searchPostById);
//editar post
router.put("/editar/:id", PostController.editPosts);
//eliminar post
router.delete("/eliminar/:id", PostController.deletePosts);

module.exports = router;