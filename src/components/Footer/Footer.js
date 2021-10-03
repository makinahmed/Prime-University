import { Button, InputLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    const footerStyle = {
        'height': '400px',
        'backgroundColor': '#6bacbf',
        'paddingTop': '50px',
        'marginTop': '100px'
    }
    return (
        <div style={footerStyle}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} >
                <div>
                    <h1>
                        Contact Details
                    </h1>
                    <h4>Prime University</h4>
                    <p style={{ 'lineHeight': '1.8', "color": '#292827' }}>
                        114/116 Mazar Road, Mirpur-1, Dhaka 1216, Bangladesh
                    </p>
                    <p style={{ 'lineHeight': '1.8', "color": '#292827' }}>
                     Phone: 01939425030, 01687191986, 01776234984, 01866207160
                    </p>
                    <p style={{ 'lineHeight': '1.8', "color": '#292827' }}>
                      email:  info@primeuniversity.edu.bd
                    </p>

                </div>
                <div style={{'marginTop': '45px'}}>
                    <TextField 
                    placeholder="Enter Your Name" 
                    id="demo-helper-text-misaligned-no-helper"
                     size="small" 
                     label="Name" 
                     />
                    <br />
                    <br />
                    <TextField
                        id="outlined-password-input"
                        label="Email"
                        type="email"
                        size="small"
                        autoComplete="current-password"
                        placeholder="Enter Your Email" 
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        size="small"
                        autoComplete="current-password"
                        placeholder="Enter Your Password" 
                    />
                    <br />
                    <br />
                    <Button variant="contained" sx={{ 'backgroundColor': '#558b2f' }}>Sign Up</Button>
                </div>

            </Box>
        </div>
    );
};

export default Footer;