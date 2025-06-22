import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import ChartDetailPage from "./pages/ChartDetailPage";
import LayOuts from "./components/LayOuts";
import "./App.css";

function App() {
  return (
    <>
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<LayOuts />}>
            <Route path='/:area' element={<Dashboard />} />
            <Route path='/chart/:oper/:factor' element={<ChartDetailPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
