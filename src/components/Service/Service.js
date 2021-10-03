import { Grid } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ServiceItem from '../ServiceItem/ServiceItem';
/* 
This component is for Loading Service items data 
*/
const Service = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch("/FakeDb.JSON")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
   
    return (
        <div style={{'marginTop': '100px'}}>
            <div style={{'marginBottom': '100px'}}>
                <h1>Our All Services</h1>
            </div>
            <Grid container spacing={2} gap={5} justifyContent="center"
            >
                {
                    service.map(item => <ServiceItem item={item}></ServiceItem>)
                }
            </Grid>
        </div>
    );
};

export default Service;