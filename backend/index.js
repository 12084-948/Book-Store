import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
// it helps us when front and backend are running at different ports
import cors from "cors"
import bookRoute from './Router/bookRoute.js'
import userRoute from './Router/userRoute.js'


const app = express();
app.use(cors())

app.use(express.json())

dotenv.config();

const PORT = process.env.PORT ||3101;
const URI = process.env.mongoDBURI

// connection to mongoDB
try {
    mongoose.connect(URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    console.log("Connected to mongoDb")
} catch (error) {
    console.log("Error ", error)
}

// defining route

app.use("/book", bookRoute)
app.use("/user", userRoute)


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})
