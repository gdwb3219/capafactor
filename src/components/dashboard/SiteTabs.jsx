// src/SiteTabs.jsx
import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import FactorGrid from "./FactorGrid";

function SiteTabs({ sites, data }) {
  const [selectedSite, setSelectedSite] = useState(sites[0] || "");

  const handleSiteChange = (event, newSite) => {
    setSelectedSite(newSite);
  };

  const filteredDataBySite = data.filter((item) => item.Site === selectedSite);

  return (
    <div>
      <Tabs
        value={selectedSite}
        onChange={handleSiteChange}
        aria-label='site tabs'
      >
        {sites.map((site) => (
          <Tab key={site} value={site} label={site} />
        ))}
      </Tabs>
      {selectedSite && <FactorGrid data={filteredDataBySite} />}
    </div>
  );
}

export default SiteTabs;
