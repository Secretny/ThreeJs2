const PORT = 3000;
const express = require('express');
const app = express()
const fs = require('fs')
app.use(express.static('static')) // serwuje stronę index.html
app.use(express.static('static/zadania')) // serwuje pozostałe pliki, czyli ćwiczenia
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

let filess = []

fs.readdir(__dirname + '/static/zadania', function (err, files) {
    if (err) {
        return console.log(err);
    }
    for (file of files) {
        filess.push(file)
    }
    console.log(files);
});

app.get("/", function (req, res) {

})

app.get('/zadania', (req, res) => {
    res.send(filess)
})


app.listen(PORT, (req, res) => {
    console.log("start serwera na porcie " + PORT);
})

