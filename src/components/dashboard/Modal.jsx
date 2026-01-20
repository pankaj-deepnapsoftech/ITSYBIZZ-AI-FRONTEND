import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative w-[95vw] max-w-6xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 cursor-pointer right-4 text-gray-500 hover:text-red-500 transition"
        >
          <IoClose size={30} />
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
