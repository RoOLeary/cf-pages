import React from 'react';
import Head from 'next/head';
import Link from 'next/link'; 

const Nav = () => {
    return(
        <ul>
            <Link href={`/`}>
                <a>Home</a>
            </Link>
                <Link href={`/blog`}>
                <a>Blog</a>
            </Link>
        </ul>
    )
}


const Layout = ({ children }) => {
    return(
        <div className="nextWind_layout">
            <Nav />
            {children}
        </div>
    )
}
export default Layout;