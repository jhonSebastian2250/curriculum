import React from 'react';
import { Box, Tab } from '@mui/material';
import { Link } from 'react-router-dom';
import '../style/styleMenu/menuCSS.css'

const Menu = () => {

    const Nav = ({ to, label, value, classname }) => {
        return (
            <Link to={to} className={label === 'Home' ? 'link linkHome' : 'link'}>
                <Tab label={label} value={value} />
            </Link>
        )
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'white' }}>
            <div className='nav'>
                <Nav to='/' label='Home' value='0' />
                <Nav to='/aboutmi' label='AboutMi' value='1' />
                <Nav to='/skills' label='Skill' value='2' />
                <Nav to='/projects' label='Projects' value='3' />
                <Nav to='/contact' label='Contact' value='4' />
            </div>
        </Box>

    );
}

export default Menu;
