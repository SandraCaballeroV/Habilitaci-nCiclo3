//import ImagenLogo from '../media/ImagenLogo.png';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useActiveRoute from '../hooks/useActiveRoute';
import ImagenLogo from './ImagenLogo';

import PrivateComponent from './PrivateComponent';

const Sidebar = () => {
   const cerrarSesion = () => {
    };

  return (
    
    <nav className='hidden lg:flex lg:w-72 border border-gray-300 h-full flex-col bg-gray-200 p-4 sidebar'>
    <Link to='/admin'>
      <ImagenLogo />
    </Link>     
      <div className='my-4'>
        
    
          <Ruta  ruta='/admin/productos' nombre='Productos' />
       
        
          <Ruta ruta='/admin/ventas' nombre='Ventas' />
        
      
          <Ruta ruta='/admin/usuarios' nombre='Usuarios' />
       
      </div>
      <button  onClick={() => cerrarSesion()}>Cerrar Sesión</button>
    </nav>
  );
};

const Ruta = ({ ruta, nombre, usuario }) => {
  console.log('usuario', usuario);
  const isActive = useActiveRoute(ruta);
  return (
    <Link to={ruta}>
      <button
        className={`p-1 my-2  bg-${
          isActive ? 'indigo' : 'gray'
        }-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md`}
      >
        {usuario ? (
          <>
            <img src={usuario.picture} className='h-5 w-5 rounded-full' />
            {usuario.name}
          </>
        ) : (
          <>
            <i className={` w-10`} />
            {nombre}
          </>
        )}
      </button>
    </Link>
  );
};

export default Sidebar;