
import React from 'react';
import { Grid2, Snackbar } from '@mui/material';
import BasePage from './Base/BasePage';
import ReusableTabs from './Base/ReusableTabs';
import CollapsibleSection from './Base/CollapsibleSection';
import GridPanel from './Base/GridPanel';
import DynamicContentManager from './Base/DynamicContentManager';


const SpecificPage = () => {
  return (
    <DynamicContentManager>
      {({
        tabs,
        selectedTab,
        addTab,
        addSection,
        addPanel,
        handleTabChange,
        handleSectionExpand,
        snackbarOpen,
        snackbarMessage,
        handleSnackbarClose
      }) => (
        <BasePage onAddTab={addTab} onAddSection={addSection} onAddPanel={addPanel}>
          <ReusableTabs
            tabs={tabs.map((tab, tabIndex) => ({
              label: tab.label,
              content: (
                <>
                  {tab.content.map((item, sectionIndex) => {
                    if (item.type === 'section') {
                      return (
                        <CollapsibleSection
                          key={sectionIndex}
                          title={item.title}
                          expanded={tab.expandedSection === sectionIndex}
                          onChange={() => handleSectionExpand(tabIndex, sectionIndex)}
                        >
                          <Grid2 container spacing={2}>
                            {item.content.map((panel, panelIndex) => (
                              <GridPanel key={panelIndex}>{panel.content}</GridPanel>
                            ))}
                          </Grid2>
                        </CollapsibleSection>
                      );
                    }
                    return null;
                  })}
                </>
              ),
            }))}
            value={selectedTab}
            onChange={handleTabChange}
          />
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
            message={snackbarMessage}
          />
        </BasePage>
      )}
    </DynamicContentManager>
  );
};

export default SpecificPage;