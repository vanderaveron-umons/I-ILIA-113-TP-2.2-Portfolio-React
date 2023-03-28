import React from 'react';
import CertificationBlock from "./CertificationBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Certifications() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.certifications.map((certification, index) => (
                   <Grid item xs={12} md={3} key={index}>
                       <CertificationBlock image={certification.image} verification={certification.verification} title={certification.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};