import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';

const productosBackend =  [
  {
    id : '1',
    nombre: 'Lápiz Negro',
    valor: '1000',
    estado: 'Disponible',
    descripcion: 'Color negro HB2',
  },
  {
    id: '2',
    nombre: 'Lápiz Rojo',
    valor: '1000',
    estado: 'No Disponible',
    descripcion: 'Color negro HB2',
  },
  {
    id: '3',
    nombre: 'Lápiz HB5',
    valor: '1000',
    estado: 'Disponible',
    descripcion: 'Color negro',
  },
  {
    id: '4',
    nombre: 'Scapuntas',
    valor: '1000',
    estado: 'Disponible',
    descripcion: 'Doble puntas',
  },
];

const Productos = () => {
  const [textoBoton, setTextoBoton]= useState ('Crear Nuevo Producto');
  const [productos, setProductos] =useState ([]);
  const [colorBoton, setColorBoton] = useState ('gray');
  const [mostrarTabla, setMostrarTabla] =useState (true); 
  
  useEffect(() => {
     //lista producto desde backend
     setProductos(productosBackend);
   }, []);
   
   
   useEffect(()=>{
     if (mostrarTabla){
       setTextoBoton("Crear Nuevo Producto");
       setColorBoton ("gray")
    }else {
       setTextoBoton('Mostrar Todos los Productos');
       setColorBoton ("indigo")
     }
   }, [mostrarTabla]);

  return (
    <div className= 'flex h-full w-full flex-col items-center justify-start'>
      <div className='flex flex-col'>
      <h2 className='text-2xl font-extrabold text-black-700'>ADMINISTRACIÓN DE PRODUCTOS</h2>
      <button 
      onClick={()=>{
        setMostrarTabla (!mostrarTabla);
      }} 
      className={`text-white bg-${colorBoton}-500 rounded-md self-start  p-2 m-6 w-28 `}
      >
        {textoBoton}
        </button>
      </div>
      {mostrarTabla ? (
        <TablaProductos
           listaProductos={productos}
          
        />
      ) : (
        <FormularioCreacionProductos
          
        />
      )}
      <ToastContainer position='bottom-center' autoClose={5000} />
    </div>
  );
};

const TablaProductos =({listaProductos})=>{
useEffect(()=>{
    console.log("listado de productos desde el backend", listaProductos)
  }, [listaProductos]);
  
  return (
    <div className=" flex flex-col items-center justify-center">
      <h2 className='text-1xl font-extrabold text-black'>TODOS LOS PRODUCTOS</h2>
  <table>
   <thead>
     <tr>
       <th> id </th>
       <th>Producto</th>
       <th>Valor</th>
       <th>Estado</th>
       <th>Descripción</th>
     </tr>
   </thead>
     <tbody>
       {listaProductos.map((productos)=>{
        return (
          <tr> 
            <td>{productos.id}</td>      
          <td>{ productos.nombre} </td>
          <td> {productos.valor} </td>
          <td> {productos.estado} </td>
          <td> {productos.descripcion}</td>
       </tr>
        );
       })}
       </tbody>
       </table>
       </div>
  );
};
const FormularioCreacionProductos =({ setMostrarTabla, listaProductos, setProductos})=>{
  const form=useRef(null);
  
  const submitForm = (e) => {
    e.preventDefault ();
    const fd= new FormData(form.current);
    
    const nuevoProducto ={};
    fd.forEach((value, key)  => {
      nuevoProducto[key]=value;
  });

    setMostrarTabla(true);
    setProductos([...listaProductos, nuevoProducto]);
  
    toast.success ('Producto creado con éxito!');
  };

  return (
  <div className ="flex flex-col items-center Justify-center"> 
  <h2 className='text-1xl font-extrabold text-black'> NUEVO PRODUCTO</h2>
    <form ref= {form} onSubmit={submitForm} className= 'flex flex-col'>
    <label className='flex flex-col' htmlFor='nombre'>
        Id Producto:
      <input 
      name='id'
       className= 'bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
      type='text'
      placeholder='Id' 
      required
      />
      </label>
      <label className='flex flex-col' htmlFor='nombre'>
        Nombre del Producto:
      <input 
      name='nombre'
       className= 'bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
      type='text'
      placeholder='Producto a crear'
      required
      />
      </label>
      <label className='flex flex-col' htmlFor='valor'>
        Precio:  $
      <input
      name='valor'
       className= 'bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
      type='number'
      min= {1000}
      max= {500000}
      placeholder='Precio'
      required
      />
      </label>
      <label className='flex flex-col' htmlFor='estado'>
        Estado de producto : 
      <select 
      className= 'bg-gray-50 border-gray-600 p-2 rounded-lg m-2'
         name='estado'
         required
         defaultValue={0}
         >
        <option disabled value={0}>
           seleccione una opción
           </option>
        <option> Disponible</option>
        <option> No Disponible</option>
      </select>
      </label>
      <label className='flex flex-col' htmlFor='descripcion'>
        Descripción del Producto: 
      <input
      name='descripcion'
       className= 'bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
      type='text'
      placeholder='Descripción del producto'
      required
      />
      </label>

      <button
          type='submit'
          className='col-span-2 bg-indigo-400 p-2 rounded-full shadow-md hover:bg-gray-600 text-white'
  
        >
          Guardar Producto
        </button>
      </form>
    </div>
  );
};
export default Productos;
