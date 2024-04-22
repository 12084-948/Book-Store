import Book from "../model/bookModel.js";

export const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        // if we get book, then status is ok (200)
        res.status(200).json(book)
    } catch (error) {
        console.log("Error ", error)
        // 500 is for internal state error
        res.status(500).json(error)
    }
}

