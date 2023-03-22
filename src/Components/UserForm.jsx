import React from 'react';
import { emptyValueForm } from '../Services/index';
const UserForm = ({
  handleCreateUpdate,
  register,
  handleSubmit,
  reset,
  isVisible,
  handleClickVisible,
  idUserToEdit,
}) => {
  const myHandleSubmit = async (data) => {
    await handleCreateUpdate(data);
    reset(emptyValueForm);
  };

  return (
    <div>
      {isVisible && (
        <div className="h-screen overflow-hidden flex flex-row justify-center items-center absolute inset-0 backdrop-blur-xl  bg-gradient-to-t from-cyan-400 to-white">
          <form onSubmit={handleSubmit(myHandleSubmit)}>
            <button onClick={handleClickVisible} className="button">
              <i class="bx bxs-x-square bx-spin border-0 text-4xl"></i>
            </button>
            <h2 className="text-3xl font-bold">{idUserToEdit ? 'Edit' : 'Add'} User</h2>
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
                <button className="button">
                  {idUserToEdit ? (
                    <i class="bx bxs-edit-alt bx-tada-hover border-0 text-4xl text-white"></i>
                  ) : (
                    <i class="bx bxs-user-plus bx-tada-hover border-0 text-4xl text-white"></i>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserForm;
