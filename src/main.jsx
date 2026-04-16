import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


import Navbar from './Components/shared/Navbar.jsx';
import Footer from './Components/shared/Footer.jsx';


import Home from './page/Home.jsx';
import Timeline from './page/Timeline.jsx';
import Stats from './page/Stats.jsx';

import NotFound from './page/NotFound.jsx';
import FriendsDetails from './page/FriendDetails.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
      
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/timeline", element: <Timeline /> },
      { path: "/stats", element: <Stats /> },
      { path: "/friend/:id", element: <FriendsDetails /> },
      { path: "*", element: <NotFound /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={2000} theme="light" />
  </StrictMode>,
)