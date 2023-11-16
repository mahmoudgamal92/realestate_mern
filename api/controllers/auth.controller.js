import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const SignUp = async (req, res) => {
  const { user_name, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ user_name, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User Created Successfully"
    });
  } catch (error) {
    res.status(201).json({
        success: false,
        message: error.message
      });
  }
};

const SignIn = (req, res) => {
  console.log(req.body);
};

export { SignUp, SignIn };
