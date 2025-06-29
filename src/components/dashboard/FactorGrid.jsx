// src/FactorGrid.jsx
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import FactorChart from './FactorChart';
import ChartDetailView from './ChartDetailView';

const factors = ['CapaEff', 'NoWip', 'Linearity', 'Loss'];

function FactorGrid({ data }) {
  // { oper, factor, chartData } 형태
  const [selectedChart, setSelectedChart] = useState(null);

  // 데이터에서 고유한 공정 목록 추출 (예시: 'B/G'와 같은 'Oper' 값)
  const uniqueOpers = [...new Set(data.map((item) => item.Oper))];

  const handleChartClick = (oper, factor, chartData) => {
    setSelectedChart({ oper, factor, chartData });
  };

  const handleCloseDetailView = () => {
    setSelectedChart(null);
  };
  const systemColors = {
    GMS: 'red',
    EMS: 'orange',
    RPT: 'green',
    CIM: 'blue',
  };

  return (
    <div>
      <Grid container spacing={2}>
        {uniqueOpers.map((oper) => (
          <Grid item xs={12} key={oper}>
            <h3>공정: {oper}</h3>
            <Grid container spacing={2}>
              {factors.map((factor) => (
                <Grid item xs={3} key={factor}>
                  <FactorChart
                    data={data.filter((item) => item.Oper === oper)}
                    factor={factor}
                    oper={oper}
                    onClick={handleChartClick}
                    systemColors={systemColors}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>

      {selectedChart && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '32px',
              borderRadius: '8px',
              maxWidth: '90%',
              maxHeight: '90%',
              overflowY: 'auto',
            }}
          >
            <ChartDetailView
              chartData={selectedChart.chartData}
              factor={selectedChart.factor}
              oper={selectedChart.oper}
              onClose={handleCloseDetailView}
              systemColors={systemColors}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default FactorGrid;
