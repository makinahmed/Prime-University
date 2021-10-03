import { Grid } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ServiceItem from '../ServiceItem/ServiceItem';

const ServiceSample = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch("/FakeDb.JSON")
            .then(res => res.json())
            .then(data => setService(data.slice(0,4)))
    }, [])
   
    return (
        <div>
            <div>
                <h1>Our Services</h1>
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

export default ServiceSample;