// utils/csvUtils.js
export const convertArrayToCSV = (data, headers) => {
  if (!data || data.length === 0) {
    return '';
  }

  const headerRow = headers ? headers.join(',') + '\n' : '';
  const dataRows = data
    .map((row) => {
      return Object.values(row)
        .map((value) => `"${value}"`)
        .join(',');
    })
    .join('\n');

  return headerRow + dataRows;
};

export const downloadCSV = (csvData, filename = 'data.csv') => {
  if (!csvData) {
    console.error('CSV 데이터가 없습니다.');
    return;
  }

  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
