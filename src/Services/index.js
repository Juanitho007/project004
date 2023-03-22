import axios from 'axios';
import { toast } from 'react-toastify';
const BASE_URL = 'https://users-crud.academlo.tech/';
export const getUsers = async () => {
  try {
    const res = await axios.get(BASE_URL + 'users/');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const createUser = async (data) => {
  try {
    await axios.post(BASE_URL + 'users/', data);
    console.log('Se creo existosamente el usuario');
    toast.success('¡Usuario creado exitosamente!');
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (userId, newDataUser) => {
  try {
    await axios.put(BASE_URL + `users/${userId}/`, newDataUser);
    console.log(`El usuario ${userId} fue actualizado exitosamente`);
    toast.success('¡Usuario actualizado exitosamente!');
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(BASE_URL + `users/${userId}/`);
    console.log(`El usuarios con el id <${userId}> fue eliminado`);
    toast.success('¡Usuario eliminado exitosamente!');
  } catch (error) {
    console.log(error);
  }
};
export const emptyValueForm = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  birthday: '',
};
