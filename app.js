const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/scanner",function(req,res){
res.sendFile(__dirname + "/scanner.html");
})

app.listen(3000, function () {
    console.log("Server up on port 3000.");
})