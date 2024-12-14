import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts'); // Adjust this URL based on your backend setup
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={homeStyle}>
      <h1>Welcome to The Gram!</h1>
      <h2>Latest Posts</h2>
      <div className="post-list">
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post._id} style={postStyle}>
              <h3>{post.caption}</h3>
              <img src={post.imageUrl} alt={post.caption} style={imageStyle} />
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

// Inline styles for simplicity
const homeStyle = {
  padding: '20px',
};

const postStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  marginBottom: '10px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
};

export default Home;
