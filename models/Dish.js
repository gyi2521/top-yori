const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DishSchema = new Schema({
  name: {
    type: String
  },
  restaurant: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  image: {
    type: String,
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCuh28gO5any9RjETQvdVKu5-nXDHZX7WnBQCpuXa4CEqI4Hebw'
  },
  price: {
    type: Number
  },
  keyword: {
    type: String
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: "Review"
  }],
  rating: {
    type: Number,
    default: 0
  },
  description: {
    type: String
  }
});

var Dish = mongoose.model("Dish", DishSchema);

module.exports = Dish;
