// src/SiteTabs.jsx
import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import FactorGrid from './FactorGrid';
import StatusTable from './StatusTable';

// 데이터베이스에서 가져왔다고 가정한 샘플 데이터
const DUMMY_DATA = [
  {
    AREA: 'WT',
    OPER: 'EPM',
    FACTOR: 'EFCY',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.91,
  },
  {
    AREA: 'WT',
    OPER: 'WFBI',
    FACTOR: 'LINR',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.8,
  },
  {
    AREA: 'WT',
    OPER: 'TEST',
    FACTOR: 'EFCY',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.91,
  },
  {
    AREA: 'WT',
    OPER: 'BG',
    FACTOR: 'LINR',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.91,
  },
  {
    AREA: 'WT',
    OPER: 'DA',
    FACTOR: 'EFCY',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.91,
  },
  {
    AREA: 'WT',
    OPER: 'WB',
    FACTOR: 'LINR',
    목표: 0.9,
    '3개월 AVG': 0.9,
    '6개월 AVG': 0.91,
  },
  {
    AREA: 'WT',
    OPER: 'FCB',
    FACTOR: 'EFCY',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.91,
  },
  {
    AREA: 'WLP',
    OPER: 'EPM',
    FACTOR: 'LINR',
    목표: 0.9,
    '3개월 AVG': 0.9,
    '6개월 AVG': 0.91,
  },
  {
    AREA: 'WLP',
    OPER: 'WFBI',
    FACTOR: 'EFCY',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.91,
  },
  {
    AREA: 'WLP',
    OPER: 'TEST',
    FACTOR: 'LINR',
    목표: 0.9,
    '3개월 AVG': 0.9,
    '6개월 AVG': 0.91,
  },
  {
    AREA: 'BG',
    OPER: 'BG',
    FACTOR: 'EFCY',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.91,
  },
  {
    AREA: 'WLP',
    OPER: 'DA',
    FACTOR: 'LINR',
    목표: 0.9,
    '3개월 AVG': 0.9,
    '6개월 AVG': 0.91,
  },
  {
    AREA: 'WLP',
    OPER: 'WB',
    FACTOR: 'EFCY',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.8,
  },
  {
    AREA: 'WLP',
    OPER: 'FCB',
    FACTOR: 'LINR',
    목표: 0.9,
    '3개월 AVG': 0.9,
    '6개월 AVG': 0.91,
  },
  {
    AREA: 'PKG',
    OPER: 'EPM',
    FACTOR: 'EFCY',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.8,
  },
  {
    AREA: 'PKG',
    OPER: 'WFBI',
    FACTOR: 'LINR',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.8,
  },
  {
    AREA: 'PKG',
    OPER: 'TEST',
    FACTOR: 'EFCY',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.8,
  },
  {
    AREA: 'PKG',
    OPER: 'BG',
    FACTOR: 'LINR',
    목표: 0.9,
    '3개월 AVG': 0.91,
    '6개월 AVG': 0.8,
  },
  {
    AREA: 'PKG',
    OPER: 'DA',
    FACTOR: 'EFCY',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.8,
  },
  {
    AREA: 'PKG',
    OPER: 'WB',
    FACTOR: 'LINR',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.8,
  },
  {
    AREA: 'PKG',
    OPER: 'FCB',
    FACTOR: 'EFCY',
    목표: 0.9,
    '3개월 AVG': 0.91,
    '6개월 AVG': 0.91,
  },
  {
    AREA: 'PKT',
    OPER: 'EPM',
    FACTOR: 'LINR',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.91,
  },
  {
    AREA: 'PKT',
    OPER: 'WFBI',
    FACTOR: 'EFCY',
    목표: 0.9,
    '3개월 AVG': 0.9,
    '6개월 AVG': 0.8,
  },
  {
    AREA: 'PKT',
    OPER: 'TEST',
    FACTOR: 'LINR',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.91,
  },
  {
    AREA: 'PKT',
    OPER: 'BG',
    FACTOR: 'EFCY',
    목표: 0.9,
    '3개월 AVG': 0.91,
    '6개월 AVG': 0.8,
  },
  {
    AREA: 'PKT',
    OPER: 'DA',
    FACTOR: 'LINR',
    목표: 0.9,
    '3개월 AVG': 0.8,
    '6개월 AVG': 0.91,
  },
  {
    AREA: 'PKT',
    OPER: 'WB',
    FACTOR: 'EFCY',
    목표: 0.9,
    '3개월 AVG': 0.9,
    '6개월 AVG': 0.8,
  },
  {
    AREA: 'PKT',
    OPER: 'FCB',
    FACTOR: 'LINR',
    목표: 0.9,
    '3개월 AVG': 0.91,
    '6개월 AVG': 0.91,
  },
];

function SiteTabs({ sites, data, currentArea, initialSelectedSite }) {
  const [selectedSite, setSelectedSite] = useState(
    initialSelectedSite || sites[0] || ''
  );

  useEffect(() => {
    if (initialSelectedSite && sites.includes(initialSelectedSite)) {
      setSelectedSite(initialSelectedSite);
    }
  }, [initialSelectedSite, sites]);

  const handleSiteChange = (event, newSite) => {
    setSelectedSite(newSite);
  };

  const filteredDataBySite = data.filter((item) => item.Site === selectedSite);

  return (
    <div>
      <Tabs
        value={selectedSite}
        onChange={handleSiteChange}
        aria-label="site tabs"
      >
        {sites.map((site) => (
          <Tab key={site} value={site} label={site} />
        ))}
      </Tabs>
      {selectedSite && (
        <FactorGrid
          data={filteredDataBySite}
          currentArea={currentArea}
          currentSite={selectedSite}
        />
      )}
      <StatusTable data={DUMMY_DATA} />
    </div>
  );
}

export default SiteTabs;
