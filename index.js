const express = require("express");

const app = express();

let port = 8080;

app.listen(port, () =>{
    console.log(`app is listening on port no ${port} `);
});

app.use((req, res)=>{

    console.log("request recived");
});


