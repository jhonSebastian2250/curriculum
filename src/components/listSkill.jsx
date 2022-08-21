import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';

import Skill from './skill';
import reactImage from '../images/react.png';
import javaImage from '../images/java.png'
import cImage from '../images/c.png'
import pythonImage from '../images/python.png'
import htmlImage from '../images/html.png'
import cssImage from '../images/css.png'

const data = [
    {
        img: reactImage,
        title: 'React',
        description: 'Intermediate',
    },
    {
        img: javaImage,
        title: 'Java',
        description: 'Basic',
    },
    {
        img: cImage,
        title: 'C#',
        description: 'Basic',
    },
    {
        img: pythonImage,
        title: 'Python',
        description: 'Basic',
    },
    {
        img: htmlImage,
        title: 'HTML',
        description: 'Basic',
    },
    {
        img: cssImage,
        title: 'CSS',
        description: 'Basic',
    },
];

export const CarouselRatio = () => {
    return (
        <div style={{width: '350', color:'#000'}}>
            <Box
            sx={{
                display: 'flex',
                marginTop: '10rem',
                marginLeft:'15rem',
                gap: 1,
                width: '55rem',
                py: 1,
                overflow: 'auto',
                scrollSnapType: 'x mandatory',
                '& > *': {
                    scrollSnapAlign: 'center',
                },
                '::-webkit-scrollbar': { display: 'none' },
            }}
        >
            {data.map((item) => (
                <Card
                    row
                    key={item.title}
                    variant="outlined"
                    sx={{
                        gap: 2,
                        '--Card-padding': (theme) => theme.spacing(2),
                    }}
                >
                    <AspectRatio
                        ratio="1"
                        sx={{ minWidth: 60, borderRadius: 'sm', overflow: 'auto' }}
                    >
                        <Skill title={item.title} image={item.img} content={item.description} />

                    </AspectRatio>
                </Card>
            ))}
        </Box>
        </div>
    );
}

export default CarouselRatio;
