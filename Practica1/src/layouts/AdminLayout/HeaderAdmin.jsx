import { Link } from 'react-router-dom';

export default function HeaderAdmin() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav>
                <Link to="/admin/producto" className="hover:text-blue-400">Productos</Link>
            </nav>
        </header>
    );
}