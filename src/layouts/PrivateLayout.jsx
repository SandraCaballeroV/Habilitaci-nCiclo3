import React, { useEffect, useState } from 'react';
import Sidebar from 'components/Sidebar';
import SidebarResponsive from 'components/SidebarResponsive';
import { useAuth0 } from '@auth0/auth0-react';
import ReactLoading from 'react-loading';
import { obtenerDatosUsuario } from 'utils/api';
import { useUser } from 'context/userContext';

const PrivateLayout = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, logout } =
    useAuth0();
  const [loadingUserInformation, setLoadingUserInformation] = useState(false);
  const { setUserData } = useUser();

  useEffect(() => {
    const fetchAuth0Token = async () => {
      
      setLoadingUserInformation(true);
      const accessToken = await getAccessTokenSilently({
        audience: `api-habilitacion-ciclo3`,
      });
      // 2. recibir token de auth0
      localStorage.setItem('token', accessToken);
      console.log(accessToken);
      // 3. enviarle el token a el backend
      await obtenerDatosUsuario(
        (response) => {
          console.log('response con datos del usuario', response);
          setUserData(response.data);
          setLoadingUserInformation(false);
        },
        (err) => {
          console.log('err', err);
          setLoadingUserInformation(false);
          logout({ returnTo: 'http://localhost:3000/admin' });
        }
      );
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading || loadingUserInformation)
    return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />;

  if (!isAuthenticated) {
    return loginWithRedirect();
  }

  return (
       <div className='flex w-screen h-screen'>
      <div className='flex flex-col lg:flex-row flex-nowrap h-full w-full'>
        <Sidebar />
        <SidebarResponsive />
        <main className='flex w-full  overflow-y-scroll items-center justify-center'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;