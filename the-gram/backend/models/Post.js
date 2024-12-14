const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  caption: { type: String },
  imageUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
