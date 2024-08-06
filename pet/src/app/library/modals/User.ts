import mongoose from "mongoose";
const { Schema } = mongoose;

const PetSchema = new Schema({
  name: String,
  type: String,
  age: Number,
  // Add other fields as necessary
});

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  addedPets: {
    type:[PetSchema],
    default:[],
  },
});

const User =
  mongoose.models.User ||
  mongoose.model("User", UserSchema);

export default User;
