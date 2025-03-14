import { model, Schema } from "mongoose";

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

const User = model("User", userSchema);

export default User;
