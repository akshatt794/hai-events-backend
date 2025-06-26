const express = require('express');
const router = express.Router();
const { register, login, getUsers } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/', protect, admin, getUsers); // Only admin can list users

module.exports = router;
