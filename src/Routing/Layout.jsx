import React from 'react'
import { Outlet, useRouteError } from 'react-router-dom';
import Header from '../header/Header';
import { ErrorBoundary } from '../Errors/ErrorBoundary';

const Layout = () => {
    const error = useRouteError(); // Get any routing errors
    
    return (
      <div className='st-pg'>
        {!error && <Header/>} {/* Show header only when no error */}
        <div className="content-area">
          {error ? <ErrorBoundary /> : <Outlet className="set" />}
        </div>
        {/* {!error && <Footer />} Show footer only when no error */}
      </div>
    );
  };
  
  export default Layout;