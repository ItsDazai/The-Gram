import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = ({ match }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get(`http://localhost:5000/api/users/${match.params.id}`);
      setUserData(response.data);
    };

    fetchUserData();
  }, [match.params.id]);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{userData.name}'s Profile</h1>
      <img src={userData.profilePicture} alt={`${userData.name}'s profile`} />
      <p>{userData.bio}</p>
      {/* Display followers/following counts */}
      {/* Display user's posts */}
    </div>
  );
};

export default Profile;
