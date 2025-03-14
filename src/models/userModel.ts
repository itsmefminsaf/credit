import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
  uname: {
    type: String,
    required: true,
  },
  pwd: {
    type: String,
    required: true,
  },
});

const User = models.User || model("User", userSchema);

export default User;
