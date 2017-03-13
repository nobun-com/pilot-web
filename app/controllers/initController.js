var Todos = require("../models/todoModel");

module.exports = function(app) {

    app.get("/api/initTodos", function(req, res) {

        // seed database
        var starterTodos = [
            {
                username: "molly",
                todo: "Buy milk",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "sammy",
                todo: "Feed dog",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "betty",
                todo: "Learn node",
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        })

    });

}

