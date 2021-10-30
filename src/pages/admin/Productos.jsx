import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {list} from 'purgecss/node_modules/postcss'
import 'react-toastify/dist/ReactToastify.css';

const productosBackend =[
  {
    nombre: 'Lápiz Negro',
    valor: '1000',
    estado: 'Disponible',
    Descripción: 'Color negro HB2',
  },
  {
    nombre: 'Lápiz Rojo',
    valor: '1000',
    estado: 'Disponible',
    Descripción: 'Color negro HB2',
  },
  {
    nombre: 'Lápiz HB5',
    valor: '1000',
    estado: 'Disponible',
    Descripción: 'Color negro',
  },
  {
    nombre: 'Scapuntas',
    valor: '1000',
    estado: 'Disponible',
    Descripción: 'Doble puntas',
  },
]

const Productos = () => {
  const [mostrarTabla, setMostrarTabla] =useState (true);
   const [textoBoton, setTextoBoton]= useState ('Crear nuevo Producto');
   const [productos, setProductos] =useState ([]);
    
   useEffect(() => {
      setProductos (productosBackend);
    }, []);
   
   
   useEffect(()=>{
     if (mostrarTabla){
       setTextoBoton("CREAR NUEVO PRODUCTO");
    }else {
       setTextoBoton('MOSTRAR TODOS LOS PRODUCTOS');
     }
   }, [mostrarTabla]);
   


  return (
    <div className= 'flex h-full w-full flex-col items-center justify-start'>
      <div className='flex flex-col'>
      <h2 className='text-2xl font-extrabold text-blue-700'>ADMINISTRACIÓN DE PRODUCTOS</h2>
      </div>
      <button onClick={()=>{setMostrarTabla (!mostrarTabla);}} className=' text-white bg-indigo-500 rounded-md self-start  p-2 m-6 w-28'>{textoBoton}</button>
      {mostrarTabla ? <TablaProductos listaProductos={productos} /> : <FormularioCreacionProductos/>}
    </div>    
  );
};

const TablaProductos =({listaProductos})=>{
  useEffect(()=>{
    console.log("listado de productos desde el backend, listaProducto")
  }, [listaProductos]);
  
  return (
    <div className=" flex flex-col items-center justify-center">
      <h2 className='text-1xl font-extrabold text-black'>TODOS LOS PRODUCTOS</h2>
  <table>
   <thead>
     <tr>
       <th>Producto</th>
       <th>Valor</th>
       <th>Estado</th>
       <th>Descripción</th>
     </tr>
   </thead>
     <tbody>
       <tr>
       <td> Dato1 </td>
       <td> Dato2 </td>
       <td> Dato3 </td>
       <td> Dato3 </td>
       </tr>
     </tbody>
      </table>
  </div>
  )
};
const FormularioCreacionProductos =()=>{
  return (
  <div className ="flex flex-col items-center Justify-center"> 
  <h2 className='text-1xl font-extrabold text-black'> NUEVO PRODUCTO</h2>
    <form className= 'grid grid-cols-1'>
      <input className= 'bg-gray-50 border-gray-600 p-2 rounded-lg m-2' type ='text'/>
      <input className= 'bg-gray-50 border-gray-600 p-2 rounded-lg m-2' type ='text'/>
      <input className= 'bg-gray-50 border-gray-600 p-2 rounded-lg m-2' type ='text'/>
      <input className= 'bg-gray-50 border-gray-600 p-2 rounded-lg m-2'type ='text'/>
      <buttton className= 'col-span-1 bg-pink-500 p-2 rounded-full shadow-md hover: bg-pink-300 text-white text-center'> Guardar Producto</buttton>
      </form>
      </div>
  )
};
export default Productos;
