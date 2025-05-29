import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">MiSitio</Link>

        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li><Link to="/" className="hover:text-blue-500">Inicio</Link></li>
          <li><Link to="/servicios" className="hover:text-blue-500">Servicios</Link></li>
          <li><Link to="/contacto" className="hover:text-blue-500">Contacto</Link></li>
        </ul>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 text-gray-700">
          <Link to="/" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block px-4 py-2" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
