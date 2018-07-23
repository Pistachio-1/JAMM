const db = require("./../models");

module.exports = function(app) {    
    app.get("/api/learners/email/:email", function(req, res) {
        db.learner.findOne({
            where: {
                email: req.params.email
            }
        }).then(function(dbLearner) {
            res.json(dbLearner)
        });
    });

    app.get("/api/learners/name/:fname/:lname", function(req, res) {
        console.log(req.params);
        db.learner.findOne({
            where: {
                firstName: req.params.fname,
                lastName: req.params.lname
            }
        }).then(function(dbLearner) {
            res.json(dbLearner)
        });
    });

    app.get("/api/learners/username/:uname/:pswd", function(req, res) {
        console.log(req.params);
        db.learner.findOne({
            where: {
                userName: req.params.uname,
                lastName: req.params.pswd
            }
        }).then(function(dbLearner) {
            res.json(dbLearner)
        });
    });

    app.get("/api/learners", function(req, res) {
        db.learner.findAll({})
            .then(function(dbLearner) {
                res.json(dbLearner);
            })
            .catch(function(err) {
                console.log(err);
                res.json(err);
            });
    });

    app.post("/api/learners/create", function(req, res) {
        console.log(req.body);
        db.learner.create(req.body).then(function(dbLearner) {
            res.json(dbLearner);
        });
    });

    app.put("/api/learners/update", function(req, res) {
        db.learner.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(dbLearner) {
            res.json(dbLearner);
        });
    });

    // todo a patch or update of controller is required before destroy will work
    // app.put("/api/learners/delete", function(req, res) {
    //     db.learner.destroy(req.body, {
    //         where: { id: req.body.id }
    //     }).then(function(dbLearner) {
    //         res.json(dbLearner);
    //     });
    // });

    app.get("*", function(req, res) {
        db.learner.findAll({})
            .then(function(dbLearner) {
                res.json(dbLearner);
            })
            .catch(function(err) {
                console.log(err);
                res.json(err);
            });
    });

}