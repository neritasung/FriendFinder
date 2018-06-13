// LOAD DATA
// ===============================================================================

var friendList = require("../data/friends.js");

// ROUTING
// ===============================================================================

module.exports = function (app) {

    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friendList);
    });


    // API Post Requests
    app.post("/api/data/friends", function (req, res) {
        
        var newFriend = req.body;
        // variable for new friend and scores
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendScore = 0;
        var bestMatch = 0;

    //  for loop for new friend's score difference

    for (var i=0; i < friendScore.length; i++) {
        var difference = 0;
    
    // for loop for user's score input

    for (var j=0; j < newFriendScores.length; j++){
        difference += difference + (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
    }
    
    // push difference value to the scoresArray
    scoresArray.push(difference);

    }
    
    // for loop for scroes array to look for the lowest difference score

    for (var i=0; i < scoresArray.length ; i++){
       if(scoresArray[i] < scoresArray[bestMatch]){
           bestMatch = i;
    }
    };

    // adding the best match score to the best friend variable
    var bestFriend = friendList[bestMatch]


    // res.json to call the best friend and push results to the friend list
    res.json(bestFriend);
    
    friendList.push(newFriend);

    });
};





