import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import UserList from './Components/UserList';
import Navbar from './Components/Navbar';
import Modal from './Components/Modal';
import { getUsers, createUser, updateUser, deleteUser } from './Services';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [idUserToEdit, setIdUserToEdit] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const loadUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCreate = async (data) => {
    if (idUserToEdit) await updateUser(idUserToEdit, data);
    else await createUser(data);
    await loadUsers();
    setIdUserToEdit(null);
    handleClickVisible();
  };
  const handleDelete = async (userId) => {
    await deleteUser(userId);
    await loadUsers();
  };
  const loadUsersForm = (userData) => {
    const { id, ...data } = userData;
    reset(data);
    setIdUserToEdit(id);
  };
  const handleClickVisible = () => {
    setIsFormVisible(!isFormVisible);
  };
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div className="h-screen flex flex-col justify-center items-center p-10 text-white">
      <Navbar btnClickVisible={handleClickVisible} />
      <UserList users={users} deleteUser={handleDelete} loadUsers={loadUsersForm} />
      <Modal isVisible={isFormVisible}>
        <form onSubmit={handleSubmit((data) => handleCreate(data))}>
          <button onClick={handleClickVisible}>
            <i class="bx bxs-message-square-x text-cyan-800 text-3xl"></i>
          </button>
          <h2 className="text-3xl font-bold">New user</h2>
          <div className="flex flex-col gap-3 text-cyan-800 font-bold">
            <div>
              <label htmlFor="firstName">First Name: </label>
              <input
                type="text"
                name="name"
                id="firstName"
                required
                {...register('first_name')}
                className="text-cyan-800 rounded-lg p-1 outline-0"
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name: </label>
              <input
                type="text"
                name="name"
                id="lastName"
                required
                {...register('last_name')}
                className="text-cyan-800 rounded-lg p-1 outline-0"
              />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                {...register('email')}
                className="text-cyan-800 rounded-lg p-1 outline-0"
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                {...register('password')}
                className="text-cyan-800 rounded-lg p-1 outline-0"
              />
            </div>
            <div>
              <label htmlFor="birthday">Birthday: </label>
              <input
                type="date"
                name="birthday"
                id="birthday"
                required
                {...register('birthday')}
                className="text-cyan-800 rounded-lg p-1 outline-0"
              />
            </div>
            <div>
              <button className="bg-cyan-600 text-white font-semibold p-2 rounded-md">
                Add New User
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default App;
