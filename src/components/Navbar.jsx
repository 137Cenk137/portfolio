import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <NavLink to="/" className="text-white text-2xl font-bold">Home</NavLink>
                <NavLink to="/about" className="text-white text-2xl font-bold">About</NavLink>
                <NavLink to="/contact" className="text-white text-2xl font-bold">Contact</NavLink>
            </div>
        </nav>
    );
}