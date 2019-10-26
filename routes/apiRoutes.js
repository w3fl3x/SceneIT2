const db = require("../models");

module.exports = (app) => {
  // Get all examples
  app.get("/api/movies", function (req, res) {
    db.movies.findAll({}).then(function (dbMovies) {
      res.json(dbMovies);
    });
  });

  // Create a new example
  app.post("/api/movies", (req, res) => {
    console.log("add new movies test!!!!!!!");
    console.log(req.body);
    db.movies
      .create({
        movie_name: req.body.movie_name,
        genre: req.body.genre,
        year: req.body.year,
        userRanking: req.body.user_ranking,
        userID: req.body.userID,
        comment: req.body.comment
      })
      .then((dbMovies) => {
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
            id: req.body.id
          }
        }
      )
      .then((dbMovies) => {
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
      .then((dbMovies) => {
        res.json(dbMovies);
      });
  });

  // Delete an example by id
  app.delete("/api/Movies/:id", (req, res) => {
    db.movies
      .destroy({ where: { id: req.params.id } })
      .then((dbMovies) => {
        res.json(dbMovies);
      });
  });
};
