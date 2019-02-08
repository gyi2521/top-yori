// const Dish = require("../models/Dish");
// const Keyword = require("../models/Keyword")
const db = require('../models/index');


module.exports = function (app) {
  app.get("/api/dish/:term", function (req, res) {
    const term = req.params.term;
    let filterDish = {};
    //console.log(term);
    if (term !== "default" && term !== "popular") {
      filterDish = {
        $or: [{ name: { $regex: term, $options: "i" } },
        { keyword: { $regex: term, $options: "i" } }]
      }
    } //means select * from Dish where name like 'term'. 'i' stands for case insensitivity.

    db.Dish.find(filterDish)
      // .populate("reviews", "rating")
      .sort({ rating: -1 })
      // .limit(10)
      .then(function (dishList) {
        //console.log(data);
        res.json(dishList);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.get("/api/category", function (req, res) {
    db.Keyword.find({})
      .then(function (data) {
        //console.log("keyword", data);
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  })

  app.post("/api/dish", function (req, res) {
    console.log(req.body);
    db.Dish.create(req.body)
      .then(function (data) {
        //console.log(data);
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.post("/api/review", function (req, res) {
    console.log("hello", req.body);
    db.Review.create(req.body.review)
      .then(function (review) {
        return db.Dish.findOneAndUpdate({ _id: req.body.dishId }, { $push: { reviews: review._id } }, { new: true })
      })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
};
