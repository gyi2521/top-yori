const Dish = require("../models/Dish");
const Keyword = require("../models/Keyword")

module.exports = function (app) {
  app.get("/api/dish/:term", function (req, res) {
    const term = req.params.term;
    let filterDish = {};
    console.log(term);
    if (term !== "default" && term !== "popular") {
      filterDish = {
        $or: [{ name: { $regex: term, $options: "i" } },
        { keyword: { $regex: term, $options: "i" } }]
      }
    } //means select * from Dish where name like 'term'. 'i' stands for case insensitivity.

    Dish.find(filterDish)
      .sort({ rating: -1 })
      // .limit(10)
      .then(function (data) {
        console.log(data);
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  //   if (term !== "default" ) {
  //     filterDish = {
  //       $or: [{ name: { $regex: term, $options: "i" } },
  //       { keyword: { $regex: term, $options: "i" } }]
  //     }; //means select * from Dish where name like 'term'. 'i' stands for case insensitivity.
  //   }
  //   //if term is default, sort Dish by highest rating and return top 10 dish

  //   Dish.find(filterDish)
  //     .sort({ rating: -1 })
  //     // .limit(10)
  //     .then(function (data) {
  //       console.log(data);
  //       res.json(data);
  //     })
  //     .catch(function (err) {
  //       res.json(err);
  //     });
  // });
  app.get("/api/category", function (req, res) {
    Keyword.find({})
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
    Dish.create(req.body)
      .then(function (data) {
        //console.log(data);
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
};
