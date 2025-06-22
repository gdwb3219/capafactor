// src/ChartDetailPage.jsx
import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
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
} from "@mui/material";

function ChartDetailPage() {
  const navigate = useNavigate();
  const { oper: encodedOper, factor } = useParams(); // useParams로 인코딩된 oper 값을 가져옴
  const location = useLocation();
  const { chartData, currentArea, currentSite } = location.state || {};
  const oper = decodeURIComponent(encodedOper); // 디코딩

  if (!chartData || !factor || !oper) {
    return <div>잘못된 접근입니다.</div>;
  }

  // 데이터에 존재하는 System 목록 추출
  const systems = Object.keys(chartData[0] || {}).filter(
    (key) => key !== "Month"
  );

  // 테이블 데이터 전치
  const transposedTableData = systems.map((system) => {
    const rowData = { System: system };
    chartData.forEach((item) => {
      rowData[item.Month] = item[system];
    });
    return rowData;
  });

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
            stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            strokeWidth={2}
          />
        ))}
      </LineChart>

      <h3>데이터 테이블</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='transposed table'>
          <TableHead>
            <TableRow>
              {tableHeaders.map((header) => (
                <TableCell key={header} align='center'>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {transposedTableData.map((row) => (
              <TableRow key={row.System}>
                <TableCell component='th' scope='row' align='center'>
                  {row.System}
                </TableCell>
                {tableHeaders.slice(1).map((month) => (
                  <TableCell key={month} align='center'>
                    {row[month]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button onClick={handleClose}>닫기</Button>
    </div>
  );
}

export default ChartDetailPage;
