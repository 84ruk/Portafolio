'use client'
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Alert = ({ type, message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={`p-4 mb-4 bg-opacity-75 rounded-md ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
      }`}
    >
      <div className="flex justify-between items-center">
        <p>{message}</p>
        <button onClick={handleClose} className="text-sm font-semibold">
          Cerrar
        </button>
      </div>
    </motion.div>
  );
};

export default Alert;
