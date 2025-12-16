import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, interest, password } = req.body;

    // basic validation
    if (!firstName || !lastName || !email || !interest || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      firstName,
      lastName,
      email,
      interest,
      password
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      user
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
