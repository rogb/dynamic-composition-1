import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';


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
