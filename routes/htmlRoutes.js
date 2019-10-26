const db = require("../models");

module.exports = (app) => {
  // Load index page
  app.get("/", function (req, res) {
    db.movies.findAll({}).then((dbMovies) => {
      res.render("index", { movie: dbMovies });
    });
  });

  // Load example page and pass in an example by id
  app.get("/movies/:id", (req, res) => {
    db.movies
      .findOne({ where: { id: req.params.id } })
      .then((dbMovies) => {
        res.render("movies", {
          movies: dbMovies
        });
      });
  });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};
