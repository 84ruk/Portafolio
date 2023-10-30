'use client'
import React, { useState } from "react";
import axios from "axios";

export default function Contacto() {

  /* const { loading, setLoading, setErrorMessages, errorMessages, setSuccessMessages} = useAppContext(); */

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Verificar si los campos están vacíos
/*     if (!email || !name || !message) {
      setErrorMessages('Todos los campos son obligatorios');
      return;
    }
  
    if (message.length < 6) {
      setErrorMessages('El mensaje debe tener al menos 6 caracteres');
      return;
    } */
  
    try {


      const response = await axios.post(`http://localhost:8080/api/contact`, {
        email,
        name,
        message
      });
      if (response.status === 200) {
        
        console.log('Mensaje guardado con éxito.');
        
      } else {
        
        console.error('Error en el servidor:', response.data);
        
      }
    } catch (error) {
      
      console.error('Error en la solicitud:', error);
      
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
              onClick={handleSubmit}
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
