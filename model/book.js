const { mongoose } = require("mongoose");
const { Schema } = mongoose;

// Define the Book schema
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  published_year: { type: Number, required: true },
  price: { type: Number, required: true },
  in_stock: { type: Boolean, required: true },
  pages: { type: Number, required: true },
  publisher: { type: String, required: true },
});

// Create the Book model
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
