
// App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer';
import { useAppContext } from './Context/Context';
import Login from './Components/Login';

const App = () => {
  const isSellerPath = useLocation().pathname.includes('seller');
  const{showUserLogin}=useAppContext()
  return (
    <div>
      {!isSellerPath && <Navbar />}
      {showUserLogin? <Login/>:null}
      
      <Toaster />
      
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
     { !isSellerPath &&
      <Footer/>}
    </div>
  );
};

export default App;