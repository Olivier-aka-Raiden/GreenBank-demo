const express = require('express');
const logic = require('./logic'); // Import your logic module
const app = express();
const port = 3000; // Choose your desired port number
const path = require('path');
// List of options
const options_voiture = ["Citadine", "Cabriolet", "Berline", "SUV"];
const options_energie = ["Essence", "Diesel", "Electrique", "Hybride"];
const options_kilometrage = ["5000 - 10000 km", "10000 - 15000 km", "15000 - 20000 km", "20000 - 25000 km", "25000 - 30000 km"];
const options_annee = ["1960-1970", "1970 - 1990", "1990 - 2000", "2000 - 2010", "Après 2010"];
const option_passager = ["1", "2", "3", "4"];

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..'))); // Serve static files (CSS, images, etc.) from the 'public' directory

app.get('/', (req, res) => {
    console.log(__dirname + '/index.html')
    res.sendFile(__dirname + '/index.html'); // Replace 'public' with the actual directory path
});
app.post('/', (req, res) => {
    const voiture_selected = req.body.voiture;
    const energie_selected = req.body.energie;
    const kilometrage_selected = req.body.kilometrage;
    const annee_selected = req.body.annee;
    const options_passager = req.body.passager;
    console.log(voiture_selected);
    console.log(energie_selected);
    console.log(kilometrage_selected);
    console.log(annee_selected);
    console.log(options_passager);
    const score = logic.addPassager(options_passager, annee_selected, voiture_selected, energie_selected, kilometrage_selected);
    const resultat = score !== null ? score : 0;

    res.json({ resultat });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});