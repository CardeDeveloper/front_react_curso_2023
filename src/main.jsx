import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Redux
import { store } from './store.js'
import { Provider } from 'react-redux'

//components
import RequireAuth from './auth/RequireAuth.jsx'
import Login from './components/login/login.jsx';
import ErrorPage from './error-page.jsx';
import NavbarApp from './components/navbar/Navbar.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from './components/admin/Admin.jsx'
import Stats from './components/stats/Stats.jsx'



const router = createBrowserRouter([
  {
    element: <RequireAuth />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App/>,
        children : [
          {
            path: "/home",
            element:<Stats/>
          },
          {
            path: "/invoices",
            element:<Admin/>
          }
          
        ]
        
      },
    ],
  },
  {
    path: "/login",
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>  
  </React.StrictMode>,
)
