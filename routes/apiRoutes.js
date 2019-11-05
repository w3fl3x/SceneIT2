const db = require("../models");

module.exports = app => {
  // Get all examples
  app.get("/api/movies", function(req, res) {
    db.movies.findAll({}).then(function(dbMovies) {
      res.json(dbMovies);
    });
  });

  // Create a new example
  app.post("/api/movies", (req, res) => {
    console.log("add new movies test!!!!!!!");
    db.movies
      .create({
        movie_name: req.body.movie_name,
        year: req.body.year,
        poster: req.body.poster,
        summary: req.body.summary
      })
      .then(dbMovies => {
        res.json(dbMovies);
      });
  });

  // Update an example
  app.put("/api/movies", (req, res) => {
    db.movies
      .update(
        {
          seen: true
        },
        {
          where: {
            id: +req.query.id
          }
        }
      )
      .then(dbMovies => {
        res.json(dbMovies);
      });
  });

  app.put("/api/Movies/:id", (req, res) => {
    db.movies
      .update(
        {
          comment: req.body.comment
        },
        {
          where: {
            id: req.body.id
          }
        }
      )
      .then(dbMovies => {
        res.json(dbMovies);
      });
  });

  // Delete an example by id
  app.delete("/api/Movies/", (req, res) => {
    db.movies.destroy({ where: { id: +req.query.id } }).then(dbMovies => {
      res.json(dbMovies);
    });
  });

  // Get all users
  app.get("/api/users", function(req, res) {
    db.users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new user
  app.post("/api/users", (req, res) => {
    console.log("add new users test!!!!!!!");
    console.log(req.body);
    db.users
      .create({
        userID: req.body.userID,
        user_token: req.body.user_token,
        user_name: req.body.user_name
      })
      .then(dbUsers => {
        res.json(dbUsers);
      });
  });
};
