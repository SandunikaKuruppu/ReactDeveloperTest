import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UsersView.css'; // Import your CSS file

const UsersView = ({ history }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=1');
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleUserClick = (userId) => {
    history.push(`/user/${userId}`);
  };

  return (
    <div className="users-view">
      <h1>Users View</h1>
      {users.map((user) => (
        <div key={user.id} className="user-card" onClick={() => handleUserClick(user.id)}>
          <img src={user.avatar} alt={user.first_name} />
          <p>{`${user.first_name} ${user.last_name}`}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersView;
