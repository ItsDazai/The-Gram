const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware.verifyToken, postController.createPost);
router.get('/', postController.getAllPosts);

module.exports = router;
