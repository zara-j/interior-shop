import { useState } from 'react';
import { FaPhoenixSquadron } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import PageLinks from './PageLinks';
import IconNavbar from './IconNavbar';

const MyHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-light flex lg:flex-row md:justify-between items-center p-4 relative">
      <h2 className="flex flex-row items-center font-bold text-3xl">
        <FaPhoenixSquadron className="m-1" /> Cozy Home
      </h2>

      <div className="hidden md:flex">
        <PageLinks />
      </div>
      
      <div className="hidden md:flex">
        <IconNavbar />
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl focus:outline-none float-right ml-10">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 md:hidden animate-slide-down">
          <PageLinks />
          <div className="border-t border-gray-200 mt-2">
            <IconNavbar />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyHeader;
