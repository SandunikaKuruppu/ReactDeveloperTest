import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserInfoView.css'; // Import your CSS file

const UserInfoView = ({ history }) => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${userId}`);
        setUser(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="user-info-view">
      <h1>User Information View</h1>
      {user && (
        <div className="user-info">
          <img src={user.avatar} alt={user.first_name} />
          <p>{`${user.first_name} ${user.last_name}`}</p>
          {/* Display other user information as needed */}
        </div>
      )}
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
};

export default UserInfoView;
