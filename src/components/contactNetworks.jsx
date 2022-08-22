import React from 'react';
import skipe from '../images/skipe.png'
import linkedln from '../images/linkedln.png'
import git from '../images/git.png'

const style = {
    display: 'flex',
    gap: '3rem'
}

const Networks = ({ href, src, }) => {
    return (
        <picture>
            <a href={href} target='_blank'>
                <img src={src} alt={src} style={{
                    width: '2rem',
                    height: '2rem',
                    backgroundColor: '#fff'
                }} />
            </a>
        </picture>
    )
}

const ContactNetworks = () => {
    return (
        <div style={style}>
            <Networks href='/' src={skipe} />
            <Networks href='https://www.linkedin.com/in/jhonsebastian2250' src={linkedln} />
            <Networks href='https://github.com/jhonSebastian2250' src={git} />
        </div>
    );
}

export default ContactNetworks;
