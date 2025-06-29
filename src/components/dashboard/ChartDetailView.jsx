<<<<<<< HEAD:src/pages/ChartDetailPage.jsx
// src/ChartDetailPage.jsx
import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
=======
// src/ChartDetailView.jsx
import React from 'react';
>>>>>>> 25ad9805062abd4b81d7d81e5a5ad66b597fe667:src/components/dashboard/ChartDetailView.jsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
<<<<<<< HEAD:src/pages/ChartDetailPage.jsx
} from "@mui/material";
=======
} from '@mui/material';
import '../dashboardCSS/ChartDetailView.css';
>>>>>>> 25ad9805062abd4b81d7d81e5a5ad66b597fe667:src/components/dashboard/ChartDetailView.jsx

function ChartDetailView({ chartData, factor, oper, onClose, systemColors }) {
  if (!chartData || !factor || !oper) {
    return <div>상세 데이터를 불러올 수 없습니다.</div>;
  }

  const systems = Object.keys(chartData[0] || {}).filter(
    (key) => key !== "Month"
  );

  const transposedTableData = systems.map((system) => {
    const rowData = { System: system };
    chartData.forEach((item) => {
      rowData[item.Month] = item[system];
    });
    return rowData;
  });

<<<<<<< HEAD:src/pages/ChartDetailPage.jsx
  // 테이블 헤더 (월 목록)
  const tableHeaders = ["System", ...chartData.map((item) => item.Month)];

  const handleClose = () => {
    const stateToSend = {
      selectedArea: currentArea,
      selectedSite: currentSite,
    };
    console.log("ChartDetailPage navigate state:", stateToSend); // 로그 추가
    navigate("/", {
      state: stateToSend,
    }); // 이전 페이지로 돌아감 (차트 그리드)
  };

  return (
    <div className='d-view-container'>
      <h3>
        {oper} - {factor} Detail View
      </h3>
=======
  const tableHeaders = ['System', ...chartData.map((item) => item.Month)];

  return (
    <div className="chart-detail-view-container">
      <Button className="X-button" onClick={onClose}>
        닫기
      </Button>
      <h2>
        {oper} - {factor} 상세 차트
      </h2>
>>>>>>> 25ad9805062abd4b81d7d81e5a5ad66b597fe667:src/components/dashboard/ChartDetailView.jsx
      <LineChart width={800} height={400} data={chartData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='Month' />
        <YAxis />
        <Tooltip />
        <Legend />
        {systems.map((system) => (
          <Line
            key={system}
            type='monotone'
            dataKey={system}
            stroke={systemColors[system] || '#000'}
            strokeWidth={2}
            animationDuration={700}
          />
        ))}
      </LineChart>

      <h3>데이터 테이블</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='transposed table'>
          <TableHead>
            <TableRow>
              {tableHeaders.map((header) => (
<<<<<<< HEAD:src/pages/ChartDetailPage.jsx
                <TableCell key={header} align='center'>
                  {header}
                </TableCell>
=======
                <TableCell key={header}>{header}</TableCell>
>>>>>>> 25ad9805062abd4b81d7d81e5a5ad66b597fe667:src/components/dashboard/ChartDetailView.jsx
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {transposedTableData.map((row) => (
              <TableRow key={row.System}>
<<<<<<< HEAD:src/pages/ChartDetailPage.jsx
                <TableCell component='th' scope='row' align='center'>
                  {row.System}
                </TableCell>
                {tableHeaders.slice(1).map((month) => (
                  <TableCell key={month} align='center'>
=======
                <TableCell component="th" scope="row">
                  {row.System}
                </TableCell>
                {tableHeaders.slice(1).map((month) => (
                  <TableCell key={month} align="right">
>>>>>>> 25ad9805062abd4b81d7d81e5a5ad66b597fe667:src/components/dashboard/ChartDetailView.jsx
                    {row[month]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ChartDetailView;
