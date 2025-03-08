import useModel from "../models/userModel.js";
import jwt  from "jsonwebtoken"
import bcrypt from "bcryptjs"
import validator from "validator"

// LOgi user
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await useModel.findOne({email})

        if (!user) {
            return res.json({
                success: false,
                message: "User not found"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({
                success: false,
                message: "Incorrect password"
            })
        }

        const token = createToken(user._id);
        res.json({
            success: true,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false, 
            message: "Error in login api"
        })
    }
}

// token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// register
const registerUser = async (req, res) => {

    const {name, password, email} = req.body;

    try {
        // checking user existance
       const exists = await useModel.findOne({email})
       if (exists) {
            return res.json({
                success: false,
                message: "User already exists with this email"
            })
       }
    //     validating email format and strong password
    if (!validator.isEmail(email)) {
        return res.json({
            success: false,
            message: "please enter valid email"
        })
    }
    if (password.length<8) {
        return res.json({
            success: false,
            message: "please enter strong password"
        })
    }

// hashing user password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const newUser = new useModel({
    name:name,
    email:email,
    password: hashedPassword,
  })
  const user = await newUser.save()
  const token = createToken(user._id)
  res.json({
    success: true,
    token
  })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "error in user registration api"
        })
    }
}

export {loginUser, registerUser}