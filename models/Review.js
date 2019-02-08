const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    review: {
        type: String
    },
    rating: {
        type: Number
    }
})

let Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;