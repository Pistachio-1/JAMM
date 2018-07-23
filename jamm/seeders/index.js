const LearnerSeed = require("../src/models/learner");

module.exports = function() {
    return Promise.all([ // Returning and thus passing a Promise here
        // Independent seeds first
        LearnerSeed(),
    });
}