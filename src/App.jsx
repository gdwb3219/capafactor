import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import dummyData from "./data/dummyData.json";
import ChartDetailPage from "./pages/ChartDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard data={dummyData} />} />
        <Route path='/chart/:oper/:factor' element={<ChartDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
