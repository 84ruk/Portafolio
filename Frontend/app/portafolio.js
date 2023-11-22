'use client'
import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Playcar from '../public/buena playcar.png'
import Pokedex from '../public/buena.png'
import Graficador from '../public/vectores.png'


export default function Portafolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-10" id="portafolio">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Portafolio</h1>
      </div>

      <Slider {...settings}>


        <div className="">

        <div className="slider-container w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto shadow-xl max-w-xl min-w-20 ">
  <div className="slider-card">
  <div className="rounded-t-lg"><Image src={Playcar} alt='Imagen proyecto'/></div>
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-gray-800">Play Car - App estilo Airbnb</h2>
        <p className="text-gray-600 mb-4">
        Este proyecto es una plataforma para agencias de viajes que permite a los clientes registrarse, reservar servicios y explorar el catálogo. Incluye un panel de administración para la gestión de productos y la agenda. Utiliza Server-Side Rendering (SSR) con Next.js para una carga rápida y se ha optimizado para SEO.
        </p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Tecnologías Utilizadas</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
            <li>Next</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between">
      <Link
            href="https://github.com/84ruk/PlayCar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md shadow-md hover:bg-blue-500 transition-colors duration-300 hover:shadow-none"
          >
            Repositorio
          </Link>
          <Link
            href="https://play-car.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-black font-bold rounded-md shadow-md transition-colors duration-300 hover:shadow-none"
          >
            Ver Proyecto
          </Link>
      </div>
      </div>



    </div>

  </div>
</div>

<div className="">

<div className="slider-container w-1/2 mx-auto  shadow-xl max-w-xl  min-w-20">
  <div className="slider-card">
  <div className="rounded-t-lg"><Image src={Pokedex} alt='Imagen proyecto'/></div>
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-gray-800">Pokedex</h2>
      <p className="text-gray-600 mb-4">
      Pokedex es una aplicación web que muestra información sobre Pokémon. La aplicación obtiene datos de una API y permite filtrar por tipo, buscar por nombre y utilizar desplazamiento infinito para una experiencia fluida.
      </p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Tecnologías Utilizadas</h3>
        <ul className="list-disc pl-6 text-gray-600">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-between ">
      <Link
            href="https://github.com/84ruk/PokeAPI"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md shadow-md hover:bg-blue-500 transition-colors duration-300 hover:shadow-none"
          >
            Repositorio
          </Link>
          <Link
            href="https://precious-zabaione-c7a52d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-black font-bold rounded-md shadow-md transition-colors duration-300 hover:shadow-none"
          >
            Ver Proyecto
          </Link>
      </div>
    </div>

  </div>

</div>
</div>



<div className=" min-w-20">

<div className="slider-container w-1/2 mx-auto shadow-xl  max-w-xl min-w-20">
  <div className="slider-card items-center">
  <div className="rounded-t-lg mx-auto w-full"><Image src={Graficador} alt='Imagen proyecto' className="mx-auto"/></div>
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-gray-800">Graficador de Vectores</h2>
      <p className="text-gray-600 mb-4">
      Graficador de vectores es un proyecto escolar elaborado en python para la materia de fisica, en la cual el usuario debera ingresar primero si desea graficar vectores en tercera o segunda dimension, una ves ingresado eso se ingresaran las coordenadas y la operacion que se quiere realizar, .
      </p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Tecnologías Utilizadas</h3>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Python</li>
          <li>Matplotlib</li>
          <li>NumPy</li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-between ">
      <Link
            href="https://github.com/84ruk/PokeAPI"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md shadow-md hover:bg-blue-500 transition-colors duration-300 hover:shadow-none"
          >
            Repositorio
          </Link>
          <Link
            href="https://precious-zabaione-c7a52d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-black font-bold rounded-md shadow-md transition-colors duration-300 hover:shadow-none"
          >
            Ver Proyecto
          </Link>
      </div>
    </div>

  </div>

</div>
</div>



        {/* Agrega más proyectos aquí */}
      </Slider>
    </div>
  );
}
