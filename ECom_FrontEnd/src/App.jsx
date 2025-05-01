  import React from 'react';
  import Navbar from './Components/Navbar';
  import Home from './Pages/Home';
  import AllProduct from './Pages/AllProduct';
  import { Route, Routes, useLocation } from 'react-router-dom';
  import { Toaster } from 'react-hot-toast';
  import Footer from './Components/Footer';
  import { useAppContext } from './Context/Context';
  import Login from './Components/Login';
  import ProductCategory from './Pages/ProductCategory';

  const App = () => {
    const location = useLocation();
    const isSellerPath = location.pathname.startsWith('/seller');
    const { showUserLogin } = useAppContext();
    
    return (
      <div>
        {!isSellerPath && <Navbar />}
        {showUserLogin && <Login />}
        
        <Toaster position="top-center" />
        
        <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<AllProduct />} />
            <Route path='/products/:category' element={<ProductCategory />} />
          </Routes>
        </div>
        
        {!isSellerPath && <Footer />}
      </div>
    );
  };

  export default App;