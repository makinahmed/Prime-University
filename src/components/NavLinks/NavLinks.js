import { Button, Grid, TextField } from '@mui/material';
import { fontWeight } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

/* 
This component is for Nav  bar links
*/
const NavLinks = () => {
    const linkSytle = {
        'textDecoration': 'none',
        'fontSize': '35px',
        'color': 'black'
    }
    const containerStyle = {
        'height': '100px',
        'backgroundColor': '#6bacbf'

    }
    return (


        <div>
            <Grid container spacing={2} alignItems="center" style={containerStyle}>
                <Grid item xs={2}>
                    <h2>Prime University
                    </h2>
                </Grid>
                <Grid item xs={2}>
                    <Link style={linkSytle} to="/home">HOME</Link>
                </Grid>
                <Grid item xs={2}>
                    <Link style={linkSytle} to="/service">Service</Link>

                </Grid>

                <Grid item xs={2}>
                    <Link style={linkSytle} to="/faculties">Faculties</Link>

                </Grid>
                <Grid item xs={2}>
                    <Link style={linkSytle} to="/about">About</Link>

                </Grid>

                <Grid item xs={2}>
                    <TextField type="text" placeholder="search" size="small" variant="standard" sx={{ mr: 3 }} />
                </Grid>
            </Grid>
        </div >
    );
};

export default NavLinks;