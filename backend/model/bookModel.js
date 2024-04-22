import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String
});

//                          This book is collection
const Book = mongoose.model("Book", bookSchema);

export default Book;