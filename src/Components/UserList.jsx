import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, deleteUser, loadUsers }) => {
  return (
    <div className="flex flex-row gap-5 p-5 ">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          loadUsers={loadUsers}
        />
      ))}
    </div>
  );
};

export default UserList;
