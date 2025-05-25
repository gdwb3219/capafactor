// src/AreaTabs.jsx
import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from '@mui/material';
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
    <div>
      <Tabs
        value={selectedArea}
        onChange={handleAreaChange}
        aria-label="area tabs"
      >
        {areas.map((area) => (
          <Tab key={area} value={area} label={area} />
        ))}
      </Tabs>
      {selectedArea && (
        <SiteTabs
          sites={uniqueSitesInArea}
          data={filteredDataByArea}
          currentArea={selectedArea}
          initialSelectedSite={initialSelectedSite}
        />
      )}
    </div>
  );
}

export default AreaTabs;
