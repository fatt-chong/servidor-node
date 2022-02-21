const Post = require("../database/models/Post");

//registrar post
exports.createPosts = (req,res) => {
    Post.create({
        title : req.body.title,
        body : req.body.body,
    }).then((post) => {
        res.status(200).json(post);
    }).catch((err)=>{
        res.status(400).json(err);
    });
}

//listar post
exports.listPosts = (req,res) => {
    Post.findAll().then((posts)=>{
        res.json(posts);
    }).catch((err) => {
        res.json(err);
    });
}

//editar post
exports.editPosts = (req,res) => {
    Post.update({
        title: req.body.title,
        body: req.body.body
    },{
        where : {
            id: req.params.id
        }
    }).then((post) => {
        res.status(200).json(post);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

//buscar post por id
exports.searchPostById = (req,res) => {
    Post.findByPk(req.params.id).then((post=>{
        res.status(200).json(post);
    })).catch((err) => {
        res.status(500).json(err);
    });
}

//eliminar post
exports.deletePosts = (req,res) => {
    Post.destroy({
        where : {
            id : req.params.id
        }
    }).then((result) => {
        res.json("se elimino");
    }).catch((err) => {
        res.json(err);
    });
}