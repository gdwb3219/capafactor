// src/SiteTabs.jsx
import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import FactorGrid from './FactorGrid';

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
    </div>
  );
}

export default SiteTabs;
