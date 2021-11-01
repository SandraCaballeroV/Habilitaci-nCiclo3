import React, {useEffect}  from 'react';
import Sidebar from '../components/Sidebar';
import SidebarResponsive from '../components/SiderbarResponsive'


const PrivateLayout = ({children}) => {

    return (
        <div className='flex w-screen h-screen'>
          <div className='flex flex-col lg:flex-row flex-nowrap h-full w-full'>
            <Sidebar />
            <SidebarResponsive/>
            <div>
              <i className = 'fas fa-bars'/>
            </div>
            <main className='flex w-full  overflow-y-scroll items-center justify-center'>
              {children}
            </main>
          </div>
        </div>
      );
    };
    
    export default PrivateLayout;