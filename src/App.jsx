import React from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Index from 'pages/Index';
import Admin from '../src/pages/Index';
import Productos from 'pages/admin/Productos';
import Login from '../src/pages/auth/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Registro from '../src/pages/auth/Registro';
import AuthLayout from 'layouts/AuthLayout';
import Ventas from '../src/pages/admin/Ventas';
import Usuarios from '../src/pages/admin/Usuarios';
import PrivateRoute from 'components/PrivateRoute';
import "tailwindcss/tailwind.css"


function App() {
  return (
          <Router>
              <Switch>
                <Route path={['/admin', '/admin/productos', '/admin/ventas', '/admin/usuarios']}>
                  <PrivateLayout>
                    <Switch>
                      <Route path='/admin/productos'>
                          <Productos />
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
 );
}

export default App;

