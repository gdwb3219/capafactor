import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; // 데이터 없을 때 메시지용
import '../dashboardCSS/StatusTable.css';

// 신호등 및 판단 로직 함수 (이전과 동일)
const getStatus = (item) => {
  const { 목표, '3개월 AVG': avg3, '6개월 AVG': avg6, AREA } = item;
  let color = '';
  let judgment = '';

  const is3MonthOk = avg3 >= 목표;
  const is6MonthOk = avg6 >= 목표;

  if (is3MonthOk && is6MonthOk) {
    color = 'green';
    judgment = '양호';
  } else if (is3MonthOk || is6MonthOk) {
    color = 'yellow';
    judgment = '양호';
  } else {
    color = 'red';
    if (AREA === 'WT' || AREA === 'TEST') {
      judgment = '위험';
    } else if (AREA === 'PKG' || AREA === 'BG') {
      judgment = '점검 필요';
    } else {
      judgment = '점검 필요';
    }
  }
  return { color, judgment };
};

function StatusTable({ data }) {
  if (!data || data.length === 0) {
    return (
      <Paper sx={{ padding: 2, textAlign: 'center' }}>
        <Typography variant="subtitle1">데이터가 없습니다.</Typography>
      </Paper>
    );
  }

  const getSignalStyling = (statusColor) => {
    switch (statusColor) {
      case 'green':
        return {
          bgColor: '#2ecc71', // 초록색
          shadowColor: 'rgba(46, 204, 113, 0.7)',
          textColor: '#27ae60',
        };
      case 'yellow':
        return {
          bgColor: '#f1c40f', // 노란색
          shadowColor: 'rgba(241, 196, 15, 0.7)',
          textColor: '#d39e00',
        };
      case 'red':
        return {
          bgColor: '#e74c3c', // 빨간색
          shadowColor: 'rgba(231, 76, 60, 0.7)',
          textColor: '#c0392b',
        };
      default:
        return {
          bgColor: '#bdc3c7', // 기본 회색
          shadowColor: 'rgba(189, 195, 199, 0.7)',
          textColor: '#7f8c8d',
        };
    }
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="status dashboard table">
        <TableHead sx={{ backgroundColor: '#3498db' }}>
          <TableRow>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
              AREA
            </TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
              OPER
            </TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
              FACTOR
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: 'white', fontWeight: 'bold' }}
            >
              목표
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: 'white', fontWeight: 'bold' }}
            >
              3개월 AVG
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: 'white', fontWeight: 'bold' }}
            >
              6개월 AVG
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: 'white', fontWeight: 'bold' }}
            >
              신호등
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: 'white', fontWeight: 'bold' }}
            >
              판단
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            const status = getStatus(item);
            const styling = getSignalStyling(status.color);

            return (
              <TableRow
                key={index}
                sx={{
                  '&:nth-of-type(even)': { backgroundColor: '#f8f9fa' },
                  '&:hover': { backgroundColor: '#e9ecef' },
                  '& td, & th': { borderBottom: '1px solid #e0e0e0' }, // 셀 하단 테두리
                }}
              >
                <TableCell component="th" scope="row">
                  {item.AREA}
                </TableCell>
                <TableCell>{item.OPER}</TableCell>
                <TableCell>{item.FACTOR}</TableCell>
                <TableCell align="center">{item.목표.toFixed(2)}</TableCell>
                <TableCell align="center">
                  {item['3개월 AVG'].toFixed(2)}
                </TableCell>
                <TableCell align="center">
                  {item['6개월 AVG'].toFixed(2)}
                </TableCell>
                <TableCell align="center">
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-block',
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      backgroundColor: styling.bgColor,
                      boxShadow: `0 0 8px ${styling.shadowColor}`,
                      verticalAlign: 'middle',
                    }}
                  />
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: styling.textColor, fontWeight: 'bold' }}
                >
                  {status.judgment}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StatusTable;
