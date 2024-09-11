import React, { useState } from 'react';
import { Container, Button, Box, Tabs, Tab, Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Paper, Snackbar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ReusableTabs = ({ tabs, value, onChange }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={onChange}>
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <Box key={index} hidden={value !== index}>
          {tab.content}
        </Box>
      ))}
    </Box>
  );
};

export default ReusableTabs;
