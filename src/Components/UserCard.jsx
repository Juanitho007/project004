import React from 'react';

const UserCard = ({ user, deleteUser, loadUsersForm }) => {
  const handleDelete = async (userId) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      await deleteUser(userId);
    }
  };
  return (
    <div className="flex flex-col justify-center text-white p-4 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-3xl gap-2">
      <h2 className="text-xl">
        NAME: {`${user.first_name} ${user.last_name}`.toUpperCase()}
      </h2>
      <h3>Email: {user.email.toLowerCase()}</h3>
      <h3>
        Birthday:<i className="bx bx-gift bx-flashing"></i>
        {user.birthday.split('-').reverse().join(' / ')}
      </h3>
      <div className="flex flex-row justify-end gap-6">
        <button onClick={() => loadUsersForm(user)} className="button">
          <i className="bx bxs-edit-alt bx-border-circle border-0 bx-tada-hover text-white text-3xl p-0"></i>
        </button>
        <button onClick={() => handleDelete(user.id)} className="button">
          <i className="bx bxs-trash-alt bx-border-circle border-0 bx-tada-hover text-white text-3xl p-0"></i>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
