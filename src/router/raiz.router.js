const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message : "ruta raiz de raiz xd"
    });
});

module.exports = router;