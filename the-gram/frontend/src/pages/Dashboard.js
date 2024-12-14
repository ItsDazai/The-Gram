import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:5000/api/posts');
      setPosts(response.data);
    };
    
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.user.name}</h3>
          <img src={post.imageUrl} alt={post.caption} />
          <p>{post.caption}</p>
          {/* Add like/comment functionality */}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;