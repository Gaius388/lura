import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  password: {
    type: String,
    select: false,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
