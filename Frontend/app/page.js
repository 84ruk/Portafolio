import Image from 'next/image'
import Header from './header'
import Link from 'next/link'
import About from './about'
import Portafolio from './portafolio'
import Contacto from './contacto'
import PaperPlane from '../public/Paper_Plane.svg'
import Flecha from '../public/Arrow_Up_Right_LG.svg'
import Rectangulo from '../public/Rectangle 44.svg'
import Linkedin from '../public/linkedin.svg'

export default function Home() {
  return (
    <>
    <Header />


    <main className="w-full flex flex-col p-10 sm:flex-row mt-10 mx-auto items-center justify-center space-x-0 md:space-x-48 mb-20">

      <div className='text-center md:text-left mt-10'>
        <h1 className='text-4xl font-bold text-gray-800'>Hola, mi nombre es:</h1>
        <h2 className='text-5xl font-extrabold text-blue-600'>Baruk Ramos</h2>
        <p className='text-xl text-gray-600'>Desarrollador Full-Stack Junior</p>
        <div className='mt-10 '>
        <Link className='w-44 h-12 px-1 py-2 mx-auto md:mx-0 rounded-md bg-blue-600 text-white font-bold shadow-md hover:bg-blue-500 transition-colors duration-300 hover:shadow-none flex items-center cursor-pointer hover:cursor-pointer text-center ' href="#contacto">
  <span className="flex-grow">Contactame</span>
  <Image src={PaperPlane} alt="PaperPlane" className="w-5 h-5 mr-5" />
</Link>

          <Link className='w-44 h-12 px-1 py-2 mx-auto md:mx-0 rounded-md text-black shadow-md mt-10  transition-colors duration-300 hover:shadow-none flex items-center cursor-pointer hover:cursor-pointer text-center ' href={'#portafolio'}><span className="flex-grow">Portafolio</span> <Image src={Flecha} alt="Flecha" className="w-5 h-5 mr-5" /></Link>
        </div>
      </div>

      <div className='flex flex-col items-center mt-16 mx-auto'>
        <div className='w-96 h-36 bg-black mx-auto'></div>
        <div className='flex justify-between w-40 h-16  mt-10 mx-auto'>
        <Image src={Rectangulo} alt="Rectangulo" className="w-7 h-7 hover:cursor-pointer hover:transform hover:scale-110 hover:text-blue-500 transition-transform duration-300 ease-in-out" />
<Image src={Linkedin} alt="linkedin icono" className="w-7 h-7 hover:cursor-pointer hover:transform hover:scale-110 hover:text-blue-500 transition-transform duration-300 ease-in-out"             href="https://precious-zabaione-c7a52d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"/>

          </div>
      </div>

    </main>

    <About />

    <Portafolio />
    <Contacto />
    </>
  )
}
