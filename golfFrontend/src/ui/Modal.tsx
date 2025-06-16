import React from "react";
import {useModal} from './ModalContext'



const Modal = ({ children }: {children: React.ReactNode}) => {

  const {isOpen, close} = useModal()  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-white rounded-lg p-[25px] w-full w-[300px] mx-4">
        <button
          onClick={close}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;