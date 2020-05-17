var express = require("express");

var router = express.Router();

var db = require("../models");

//get route index
router.get("/", function(req,res){
    res.redirect("/spells");
});

router.get("/spells", function(req, res) {
    
    db.Spell.findAll({
    }).then(function(data) {
      // console.log(data);
      var hbsObject = { spells: data };
      res.render("index", hbsObject);
    });
  });

router.post("/spells/create", function(req, res){
    
  db.Spell.create({
    spell_name: req.body.spell_name
  }).then(function(data) {
    // console.log(data);
    res.redirect("/");
  });
});

router.post("/spells/update/:id", function(req,res) {
    console.log(req);

    console.log("condition", condition);

    Spell.update(
        {
            isCast: true
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(function(result) {
        console.log(result);
        result.json("/")
    });
});

module.exports = router;