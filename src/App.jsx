import React, {useState, useEffect} from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Index from 'pages/Index';
import Admin from '../src/pages/Index';
import Vehiculos from 'pages/admin/Vehiculos';
import Login from '../src/pages/auth/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'styles/styles.css'
import Registro from '../src/pages/auth/Registro';
import AuthLayout from 'layouts/AuthLayout';
import Ventas from '../src/pages/admin/Ventas';
import Usuarios from '../src/pages/admin/Usuarios';
import PrivateRoute from 'components/PrivateRoute';
import "tailwindcss/tailwind.css";
import {DarkModeContext , } from '../src/context/darkMode';
import {UserContext} from '../src/context/userContext';




function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    console.log('modo dark:', darkMode);
  }, [darkMode]);
  return (

    <div className='App'>
           <DarkModeContext.Provider>
  
          <Router>
              <Switch>
                <Route path={['/admin', '/admin/vehiculos', '/admin/ventas', '/admin/usuarios']}>
                  <PrivateLayout>
                    <Switch>
                      <Route path='/admin/vehiculos'>
                          <Vehiculos />
                      </Route>
                      <Route path='/admin/ventas'>
                          <Ventas />
                      </Route>
                      <Route path='/admin/usuarios'>
                          <Usuarios />
                      </Route>
                      <Route path='/admin'>
                        <Admin />
                      </Route>
                    </Switch>
                  </PrivateLayout>
                </Route>
                <Route path={['/login', '/registro']}>
                  <AuthLayout>
                    <Switch>
                      <Route path='/login'>
                        <Login />
                      </Route>
                      <Route path='/registro'>
                        <Registro />
                      </Route>
                    </Switch>
                  </AuthLayout>
                </Route>
                <Route path={['/']}>
                  <PublicLayout>
                    <Route path='/'>
                      <Index />
                    </Route>
                  </PublicLayout>
                </Route>
              </Switch>
            </Router>
            </DarkModeContext.Provider>
           
      
      </div>
 );
}

export default App;

