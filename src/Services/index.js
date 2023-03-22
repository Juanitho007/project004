import axios from 'axios';
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
  } catch (error) {
    console.error(error);
  }
};
export const updateUser = async (userId, newDataUser) => {
  try {
    await axios.put(BASE_URL + `users/${userId}/`, newDataUser);
    console.log(`El usuario ${newDataUser.name} fue actualizado exitosamente`);
  } catch (error) {
    console.error(error);
  }
};
export const deleteUser = async (userId) => {
  try {
    await axios.delete(BASE_URL + `users/${userId}/`);
    console.log(`El usuarios con el id <${userId}> fue eliminado`);
  } catch (error) {
    console.log(error);
  }
};
