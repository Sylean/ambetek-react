import React from 'react';
import './Home.scss';

function Home() {
    return(
        <div className="home-container">
            <div className="home-slide splash">
                <h1>Hello!</h1>
                <div className="splash-content">
                    Welcome to the new face of Ambetek!
                </div>
            </div>
            <div className="home-slide slide-1">
                <h1>1</h1>
            </div>
            <div className="home-slide slide-2">
                <h1>2</h1>
            </div>
            <div className="home-slide slide-3">
                <h1>3</h1>
            </div>
            <div className="home-slide slide-4">
                <h1>4!</h1>
            </div>
        </div>
    );
}

export default Home;