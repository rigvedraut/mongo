const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://rigvedraut:rigved123@cluster1.s8uquqr.mongodb.net/datahouse", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Create a data schema
const notesSchema = {
    title: String,
    content: String
}

const Note = mongoose.model("Note", notesSchema);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
    let newNote = new Note({
        title: req.body.title,
        content: req.body.content
    });
    newNote.save();
    res.redirect('/');
})

app.listen(80, function () {
    console.log("server is running on port 80");
})
