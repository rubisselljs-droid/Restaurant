import Logo from '../../assets/image/image.png'
export default function HeaderCliente() {
    return (
        <>
            <header className='header-cliente'>
                <img className='logo' src={Logo} />

                <nav>
                    <ul className='nav-cliente'>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Reservas</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
            </header>

        </>
    );
}