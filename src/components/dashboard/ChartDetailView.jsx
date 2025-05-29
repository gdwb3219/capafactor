// src/ChartDetailView.jsx
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import '../dashboardCSS/ChartDetailView.css';

function ChartDetailView({ chartData, factor, oper, onClose, systemColors }) {
  if (!chartData || !factor || !oper) {
    return <div>상세 데이터를 불러올 수 없습니다.</div>;
  }

  const systems = Object.keys(chartData[0] || {}).filter(
    (key) => key !== 'Month'
  );

  const transposedTableData = systems.map((system) => {
    const rowData = { System: system };
    chartData.forEach((item) => {
      rowData[item.Month] = item[system];
    });
    return rowData;
  });

  const tableHeaders = ['System', ...chartData.map((item) => item.Month)];

  return (
    <div className="chart-detail-view-container">
      <Button className="X-button" onClick={onClose}>
        닫기
      </Button>
      <h2>
        {oper} - {factor} 상세 차트
      </h2>
      <LineChart width={800} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Month" />
        <YAxis />
        <Tooltip />
        <Legend />
        {systems.map((system) => (
          <Line
            key={system}
            type="monotone"
            dataKey={system}
            stroke={systemColors[system] || '#000'}
            strokeWidth={2}
            animationDuration={700}
          />
        ))}
      </LineChart>

      <h3>데이터 테이블</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="transposed table">
          <TableHead>
            <TableRow>
              {tableHeaders.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {transposedTableData.map((row) => (
              <TableRow key={row.System}>
                <TableCell component="th" scope="row">
                  {row.System}
                </TableCell>
                {tableHeaders.slice(1).map((month) => (
                  <TableCell key={month} align="right">
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
