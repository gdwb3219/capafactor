// src/AreaTabs.jsx
import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import SiteTabs from './SiteTabs';

function AreaTabs({ areas, data, initialSelectedArea, initialSelectedSite }) {
  const [selectedArea, setSelectedArea] = useState(
    initialSelectedArea || areas[0] || ''
  );

  useEffect(() => {
    if (initialSelectedArea && areas.includes(initialSelectedArea)) {
      setSelectedArea(initialSelectedArea);
    }
  }, [initialSelectedArea, areas]);

  const handleAreaChange = (event, newArea) => {
    setSelectedArea(newArea);
  };

  // 현재 선택된 (가장 먼저의) Area로 전체 데이터 필터링
  const filteredDataByArea = data.filter((item) => item.AREA === selectedArea);
  // Area 중복 값 제거
  const uniqueSitesInArea = [
    ...new Set(filteredDataByArea.map((item) => item.Site)),
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#151422',
          minHeight: '100vh',
          position: 'fixed',
          minWidth: '200px',
        }}
      >
        <Box>Logo</Box>
        <Tabs
          orientation="vertical"
          value={selectedArea}
          onChange={handleAreaChange}
          aria-label="area tabs"
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            minWidth: 150,
            minHeight: 700,
          }}
        >
          {areas.map((area) => (
            <Tab
              key={area}
              value={area}
              label={area}
              sx={{
                color: 'white',
                '&.Mui-selected': {
                  color: 'green',
                  fontWeight: 'bold',
                  backgroundColor: 'lightyellow',
                  border: 0,
                },
              }}
            />
          ))}
        </Tabs>
        under
      </Box>
      <Box sx={{ flexGrow: 1, p: 3, marginLeft: '250px' }}>
        {selectedArea && (
          <SiteTabs
            sites={uniqueSitesInArea}
            data={filteredDataByArea}
            currentArea={selectedArea}
            initialSelectedSite={initialSelectedSite}
          />
        )}
      </Box>
    </Box>
  );
}

export default AreaTabs;
