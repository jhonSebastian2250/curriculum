import React from 'react';
import photo from '../images/home.jpeg'
import '../style/styleAboutMI/aboutMICSS.css'

const AboutMIPage = () => {
    return (
        <div className='container-aboutmi'>
            <div className='aboutmi'>
                <picture className='photo'>
                    <img src={photo} alt='face' width="300px"/>
                </picture>
                <div>
                    <p>I am from Colombia. Fifth-semester student of the Systems Enginnering degree at the Universidad Nacional Abierta y a Distancia (UNAD) of Colombia, graduated from the Mission TIC program of the year 2021. I have taken development courses on virtual platfotms such as Udemy, Linkedln Learning and Open Bootcamp.</p>
                    <p>I like to be in constant learning with freelance work, to increase my knowledge in software develoment as well as in my soft skills.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMIPage;
