import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ message: "User registered successfully!", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
