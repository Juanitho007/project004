import React from 'react';

const Navbar = ({ btnClickVisible }) => {
  return (
    <nav className="flex flex-row gap-14">
      <h1 className="text-3xl font-bold text-cyan-600">Users Admin</h1>
      <button className="bg-cyan-600 p-1 rounded-r-lg" onClick={btnClickVisible}>
        <i class="bx bxs-user-plus bx-tada text-3xl"></i>
        <span>Add new user</span>
      </button>
    </nav>
  );
};

export default Navbar;
