var friendsData = require('../data/friends.js');


module.exports = function(app) {
    app.get("/api/survey", (req,res) =>{
        res.json(friends);
    });
    app.post("/api/survey", (req, res) => {
        friends.push(req.body);
        res.json();
    });
}

