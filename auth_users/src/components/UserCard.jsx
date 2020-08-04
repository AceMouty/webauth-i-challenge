import React from 'react';

function UserCard({ user }){
  return(
    <div className="user-card">
      <h2 className="user-card__header">User Name: {user.username}</h2>
      <h3 className="user-card__content">Password: {user.password}</h3>
    </div>
  )
}

export default UserCard;