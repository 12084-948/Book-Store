import User from "../model/userModel.js";
// used for safety of pw
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
    try {
        // req from postman
        const { fullname, email, password } = req.body
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }

        const hashPW = await bcryptjs.hash(password, 10)
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPW,
        })

        await createdUser.save()
        res.status(201).json({
            message: "User created succesfully", user: {
                _id: createdUser.id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            }
        })

    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email });
        // comparing pw's of pw entered by user & pw from database
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid Username or password" })
        }
        else {
            res.status(200).json({
                message: "Login Successful", user: {
                    _id: user.id,
                    fullname: user.fullname,
                    email: user.email
                }
            })
        }
    } catch (error) {
        console.log("Error: +", error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

