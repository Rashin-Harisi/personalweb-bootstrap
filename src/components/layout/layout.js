import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import NavBar from '../navbar/navbar';


const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Header />
            <NavBar/>
            {children}
            <Footer />
        </div>

    )
}

export default Layout;