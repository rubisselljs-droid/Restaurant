import Logo from '../../assets/image/image.png'
import { Link } from 'react-router-dom'
export default function HeaderCliente() {
    return (
        <>
            <header className=' border-b-2 border-black flex justify-items-center p-1 h-30'>

                <div className=' mx-40 m-1 p-1  space-x-20'>
                    <img className='w-50 ' src={Logo} />
                </div>


                <nav className='justify-items-center m-10 space-x-20 text-blue-500 text-center'>

                    <Link to='/home' className='text-xl font-bold hover:underline '>Home</Link>
                    <Link to='/menu' className='text-xl font-bold hover:underline  '>Menu</Link>
                    <a href='#' className='text-xl font-bold hover:underline'>Reservas</a>
                    <a href='#' className='text-xl font-bold hover:underline  '>Contacto</a>

                </nav>
            </header>

        </>
    );
}