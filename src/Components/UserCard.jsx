import React from 'react';

const UserCard = ({ user, deleteUser, loadUsers }) => {
  return (
    <div className="text-white p-4 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-3xl">
      <article>
        <h2 className="text-xl">Name: {`${user.first_name} ${user.last_name}`}</h2>
        <ul>
          <li>Email: {user.email}</li>
          <li>Birthday: {user.birthday}</li>
          <li>Password: {user.password}</li>
          <div className="flex flex-row justify-end gap-4">
            <button onClick={() => loadUsers(user)}>
              <i class="bx bxs-edit-alt bx-border-circle bx-tada-hover text-xl"></i>
            </button>
            <button onClick={() => deleteUser(user.id)}>
              <i class="bx bxs-trash-alt bx-border-circle bx-tada-hover text-xl"></i>
            </button>
          </div>
        </ul>
      </article>
    </div>
  );
};

export default UserCard;
