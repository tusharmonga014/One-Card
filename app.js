const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/scanner", function (req, res) {
    res.sendFile(__dirname + "/scanner.html");
})

let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Server up on port 3000.");
})