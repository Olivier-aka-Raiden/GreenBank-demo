function Vehiculescore(nomdelavoiture, carburant, nbKyloParAn) {
    // Total score for the car
    let citadine = 8;
    let cabriolet = 6;
    let berline = 6.5;
    let suv = 4;
    let totalscore = 0;

    if (nomdelavoiture === "Citadine") {
        totalscore += citadine;
    }
    if (nomdelavoiture === "Cabriolet") {
        totalscore += cabriolet;
    }
    if (nomdelavoiture === "Berline") {
        totalscore += berline;
    }
    if (nomdelavoiture === "SUV") {
        totalscore += suv;
    }

    let essence = 5;
    let electrique = 9;
    let gaz = 6;
    let diesel = 4;
    let hybride = 7;

    if (carburant === "essence") {
        totalscore += essence;
    }
    if (carburant === "electrique") {
        totalscore += electrique;
    }
    if (carburant === "gaz") {
        totalscore += gaz;
    }
    if (carburant === "diesel") {
        totalscore += diesel;
    }
    if (carburant === "hybride") {
        totalscore += hybride;
    }

    if (nbKyloParAn === "cinq") {
        totalscore += 9;
    }
    if (nbKyloParAn === "dix") {
        totalscore += 7;
    }
    if (nbKyloParAn === "quinze") {
        totalscore += 5;
    }
    if (nbKyloParAn === "vingt") {
        totalscore += 3;
    }
    if (nbKyloParAn === "vingtcinq") {
        totalscore += 1;
    }

    return totalscore;
}

function Years(whatYear, nomdelavoiture, carburant, nbKyloParAn) {
    let score = Vehiculescore(nomdelavoiture, carburant, nbKyloParAn);

    // Add score based on the year of construction
    if (whatYear === "1960") {
        score += 1;
    }
    if (whatYear === "1970") {
        score += 2;
    }
    if (whatYear === "1990") {
        score += 4;
    }
    if (whatYear === "2000") {
        score += 5;
    }
    if (whatYear === "2010") {
        score += 7;
    }

    return score;
}

function Eval(whatYear, nomdelavoiture, carburant, nbKyloParAn) {
    let score = Years(whatYear, nomdelavoiture, carburant, nbKyloParAn);
    let taux;

    if (score <= 10) {
        taux = 3;
    } else if (score > 10 && score <= 15) {
        taux = 2.74;
    } else if (score > 15 && score <= 25) {
        taux = 2.52;
    } else if (score > 25 && score <= 33) {
        taux = 2.10;
    } else if (score > 33 && score < 40) {
        taux = 1.85;
    }

    return taux;
}

function addPassager(nbpassager, whatYear, nomdelavoiture, carburant, nbKyloParAn) {
    let taux = Eval(whatYear, nomdelavoiture, carburant, nbKyloParAn);

    if (nbpassager === "1") {
        taux += 0.11;
    } else if (nbpassager === "2") {
        taux -= 0.17;
    } else if (nbpassager === "3") {
        taux -= 0.29;
    } else if (nbpassager === "4") {
        taux -= 0.53;
    }

    return taux;
}


module.exports = {
    addPassager
};