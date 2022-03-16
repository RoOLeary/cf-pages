import React from 'react';
import Head from 'next/head';
const Layout = ({ children }) => {
    return(
        <div className="nextWind_layout">
            {children}
        </div>
    )
}
export default Layout;