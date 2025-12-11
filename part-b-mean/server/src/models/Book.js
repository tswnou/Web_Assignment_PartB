import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  image: String
});

const Book = mongoose.model("Book", BookSchema);
export default Book;
