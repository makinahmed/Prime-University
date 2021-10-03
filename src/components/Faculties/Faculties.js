import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FacultyCart from './FacultyCart';
/* 
This component is for Loading Faculty data
*/
const Faculties = () => {
    const [facultes, setFaculty] = useState([])
    useEffect(() => {
        fetch('/Faculty.JSON')
            .then(res => res.json())
            .then(data => setFaculty(data))
    }, [])
    return (
        <div>
            <Grid container spacing={2} gap={5} justifyContent="center" style={{"marginTop": "100px"}}
            >
                {
                    facultes.map(faculty => <FacultyCart faculty={faculty}></FacultyCart>)
                }
            </Grid>
        </div>
    );
};

export default Faculties;