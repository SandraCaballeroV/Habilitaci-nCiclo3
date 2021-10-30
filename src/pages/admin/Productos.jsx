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
];

const Productos = () => {
   const [mostrarTabla, setMostrarTabla] =useState (true);
   const [textoBoton, setTextoBoton]= useState ('Crear nuevo Producto');
   const [productos, setProductos] =useState ([]);
   const [colorBoton, setColorBoton] = useState ('gray');
   
   useEffect(() => {
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
      </div>
      <button onClick={()=>{setMostrarTabla (!mostrarTabla);}} 
      className={`text-white bg-${colorBoton}-500 rounded-md self-start  p-2 m-6 w-28 `}>{textoBoton}</button>
      {mostrarTabla ? (
      <TablaProductos listaProductos={productos} /> 
      ):( 
      <FormularioCreacionProductos 
      funcionParaMostrarlaTabla= {setMostrarTabla} 
      listaProductos={productos}
      funcionParaAgregarProductos={setProductos}
      />
      )}
      <ToastContainer position='bottom-center' autoClose={5000} />
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
const FormularioCreacionProductos =({
  funcionParaMostrarlaTabla,
  listaProductos,
  funcionParaAgregarProductos,
})=>{
  const [nombre, setNombre]= useState('');
  const[valor, setValor] =useState('');
  const[estado, setEstado]= useState('');
  const[descripcion, setDescripcion]= useState('');
  
  const enviarAlBackend=() => {
    console.log('nombre', nombre, 'valor', valor, 'estado', estado, 'descripcion', descripcion);
    if (nombre==='' || valor==='' || descripcion==='' || estado===''){
      toast.error ("Debe llenar todos los campos");
    }else {
    toast.success ("Su producto fue creado con éxito!");
    funcionParaMostrarlaTabla(true);
    funcionParaAgregarProductos([
      ...listaProductos,
       {nombre: nombre, valor: valor, estado: estado, descripcion: descripcion},
      ]);
    }
  };

  return (
  <div className ="flex flex-col items-center Justify-center"> 
  <h2 className='text-1xl font-extrabold text-black'> NUEVO PRODUCTO</h2>
    <form className= 'flex flex-col'>
      <label className='flex flex-col' htmlFor='nombre'>
        Nombre del Producto:
      <input 
      name='nombre'
       className= 'bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
      type='text'
      placeholder='Producto a crear'
      value={nombre}
      onChange ={(e)=> {
        setNombre (e.target.value);
      }}
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
      value={valor}
      onChange ={(e)=> {
        setValor (e.target.value);
      }}
      required
      />
      </label>
      <label className='flex flex-col' htmlFor='estado'>
        Estado de producto : 
      <select value={estado}
      onChange ={(e)=> {
        setEstado (e.target.value);
      }}
       className= 'bg-gray-50 border-gray-600 p-2 rounded-lg m-2'
         name='estado'
         required
         >
        <option disabled> seleccione una opción</option>
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
      value={descripcion}
      onChange ={(e)=> {
        setDescripcion (e.target.value);
      }}
      required
      />
      </label>

      <button
          type='submit'
          className='col-span-2 bg-indigo-400 p-2 rounded-full shadow-md hover:bg-gray-600 text-white'
          onClick={()=> {
            enviarAlBackend();
          }}
        >
          Guardar Producto
        </button>
      </form>
    </div>
  );
};
export default Productos;
