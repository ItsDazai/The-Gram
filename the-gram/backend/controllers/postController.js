const Post = require('../models/Post');

exports.createPost = async (req, res) => {
   try {
     const postData = new Post({
       userId: req.user.id,
       caption: req.body.caption,
       imageUrl: req.body.imageUrl,
     });
     await postData.save();
     res.status(201).json(postData);
   } catch (error) {
     res.status(400).send(error.message);
   }
};

exports.getAllPosts = async (req, res) => {
   try {
     const posts = await Post.find().populate('userId', 'email profilePicture').sort({ createdAt: -1 });
     res.json(posts);
   } catch (error) {
     res.status(500).send(error.message);
   }
};
