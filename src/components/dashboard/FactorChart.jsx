// src/FactorChart.jsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import '../dashboardCSS/FactorChart.css';

function FactorChart({ data, factor, oper, onClick }) {
  // 월별, System별 해당 factor 값으로 데이터 재구성
  const chartData = data.reduce((acc, item) => {
    const month = String(item.Month);
    const system = item.System;
    const factorValue = item[factor];

    const existingMonthData = acc.find((entry) => entry.Month === month);

    if (existingMonthData) {
      existingMonthData[system] = factorValue;
    } else {
      acc.push({ Month: month, [system]: factorValue });
    }
    return acc;
  }, []);

  // Month 기준으로 정렬 (선택 사항)
  chartData.sort((a, b) => a.Month.localeCompare(b.Month));

  // 데이터에 존재하는 System 목록 추출
  const systems = [...new Set(data.map((item) => item.System))];

  // chart 클릭하면 handler
  const handleChartClick = () => {
    onClick(oper, factor, chartData);
  };

  const systemColors = {
    GMS: 'red',
    EMS: 'orange',
    RPT: 'green',
    CIM: 'blue',
  };

  return (
    <div
      className="chart-card"
      onClick={handleChartClick}
      style={{ cursor: 'pointer' }}
    >
      <p>{factor}</p>
      <LineChart width={300} height={200} data={chartData}>
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
            animationDuration={500}
          />
        ))}
      </LineChart>
    </div>
  );
}

export default FactorChart;
