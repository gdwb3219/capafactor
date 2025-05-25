// src/Dashboard.jsx
import React, { useState, useEffect } from "react";
import AreaTabs from "./AreaTabs";

function Dashboard({ data }) {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    // 데이터에서 고유한 Area 목록 추출
    const uniqueAreas = [...new Set(data.map((item) => item.AREA))];
    setAreas(uniqueAreas);
  }, [data]);

  return (
    <div>
      <h1>대시보드</h1>
      <AreaTabs areas={areas} data={data} />
    </div>
  );
}

export default Dashboard;
