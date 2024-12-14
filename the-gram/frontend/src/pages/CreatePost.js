import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [caption, setCaption] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/posts', { caption, imageUrl });
      // Handle successful post creation (e.g., redirect to dashboard)
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Caption" required />
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" required />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
