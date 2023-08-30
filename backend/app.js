// import express module
const express = require("express");
// import body-parser module (permet de récupérer et de parser (analyser) )
//ces données de manière à les rendre facilement accessibles dans votre application.)
const bodyParser = require("body-parser");


// import bcrypt module
const bcrypt = require("bcrypt");

// import multer module
const multer = require("multer");
const path = require("path");

// import axios
const axios = require("axios");

// import jwt module and express-session module 
const jwt = require('jsonwebtoken');
const session = require('express-session');

// import mongoose module
const mongoose = require("mongoose");
// connect Express Application with DB via mongoose
// sportDB: le nom du DataBase
mongoose.connect("mongodb://127.0.0.1:27017/sportDB");

// create express application
const app = express();

// configuration app.use
// send JSON responses
app.use(bodyParser.json());
//Get Objects from Request (configuration de l'app)
app.use(bodyParser.urlencoded({ extended: true }));

// path configuration pour multer module
app.use("/images", express.static(path.join('backend/images')));

const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
  }

  const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
    error = null;
  }
  cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
  const name = file.originalname.toLowerCase().split(' ').join('-');
  const extension = MIME_TYPE[file.mimetype];
  const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +extension;
  cb(null, imgName);
  }
  });
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// Session Configuration
const secretKey = '97554217 majdi';
app.use(session({
secret: secretKey,
}));

//--------------------------------------
// Models Importation
// . donner le BE
const MatchModel = require("./models/match");
const Player = require("./models/player");
const Team = require("./models/team");
const Stadium = require("./models/stadium");
const Imc = require("./models/imc");
const User = require("./models/user");
const Weather = require("./models/weather");
const weather = require("./models/weather");
// DB simulation
let matchesTab = [
  { id: 1, scoreOne: 3, scoreTwo: 0, teamOne: "FCB", teamTwo: "RMD" },
  { id: 2, scoreOne: 0, scoreTwo: 1, teamOne: "LIV", teamTwo: "MAN" },
  { id: 3, scoreOne: 3, scoreTwo: 1, teamOne: "EST", teamTwo: "CA" },
  { id: 4, scoreOne: 1, scoreTwo: 6, teamOne: "INT", teamTwo: "ROM" },
  { id: 5, scoreOne: 0, scoreTwo: 0, teamOne: "CSS", teamTwo: "CA" },
];

let teamsTab = [
  { id: 1, name: "RM ", stadium: "aa", owner: "Pireth", stadiumId: 5 },
  { id: 2, name: "EST", stadium: "bb", owner: "Elmedeb", stadiumId: 8 },
  { id: 3, name: "CA", stadium: "cc", owner: "Bousbi3", stadiumId: 19 },
];
let playersTab = [
  { id: 1, name: "Messi", age: "35", position: "Attack" },
  { id: 2, name: "Bofon", age: "40", position: "Gardien" },
  { id: 11, name: "Ronaldo", age: "37", position: "Attack" },
  { id: 6, name: "Gatozo", age: "42", position: "Diffence" },
];
let stadiumTab = [
  { id: 1, name: "Rades", capacity: 2000, country: "Tunis" },
  { id: 2, name: "Camp No", capacity: 5000, country: "Espain" },
  { id: 3, name: "Infild", capacity: 4000, country: "Engled" },
];

function generateId(T) {
  if (T.length == 0) {
    return 1;
  } else {
    var max = T[0].id;
    for (let i = 1; i < T.length; i++) {
      if (T[i].id > max) {
        max = T[i].id;
      }
    }
    return max + 1;
  }
}
//----------------------------------------------

//--------------------------------------------------
// Busniss Logic (traitement logique)

// Busniss Logic: Get All Matches
app.get("/matches", (req, res) => {
  // Traitement de la Req
  // tous ce qui dans le ()est un objet
  //console.log("Here into BL : Get All Matches");
  MatchModel.find().then((data) => {
    res.json({ matches: data });
  });
});

// Busniss Logic: Get Matche By ID
// id is a param
app.get("/matches/:id", (req, res) => {
  // Traitement de la Req
  //console.log("here into BL: Get Match By ID");
  let id = req.params.id;
  // let findedMatch = matchesTab.find((elt) => {
  //   return elt.id == id;
  // });

  // findedMatch
  //   ? // reponse dans dans le programme Postman
  //     res.json({ match: findedMatch })
  //   : res.json({ message: "Not found" });
  MatchModel.findOne({ _id: id }).then((data) => {
    res.json({ match: data });
  });
});

// Busniss Logic: Delete Match By ID
app.delete("/matches/:id", (req, res) => {
  // Traitement de la Req
  // console.log("Here into BL: Delete Match By ID");
  let id = req.params.id;
  // let isDelete = false;
  // for (let i = 0; i < matchesTab.length; i++) {
  //   if (matchesTab[i].id == id) {
  //     matchesTab.splice(i, 1);
  //     isDelete = true;
  //     break;
  //   }
  // }
  // isDelete
  //   ? res.json({ message: "Delete with success" })
  //   : res.json({ message: "not found" });
  MatchModel.deleteOne({ _id: id }).then((data) => {
    console.log("here data after delete", data);
    data.deletedCount == 1
      ? res.json({ message: "Delete with success" })
      : res.json({ message: "Not Deleted" });
  });
});

// Busniss Logic: Add Match
app.post("/matches", (req, res) => {
  // Traitement de la Req
  //console.log("here into BL: Add Match", req.body);
  // let match = req.body;
  // match.id = generateId(matchesTab);
  // matchesTab.push(match);
  // matchObj: instance de type Match
  let matchObj = new MatchModel(req.body);
  // save:  methode prédifinie mongoose
  // Sauvegarde de l'instance dans la base de données
  matchObj.save((err, doc) => {
    console.log("here err", err);
    console.log("here doc", doc);
    err
      ? res.json({ message: "error" })
      : res.json({ message: "added with success" });
  });
  // res.json({ message: "Added with success" });
});

// Busniss Logic: Update Match
app.put("/matches", (req, res) => {
  // Traitement de la Req
  // console.log("here into BL: Edit Matche");
  let newMatch = req.body;
  // for (let i = 0; i < matchesTab.length; i++) {
  //   // comparaison
  //   if (matchesTab[i].id == newMatch.id) {
  //     // affectation ou recoit
  //     matchesTab[i] = newMatch;
  //     break;
  //   }
  // }
  MatchModel.updateOne({ _id: newMatch._id }, newMatch).then((data) => {
    console.log("here data after update", data);
    data.nModified == 1
      ? res.json({ message: "Edite with success" })
      : res.json({ message: "Not Edite" });
  });
});

// Busniss Logic: Search Match By scoreOne ou scoreTwo
// 1er methode:
// app.post("/matches/search", (req, res) =>{
//     console.log("here into BL: Search ");
//     let obj = req.body;
//     console.log("here obj", obj);
//    let findedMatches = matchesTab.filter((elt) =>{
//     return elt.scoreOne == obj.scoreOne || elt.scoreTwo == obj.scoreTwo
//    });
//    res.json({ tab: findedMatches});
// });
//  2eme methode:
app.get("/matches/:sc1/:sc2", (req, res) => {
  //console.log("here into BL: search matches by SC1 || SC2");
  let scoreOne = req.params.sc1;
  let scoreTwo = req.params.sc2;
  let findedMatches = matchesTab.filter((elt) => {
    return elt.scoreOne == scoreOne || elt.scoreTwo == scoreTwo;
  });
  res.json({ tab: findedMatches });
});

//--------------------------------------------------------------
// Busniss Logic for Player
// Busniss Logic: Get All Player
app.get("/players", (req, res) => {
  Player.find().then((data) => {
    res.json({ players: data });
  });
});

// Busniss Logic: Get  Player By ID
app.get("/players/:id", (req, res) => {
  // traitement de la req
  let id = req.params.id;
  // let x = false;
  // let player;
  // for (let i = 0; i < playersTab.length; i++) {
  //   if (playersTab[i].id == id) {
  //     player = playersTab[i];
  //     x = true;
  //     break;
  //   }
  // }
  Player.findOne().then((data) => {
    res.json({ player: data });
  });
});

// Busniss Logic: Delete Player By ID
app.delete("/players/:id", (req, res) => {
  let id = req.params.id;
  // let isDelete = false;
  // for (let i = 0; i < playersTab.length; i++) {
  //   if (playersTab[i].id == id) {
  //     playersTab.splice(i, 1);
  //     isDelete = true;
  //     break;
  //   }
  // }
  // isDelete
  //   ? res.json({ message: "delete with success" })
  //   : res.json({ message: "Not found" });
  Player.deleteOne({ _id: id }).then((data) => {
    res.json({ message: "delete with success" });
  });
});

// Busniss Logic: Add Player
app.post("/players", (req, res) => {
  console.log("here into BL: Add Player", req.body);
  // let player = req.body;
  // player.id = generateId(playersTab);
  // playersTab.push(player);
  let playerObj = new Player(req.body);
  playerObj.save();
  res.json({ message: "added with success" });
});

// Busniss Logic: Update Player
app.put("/players", (req, res) => {
  let newPlayer = req.body;
  // for (let i = 0; i < playersTab.length; i++) {
  //   if (playersTab[i].id == newPlayer.id) {
  //     playersTab[i] = newPlayer;
  //     break;
  //   }
  // }
  Player.updateOne({ _id: newPlayer._id }, newPlayer).then((data) => {
    res.json({ message: "Edite with success" });
  });
});

//--------------------------------------------------------------
// Busniss Logic for Team
// Busniss Logic: Get All Teams
app.get("/teams", (req, res) => {
  Team.find().then((data) => {
    res.json({ teams: data });
  });
});

// Busniss Logic: Get  Team By ID
app.get("teams/:id", (req, res) => {
  let id = req.params.id;
  // let findedTeam = teamsTab.find((elt) => {
  //   return elt.id == id;
  // });

  // findedTeam
  //   ? // reponse dans dans le programme Postman
  //     res.json({ team: findedTeam })
  //   : res.json({ message: "Not found" });
  Team.findOne({ _id: id }).then((data) => {
    res.json({ team: data });
  });
});

// Busniss Logic: Delete Team By ID
app.delete("/teams/:id", (req, res) => {
  let id = req.params.id;
  // let isDelete = false;
  // for (let i = 0; i < teamsTab.length; i++) {
  //   if (teamsTab[i].id == id) {
  //     teamsTab.splice(i, 1);
  //     isDelete = true;
  //     break;
  //   }
  // }
  // isDelete
  //   ? res.json({ message: "Delete with success" })
  //   : res.json({ message: "not found" });
  Team.deleteOne({ _id: id }).then((data) => {
    res.json({ message: "dlete with success" });
  });
});

// Busniss Logic: Add Team
app.post("/teams", (req, res) => {
  //let team = req.body;
  // team.id = generateId(teamsTab);
  // teamsTab.push(team);
  let teamObj = new Team(req.body);
  teamObj.save();
  res.json({ message: "Added with success" });
});

// Busniss Logic: Update Team
app.put("/teams", (req, res) => {
  let newTeam = req.body;
  // for (let i = 0; i < teamsTab.length; i++) {
  //   // comparaison
  //   if (teamsTab[i].id == newTeam.id) {
  //     // affectation ou recoit
  //     teamsTab[i] = newTeam;
  //     break;
  //   }
  // }
  Team.updateOne({ _id: newTeam._id }, newTeam).then((data) => {
    res.json({ message: "Edite with success" });
  });
});

// ------------------------------------------------------------
// Busniss Logic for Serch Player
app.post("/players/searchPlayer", (req, res) => {
  console.log("here BL: serach player", req.body);
  let player = req.body;
  let findedPlayers = playersTab.filter((obj) => {
    return obj.name == player.name || obj.age == player.age;
  });
  res.json({ players: findedPlayers });
});

//--------------------------------------------------------------
// Busniss Logic for Stadium
// Busniss Logic: Get All Stadium
app.get("/stadium", (req, res) => {
  Stadium.find().then((data) => {
    res.json({ stadium: data });
  });
});

// Busniss Logic: Get  stadium By ID
app.get("/stadium/:id", (req, res) => {
  // traitement de la req
  let id = req.params.id;
  Stadium.findOne().then((data) => {
    res.json({ stadium: data });
  });
});

// Busniss Logic: Delete Stadium By ID
app.delete("/stadium", (req, res) => {
  let id = req.params.id;
  Stadium.deleteOne({ _id: id }).then((data) => {
    res.json({ message: "dlete with success" });
  });
});

// Busniss Logic: Add stadium
app.post("/stadium", (req, res) => {
  console.log("here into BL: Add stadium", req.body);
  let stadiumObj = new Stadium(req.body);
  stadiumObj.save();
  res.json({ message: "added with success" });
});

// Busniss Logic: Update stadium
app.put("/stadium", (req, res) => {
  let newStadium = req.body;
  Stadium.updateOne({ _id: newStadium._id }, newStadium).then((data) => {
    res.json({ message: "Edite with success" });
  });
});

//-------------------------------------
// Busniss Logic: calcul IMC
app.post("/imcs", (req, res) => {
  let imcObj = new Imc(req.body);
  imcObj.imcValue =
    imcObj.poids / ((imcObj.taille / 100) * (imcObj.taille / 100));
  // save:  methode prédifinie mongoose
  imcObj.save((err, doc) => {
    console.log("here err", err);
    console.log("here doc", doc);

    let message = "";
    if (imcObj.imcValue < 18.5) {
      message = "Insuffisance pondérale (maigreur)";
    } else if (imcObj.imcValue < 25) {
      message = "Poids normal ";
    } else if (imcObj.imcValue < 30) {
      message = "Surpoids";
    } else if (imcObj.imcValue < 35) {
      message = "Obésité modérée";
    } else if (imcObj.imcValue < 40) {
      message = "Obésité sévère";
    } else {
      message = "Obésité morbide ou massive";
    }
    err ? res.json({ message: "error" }) : res.json({ msg: message });
  });
});
//----------------------
// Busniss Logique: signup
app.post("/users/signup", multer({ storage: storage }).single('img'), (req, res) => {
  console.log("here into BL: signup", req.body);
  bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
    console.log("here crypted pwd:", cryptedPwd);
    req.body.pwd = cryptedPwd;
    req.body.avatar = "http://localhost:3000/images/" + req.file.filename;
    let user = new User(req.body);
    user.save((err, doc) => {
      console.log("error",err);
      if (err) {
        if (err.errors.email) {
          //errors le message qui a retourner mongoose-unique-validator
          // msg: email exist
          res.json({ msg: "0" });
          // res.json({ msg: "email exist" });
        }
      } else {
        res.json({ msg: "Success" });
      }
      // err
      // ? res.json({ msg: "err" }) :
      // // : signifie si non
      // : res.json({ msg: "added with success" });
    });
  });
});

// Busniss Logique: login

app.post("/users/login", (req, res) => {
  console.log("here into BL: login", req.body);
  let user;
  User.findOne({ email: req.body.email })
    .then(
      // email: req.body.email == if(email== req.body.email)
      (doc) => {
        console.log("here doc after searching by Email", doc);
        if (!doc) {
          res.json({ msg: "please check your Email" });
        } else {
          user = doc;
          //return true ou false
          return bcrypt.compare(req.body.pwd, doc.pwd);
        }
      }
    )
    // .then cest le return de bcrypt.compare(req.body.pwd, doc.pwd)
    .then((pwdResult) => {
      console.log("here pwdResult", pwdResult);
      if (!pwdResult) {
        res.json({ msg: "please check your pwd" });
      } else {
          let userToSend = {
          id: user._id,
          fName: user.firstName,
          lName: user.lastName,
          role: user.role,
        };
        // If the user is valid, generate a JWT token (userToSend = { userId: 'user-id' })
      const token = jwt.sign(userToSend, secretKey, { expiresIn:'1h' });
        res.json({ result: token, msg:"Success" });
      }
    });
});

//************************************************************************** */

// Busniss Logic: Search weather
app.post("/weather", (req, res) => {
  const city = req.body.city;
  console.log("here city",req.body);
  // Extrait des informations spécifiques
  
  const key = "518fd5370a0427f3f712653b1877288f";
  const weatherURL=
   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ key}`
  
    // Affiche les informations dans l'interface utilisateur
   // Sending the weather data back to the client
   axios.get(weatherURL).then((response) => {
console.log('Here response', response);
const data = response.data.main;
console.log('Here weather main', weather);
const result = {
  icone:response.data.Weather[0].icon,
temp: data.temp,
pressure: data.pressure,
humidity:data.humidity,
windSpeed :response.data.wind.speed,

};
console.log();
res.status(200).json({
result:result
})
});
});

// exportation dés l'exportation de l'express
//make app importable from another files (exportable)
module.exports = app;
