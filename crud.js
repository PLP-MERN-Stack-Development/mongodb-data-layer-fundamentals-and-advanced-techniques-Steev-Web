require('dotenv').config();
const { connectDB, mongoose } = require("./db");
const Book = require("./model/book");



//  Example MongoDB queries you can try after running this script:
 
//  1. Find all books:
//      db.books.find()
 
//   2. Find books by a specific author:
//      db.books.find({ author: "George Orwell" })
 
//   3. Find books published after 1950:
//      db.books.find({ published_year: { $gt: 1950 } })

//  4. Find books in a specific genre:
//     db.books.find({ genre: "Fiction" })
 
//   5. Find in-stock books:
//     db.books.find({ in_stock: true })



async function CRUD() {
  try {
    await connectDB();

    // 1. Find all books
    const allBooks = await Book.find();
    console.log('\n All Books:');
    allBooks.forEach((book, i) => {
      console.log(`${i + 1}. ${book.title} by ${book.author}`);
    });

    // 2. Find books by George Orwell
    const orwellBooks = await Book.find({ author: 'George Orwell' });
    console.log('\nBooks by George Orwell:', orwellBooks);

    // 3. Books published after 1950
    const recentBooks = await Book.find({ published_year: { $gt: 1950 } });
    console.log('\n Books published after 1950:', recentBooks);

    // 4. Fiction genre
    const fictionBooks = await Book.find({ genre: 'Fiction' });
    console.log('\nFiction books:', fictionBooks);

    // 5. In-stock books
    const inStockBooks = await Book.find({ in_stock: true });
    console.log('\n In-stock books:', inStockBooks);

  } catch (err) {
    console.error('❌ Error running CRUD operations:', err);
  } finally {
    await mongoose.disconnect();
    console.log('\n Disconnected from MongoDB');
  }
}

CRUD();


