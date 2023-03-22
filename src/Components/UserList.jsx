import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, deleteUser, loadUsersForm, handleUpdate }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          className="w-350 h-350"
          deleteUser={deleteUser}
          loadUsersForm={loadUsersForm}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default UserList;
