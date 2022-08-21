import React from 'react';
import Typewriter from 'typewriter-effect'
import '../style/home.css'

const HomePage = () => {

    return (
        <div className='container'>
            <h1 className='text'>JHON SEBASTIAN ZUÑIGA LOPEZ</h1>
            <div>
                <Typewriter
                    onInit={typewriter => {
                        typewriter
                            .typeString('Junior Developer')
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                    options={{
                        autoStart: true,
                        loop: true,
                        
                    }}
                />
            </div>


        </div>
    );
}

export default HomePage;
