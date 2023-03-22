import React from 'react';

const Modal = ({ isVisible, children }) => {
  return (
    <>
      {isVisible && (
        <div className="flex flex-row justify-center items-center absolute inset-0 backdrop-blur-xl  bg-gradient-to-t from-cyan-600 to-blue-200">
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
