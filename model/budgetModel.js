var mongoose = require("mongoose");
var budgetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      uppercase: true,
    },
    budget: {
      type: Number,
      required: true,
      unique: false,
    },
    color: {
      type: String,
      required: true,
      //1:# + 6:Hexcode
      minlength: 7,
      maxlength: 7,
      unique: false,
    },
  },
  { collection: "budget" }
);

module.exports = mongoose.model("Budget", budgetSchema);
