// src/FactorGrid.jsx
import React from 'react';
import { Grid } from '@mui/material';
import FactorChart from './FactorChart';

const factors = ['CapaEff', 'NoWip', 'Linearity', 'Loss'];

function FactorGrid({ data, currentArea, currentSite }) {
  // 데이터에서 고유한 공정 목록 추출 (예시: 'B/G'와 같은 'Oper' 값)
  const uniqueOpers = [...new Set(data.map((item) => item.Oper))];

  return (
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
                  currentArea={currentArea}
                  currentSite={currentSite}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default FactorGrid;
