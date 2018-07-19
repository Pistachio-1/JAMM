const db = require("../src/models");

module.exports = function(app) {
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
}