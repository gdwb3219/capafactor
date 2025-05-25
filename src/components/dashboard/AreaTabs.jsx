// src/AreaTabs.jsx
import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import SiteTabs from "./SiteTabs";

function AreaTabs({ areas, data }) {
  const [selectedArea, setSelectedArea] = useState(areas[0] || "");

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
        aria-label='area tabs'
      >
        {areas.map((area) => (
          <Tab key={area} value={area} label={area} />
        ))}
      </Tabs>
      {selectedArea && (
        <SiteTabs sites={uniqueSitesInArea} data={filteredDataByArea} />
      )}
    </div>
  );
}

export default AreaTabs;
