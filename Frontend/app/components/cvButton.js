'use client'
import React, { useState } from 'react';
import Rectangulo from '../../public/Rectangle 44.svg'
import Image from 'next/image';

const CVButton = () => {
  const [isDownloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/api/download`); // URL del servidor Express
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'BJRV_CV.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error al descargar el archivo', error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div>
      <button
      onClick={handleDownload}
      disabled={isDownloading}
    >
      <Image src={Rectangulo}  alt="Rectangulo" className="w-7 h-7 hover:cursor-pointer hover:transform hover:scale-110 hover:text-blue-500 transition-transform duration-300 ease-in-out"/>
      </button>
    </div>
  );
};

module.exports = CVButton;
