'use client'
import React, { useState } from 'react';

const cvButton = () => {
  const [fileName, setFileName] = useState('BJRV_CV');

  const downloadPDF = () => {
    const response = new Response(
      require(`../../public/${fileName}`),
      {
        headers: {
          'Content-Disposition': `attachment; filename=${fileName}`,
          'Content-Type': 'application/pdf',
        },
      }
    );

    response.download();
  };

  return (
    <div>
      <button onClick={downloadPDF}>Descargar PDF</button>
    </div>
  );
};

module.exports = cvButton;
