'use client'
import React, { useState } from "react";
import axios from "axios";
import Alert from "./components/alert";

export default function Contacto() {

  /* const { loading, setLoading, setErrorMessages, errorMessages, setSuccessMessages} = useAppContext(); */

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Verificar si los campos están vacíos
     if (!email || !name || !message) {
      setAlert({
        type: 'error', 
        message: 'Revise los campos.',
      });
      return;
    }
  
    if (message.length < 6) {
      setAlert({
        type: 'error', 
        message: 'Es necesario un mensaje de minimo 6 caracteres.',
      });
      return;
    } 
  
    try {

      const response = await axios.post(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/contact`, {
        email,
        name,
        message
      });
      if (response.status === 200) {
        
        setAlert({
          type: 'success', // Puedes cambiar a 'error' según la lógica de tu aplicación
          message: 'Mensaje enviado correctamente.',
        });
        
      } else {
        
        setAlert({
          type: 'error', 
          message: 'Error en el servidor.',
        });
      }
    } catch (error) {
      
      console.log();
      setAlert({
        type: 'error', 
        message: error.response.data.msg,
      });
      
    }
  };



  return (
    <div className="bg-blue-100 p-10 pb-10" id="contacto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-5">Contacto</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3 p-4 mx-auto">
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
          {alert && <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />}
            <label htmlFor="name" className="text-gray-800 font-semibold">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-800 font-semibold">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-gray-800 font-semibold">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows="5"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md shadow-md hover:bg-blue-500 transition-colors duration-300 hover:shadow-none"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
