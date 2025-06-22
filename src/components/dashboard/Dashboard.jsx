// src/Dashboard.jsx
import { useLocation } from "react-router-dom";
import { convertArrayToCSV, downloadCSV } from "../../utils/csvUtils";
import { Button } from "@mui/material";

function Dashboard({ data }) {
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
    </div>
  );
}

export default Dashboard;
