import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Error creating user" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const list = await User.find();
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: "Error fetching users" });
  }
};
