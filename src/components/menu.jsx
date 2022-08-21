import React, { useState } from 'react';
import { Box, Tabs, Tab, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import '../style/styleMenu/menuCSS.css'


const Menu = () => {

    const activar = (e) => {
        console.log(e)
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'white' }} id='box'>
            <Tabs
                texColor='secundary'
                aria-label="lab API tabs example"
            >
                <Link to='/' className='link linkHome' onClick={activar}>
                    <Tab label='Home' />
                </Link>
                <Link to='aboutmi' className='link'>
                    <Tab label='About Mi' />
                </Link>
                <Link to='skills' className='link'>
                    <Tab label='Skills' />
                </Link>
                <Link to='projects' className='link'>
                    <Tab label='Projects' />
                </Link>
                <Link to='contact' className='link'>
                    <Tab label='Contact' />
                </Link>
            </Tabs>
        </Box>

    );
}

export default Menu;
