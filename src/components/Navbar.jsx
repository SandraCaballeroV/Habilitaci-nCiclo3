import React from 'react';

const Navbar = () => {
    return (
    <nav className='bg-gray-400'>
    <ul className='flex w-full justify-between my-3'></ul>
    

    <button
      className='mx-auto bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-700'>Iniciar Sesión</button>

    </nav>
  );
    

};

export default Navbar;
