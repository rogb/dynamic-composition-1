import { useState } from 'react';


const DynamicContentManager = ({ children }) => {
  const [tabs, setTabs] = useState([{ label: 'Tab 1', content: [], expandedSection: null }]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [sectionCounter, setSectionCounter] = useState(1);
  const [panelCounter, setPanelCounter] = useState(1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const addTab = () => {
    setTabs([...tabs, { label: `Tab ${tabs.length + 1}`, content: [], expandedSection: null }]);
    setSelectedTab(tabs.length); // Select the newly added tab
  };

  const addSection = () => {
    const newTabs = [...tabs];
    const newSectionIndex = newTabs[selectedTab].content.length;
    newTabs[selectedTab].content.push({
      type: 'section',
      title: `Section ${sectionCounter}`,
      content: []
    });
    setTabs(newTabs);
    setSectionCounter(sectionCounter + 1);

    // Automatically expand the newly added section
    handleSectionExpand(selectedTab, newSectionIndex);
  };

  const addPanel = () => {
    const newTabs = [...tabs];
    const currentTab = newTabs[selectedTab];
    const expandedSectionIndex = currentTab.expandedSection;

    if (expandedSectionIndex !== null) {
      const expandedSection = currentTab.content[expandedSectionIndex];
      expandedSection.content.push({
        type: 'panel',
        content: `Panel ${panelCounter}`
      });
      setTabs(newTabs);
      setPanelCounter(panelCounter + 1);
    } else {
      setSnackbarMessage('Please expand a section before adding a panel');
      setSnackbarOpen(true);
    }
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleSectionExpand = (tabIndex, sectionIndex) => {
    const newTabs = [...tabs];
    newTabs[tabIndex].expandedSection = newTabs[tabIndex].expandedSection === sectionIndex ? null : sectionIndex;
    setTabs(newTabs);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return children({
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
  });
};


export default DynamicContentManager;
