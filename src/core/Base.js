import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Base = ({children}) => {
    return(
        <div>
        <Header />
            <main className="main">
                {children}
            </main>
        <Footer />
        </div>
    )
}

export default Base