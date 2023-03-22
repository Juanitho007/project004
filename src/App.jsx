import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getUsers, createUser, updateUser, deleteUser, emptyValueForm } from './Services';
import Navbar from './Components/Navbar';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';

const App = () => {
  const { register, handleSubmit, reset } = useForm();
  const [users, setUsers] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [idUserToEdit, setIdUserToEdit] = useState(null);
  const loadUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCreateUpdate = async (data) => {
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
    handleClickVisible();
    const { id, ...data } = userData;
    reset(data);
    setIdUserToEdit(id);
  };
  const handleClickVisible = () => {
    setIsFormVisible(!isFormVisible);
    setIdUserToEdit(null);
    reset(emptyValueForm);
  };
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-gradient-to-r from-cyan-300 to-white flex flex-col justify-center items-center p-10 text-white gap-10">
      <Navbar btnClickVisible={handleClickVisible} />
      <UserList users={users} deleteUser={handleDelete} loadUsersForm={loadUsersForm} />
      <UserForm
        idUserToEdit={idUserToEdit}
        handleCreateUpdate={handleCreateUpdate}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
        isVisible={isFormVisible}
        handleClickVisible={handleClickVisible}
      />
      <Footer />
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default App;
