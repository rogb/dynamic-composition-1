import React from 'react';
import { Container, Button, Box } from '@mui/material';

const BasePage = ({ children, onAddTab, onAddSection, onAddPanel }) => (
  <Container>
    <Box sx={{ mb: 2 }}>
      <Button variant="contained" onClick={onAddTab} sx={{ mr: 1 }}>Add Tab</Button>
      <Button variant="contained" onClick={onAddSection} sx={{ mr: 1 }}>Add Section</Button>
      <Button variant="contained" onClick={onAddPanel}>Add Panel</Button>
    </Box>
    {children}
  </Container>
);

export default BasePage;
