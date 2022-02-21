const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        message: "wena"
    })
});

app.listen(port, ()=>{
    console.log("servidor en el puerto: " + port);
});