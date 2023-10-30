import Link from "next/link";

export default function About() {
  return (
    <div className="bg-blue-100 p-10 pb-10" id="sobremi">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Sobre mí</h1>
      </div>

      <div className="w-2/3 mx-auto mt-8 bg-white rounded-md p-5 shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Habilidades</h2>
        <p className="text-gray-600">
          Mi experiencia incluye JavaScript, HTML, CSS, React, Node.js, Next.js, PostgreSQL y MongoDB.
        </p>
      </div>

      <div className="w-2/3 mx-auto mt-8 bg-white rounded-md p-5 shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Quién soy?</h2>
        <p className="text-gray-600">
          Soy Baruk Ramos, tengo 21 años y soy un apasionado desarrollador autodidacta. Estudio Ingeniería en Sistemas Computacionales y aspiro a ser un desarrollador Fullstack.
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link href="#contacto" className="px-4 py-2 rounded-md bg-blue-600 text-white font-bold shadow-md hover:bg-blue-500 transition-colors duration-300 hover:shadow-none  items-center cursor-pointer hover:cursor-pointer">
          ¡Contáctame!
        </Link>
      </div>
    </div>
  );
}
