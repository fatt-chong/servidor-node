const Address = require("../database/models/Address");

//listar direcciones
exports.listAddress = async (req, res) => {
    try{
        let address = await Address.findAll();
        res.status(200).json(address);
    }catch(err){
        res.status(400).json(err);
    }
};

//registrar direccion
exports.createAddress = async (req, res) => {

    try{
        let address = await Address.create({
            street : req.body.street
        });
        res.status(200).json(address);
    }catch(err){
        res.status(400).json(err);
    }
    
}
//editar direccion
exports.editAddress = async (req, res) => {

    try{
        let address = await Address.update({
            street : req.body.street
        },{
            where : {id: req.params.id}
        });
        res.status(200).json(address);
    }catch(err){
        res.status(400).json(err);
    }

}
//buscar direccion
exports.searchAddress = async (req, res) => {

    try{
        let address = await Address.findByPk(req.params.id);
        res.json(address);
    }catch(err){
        res.status(400).json(err);
    }
     
}
//eliminar direccion
exports.deleteAddress = async (req, res) => {

    try{
        let address = await Address.destroy({
            where : {
                id : req.params.id
            }
        });
        res.status(200).json(address);
    }catch(err){
        res.status(400).json(err);
    }

}
