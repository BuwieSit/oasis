import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/landingPage.jsx';
import Register from './pages/register.jsx';
import Login from './pages/login.jsx';
import NotFound from './pages/notFound.jsx';

const router = createBrowserRouter([
  {path: "/", element: <LandingPage />},
  {path: "/login", element: <Login />},
  {path: "/register", element: <Register />},
  {path: "*", element: <NotFound />}
  
],
 { basename: "/oasis" }
); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  
  </StrictMode>,
)
