import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
/* 
This component is for Displaying Faculty item 
*/
const FacultyCart = (props) => {
    const {img,msg,name,dean}=props.faculty
    return (
        <div>
             <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="200px"
                    // style={{'height': '30%'}}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        <small style={{'fontSize': '15px'}}>{dean}</small>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {msg.slice(0,500)}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default FacultyCart;