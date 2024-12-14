const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User 
exports.register = async (req, res) => {
   try {
     const hashedPassword = await bcrypt.hash(req.body.password, 10);
     const user = new User({ email: req.body.email, password: hashedPassword });
     await user.save();
     res.status(201).send("User registered successfully");
   } catch (error) {
     res.status(400).send(error.message);
   }
};

// Login User 
exports.login = async (req, res) => {
   try {
     const user = await User.findOne({ email: req.body.email });
     if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
       return res.status(400).send("Invalid credentials");
     }
     const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET);
     res.json({ token });
   } catch (error) {
     res.status(500).send(error.message);
   }
};
