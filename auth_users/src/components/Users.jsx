import React from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard'
import uuid from 'uuid/v1'

function Users(){

  const [users, setUsers] = React.useState()

  React.useEffect(() => {
    axios('http://localhost:5000/api/users')
    .then(res => {
      setUsers(res.data.data)
    })

    return () => {
      console.log("complete")
    }
  }, [])

  if(!users){
    return(
      <div>
        <h1>Hello from the users component</h1>
      </div>
    )
  }

    return (
      <div>
        <h1>Here is a list of all users</h1>
        <div className="user-list">
          {users.map(user => <UserCard key={uuid()} user={user}/>)}     
        </div>
      </div>
    )
}

export default Users;