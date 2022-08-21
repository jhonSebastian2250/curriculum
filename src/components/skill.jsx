import React from 'react';
import '../style/skill.css'
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material';

const Skill = ({title, image, content}) => {
    return (
        <Card sx={{ maxWidth: 200, maxHeight: 200, background: '#234' }}>
            <CardHeader
                style={{margin:'0 1rem'}}
                title= {title}
            // subheader="September 14, 2016"
            />
            <CardMedia
                style={{width:'50%', marginLeft:'25%'}}
                component="img"
                image={image}
                alt= {title}
            />
            <CardContent style={{margin:'center'}}>
                <Typography variant="body2" color="#fff">
                    {content}
                </Typography>
            </CardContent>

        </Card>
    );
}

export default Skill;
