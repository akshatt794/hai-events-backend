const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ error: 'Invalid username or password' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ error: 'Invalid username or password' });

  // THIS IS WHERE JWT IS CREATED
  const token = jwt.sign(
    { userId: user._id, role: user.role },    // These are needed for middleware
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  );

  res.json({ token });
});
router.post('/register', async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
      const hash = await bcrypt.hash(password, 10);
      const user = new User({ username, email, password: hash, role });
      await user.save();
      res.json({ message: 'Admin registered' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
module.exports = router;
