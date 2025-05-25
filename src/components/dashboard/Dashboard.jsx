// src/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import AreaTabs from './AreaTabs';
import { useLocation } from 'react-router-dom';

function Dashboard({ data }) {
  const [areas, setAreas] = useState([]);
  const location = useLocation();
  const [initialArea, setInitialArea] = useState(location.state?.selectedArea);
  const [initialSite, setInitialSite] = useState(location.state?.selectedSite);
  // const selectedAreaFromState = location.state?.selectedArea;
  // const selectedSiteFromState = location.state?.selectedSite;

  // console.log(
  //   'selectedAreaFromState, selectedSiteFromState',
  //   selectedAreaFromState,
  //   selectedSiteFromState
  // );

  useEffect(() => {
    // 데이터에서 고유한 Area 목록 추출
    const uniqueAreas = [...new Set(data.map((item) => item.AREA))];
    setAreas(uniqueAreas);
  }, [data]);

  useEffect(() => {
    console.log('Dashboard location changed:', location); // 로깅 추가
    console.log('Dashboard location.state on change:', location.state); // 로깅 추가
    setInitialArea(location.state?.selectedArea);
    setInitialSite(location.state?.selectedSite);
  }, [location]); // location 객체가 변경될 때마다 실행

  return (
    <div>
      <h1>대시보드</h1>
      <AreaTabs
        areas={areas}
        data={data}
        initialSelectedArea={initialArea}
        initialSelectedSite={initialSite}
      />
    </div>
  );
}

export default Dashboard;
