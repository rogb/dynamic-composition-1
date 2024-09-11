import React, { useState } from 'react';
import { Container, Button, Box, Tabs, Tab, Accordion, AccordionSummary, AccordionDetails, Typography, Grid2, Paper, Snackbar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const GridPanel = ({ children }) => (
    <Grid2 item xs={12} sm={6} md={4}>
        <Paper sx={{ p: 2 }}>{children}</Paper>
    </Grid2>
);
export default GridPanel;
