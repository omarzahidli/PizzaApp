import { createRoot } from 'react-dom/client';
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './components/App.jsx';
import Main from './components/Main.jsx';
import Menu from './components/Menu.jsx';
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
import Filter from './components/Filter.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="menu" /> },
      { path: 'main', element: <Main /> },
      { path: 'menu', element: <><Filter /><Menu /></> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Error /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
