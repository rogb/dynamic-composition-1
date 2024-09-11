import React, { useState } from 'react';
import { Container, Button, Box, Tabs, Tab, Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Paper, Snackbar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CollapsibleSection = ({ title, children, expanded, onChange }) => (
  <Accordion expanded={expanded} onChange={onChange}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      {children}
    </AccordionDetails>
  </Accordion>
);

export default CollapsibleSection;
