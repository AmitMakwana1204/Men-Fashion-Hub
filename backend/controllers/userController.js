const User = require('../models/User');

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.json({ message: 'User registered successfully', user });
};

const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

module.exports = { registerUser, getUsers };
