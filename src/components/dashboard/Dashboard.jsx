// src/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import AreaTabs from './AreaTabs';
// import { useLocation } from 'react-router-dom';
// import { convertArrayToCSV, downloadCSV } from '../../utils/csvUtils';
import { Button } from '@mui/material';
import '../dashboardCSS/Dashboard.css';

function Dashboard({ data }) {
  const [areas, setAreas] = useState([]);
  // const [selectedArea, setSelectedArea] = useState(
  //   initialSelectedArea || areas[0] || ''
  // );

  // const [initialArea, setInitialArea] = useState(location.state?.selectedArea);
  // const [initialSite, setInitialSite] = useState(location.state?.selectedSite);

  useEffect(() => {
    // 데이터에서 고유한 Area 목록 추출
    const uniqueAreas = [...new Set(data.map((item) => item.AREA))];
    setAreas(uniqueAreas);
  }, [data]);

  // CSV 파일 다운로드 기능 함수
  // const handleDownloadCSV = () => {
  //   const headers = Object.keys(data[0] || {});
  //   const csvData = convertArrayToCSV(data, headers);
  //   downloadCSV(csvData, 'dashboard_data.csv');
  // };

  return (
    <div className="dashboard-container">
      hi
      <AreaTabs areas={areas} data={data} />
    </div>
  );
}

export default Dashboard;
