 import React, {useEffect, useState} from 'react';
 
 const vehiculosBackend =[
   {
     nombre:"Corolla",
     marca: "Toyota",
     modelo: 2000,
   },
   {
    nombre:"Sandero",
    marca: "Renault",
    modelo: 2020,
  },
  {
    nombre:"Rav4",
    marca: "Toyota",
    modelo: 2021,
  },
  {
    nombre:"Fiesta",
    marca: "For",
    modelo: 2019,
  },
  {
    nombre:"Twingo",
    marca: "Renault",
    modelo: 2012,
  }
 ];
 
 const Vehiculos = () => {
const [mostrarTabla, setMostrarTabla] =useState (true);
const [textoBoton, setTextoBoton] = useState ('Crear Nuevo Vehículo');
const [vehiculos, setVehiculos] = useState ([]);

useEffect(()=>{
  setVehiculos(vehiculosBackend);

},[]);





useEffect(()=>{
if (mostrarTabla){
  setTextoBoton ('Crear Nuevo Vehículo');
 } else {
   setTextoBoton ('Mostrar Todos los Vehículo');
 }
}, [mostrarTabla]);

return (
  <div className= 'flex h-full w-full flex-col items-center justify-start p-8'>
    <div className='flex flex-col'>
    <h2 className= 'text-3xl font-extrabold text-gray-900'>Página de administración de vehículos</h2>
  <button 
  onClick={()=>{
    setMostrarTabla(!mostrarTabla);
    }}
    className= 'text-white bg-indigo-500 p-5 rounded-full m-6 w-28 self-end'
    >
      {textoBoton}
    </button> 
    </div>
  {mostrarTabla ? (
     <TablaVehiculos listaVehiculos={vehiculos}/>
  ) :(
     <FormularioCreacionVehiculos/>
  )}
  </div>
);
};


const TablaVehiculos=({listaVehiculos}) =>{
  useEffect(()=> {
  console.log ("este es el listado de vehiculos", listaVehiculos);
  }, [listaVehiculos]);
return (
  <div className='flex flex-col items-center justify-center'>
<h2 className='text-2xl font-extrabold text-gray-800'>Todos los vehículos</h2>
  
<table>
  <thead>
    <tr>
    <th>Nombre del vehículo</th>
    <th>Marca del vehículo</th>
    <th>Modelo del vehículo</th>
    </tr>
  </thead>
  <tbody>
    {listaVehiculos.map((vehiculo)=>{
      return (
    <tr>
    <td>{vehiculo.nombre}</td>
    <td>{vehiculo.marca}</td>
    <td>{vehiculo.modelo}</td>
    </tr>
      );
    })}

  </tbody>
  </table>
  </div>
) 
};

const FormularioCreacionVehiculos =()=> {
  return (
  <div className='flex flex-col items-center justify-center'> 
    <h2 className= 'text-2xl font-extrabold text-gray-800'> Crear nuevo vehículo</h2>
    <form className= 'grid grid-col'>
    <input className=' bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'  type ='text' />
    <input className= ' bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type ='text' />
    <input className= ' bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type ='text' />
    <input className= ' bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'  type ='text' />
      <botton className= 'col-span-2 bg-green-400 p-2 rounded-full shadow-md text-white hover:bg-green-600 '>
        Guardar vehículo
      </botton>
    </form>
  </div>
  );
};
     
 export default Vehiculos;

 