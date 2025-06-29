// src/Dashboard.jsx
<<<<<<< HEAD
import { useLoaderData, useLocation } from "react-router-dom";
import { convertArrayToCSV, downloadCSV } from "../../utils/csvUtils";
import { Button } from "@mui/material";
import FactorGrid from "./FactorGrid";

function Dashboard() {
  // loader 함수에서 반환된 데이터를 useLoaderData 훅으로 가져옴
  const selectedArea = useLoaderData();
  console.log("selectedAreaselectedArea", selectedArea);

  const location = useLocation();
  // const selectedAreaFromState = location.state?.selectedArea;
  // const selectedSiteFromState = location.state?.selectedSite;

  console.log(location, "location?");
  // console.log(
  //   'selectedAreaFromState, selectedSiteFromState',
  //   selectedAreaFromState,
  //   selectedSiteFromState
  // );

  const handleDownloadCSV = () => {
    const headers = Object.keys(data[0] || {});
    const csvData = convertArrayToCSV(data, headers);
    downloadCSV(csvData, "dashboard_data.csv");
  };

  return (
    <div className='dashboard-container'>
      <h1>대시보드</h1>
      <Button
        onClick={handleDownloadCSV}
        variant='contained'
        color='primary'
        style={{ marginBottom: "16px" }}
      >
        CSV 다운로드
      </Button>
=======
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
>>>>>>> 25ad9805062abd4b81d7d81e5a5ad66b597fe667
    </div>
  );
}

export default Dashboard;
