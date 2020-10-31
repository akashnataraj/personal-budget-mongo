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
<<<<<<< HEAD
    },
  },
  { collection: "budget" }
);

module.exports = mongoose.model("Budget", budgetSchema);
=======
    }
}, {collection: 'budget'});

module.exports = mongoose.model('Budget', budgetSchema);    
>>>>>>> 3ae98cdb25ded4595c9d2882b267b77fdb5bfa25
