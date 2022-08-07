const mongoose = require("mongoose");

const UserModal = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /.+\@.+..+/,
    },
    friends: [
      {
        type: mongoose.Types.ObjectId,
        ref: "users",
      },
    ],
    thoughts:[
        {
            type:mongoose.Types.ObjectId,
            ref:"thoughts"
        }
    ]
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserModal);

module.exports = User