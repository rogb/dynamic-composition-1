import React from 'react';
import { Grid2, Paper } from '@mui/material';


const GridPanel = ({ children }) => (
    <Grid2 item xs={12} sm={6} md={4}>
        <Paper sx={{ p: 2 }}>{children}</Paper>
    </Grid2>
);
export default GridPanel;
