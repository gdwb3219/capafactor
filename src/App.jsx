import { Route, Routes, useLoaderData } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import ChartDetailPage from "./pages/ChartDetailPage";
import LayOuts from "./components/LayOuts";
import "./App.css";
import dummyData from "./data/dummyData.json";

// 데이터 로드 함수
const areaDataLoader = ({ params }) => {
  const { areaId } = params;
  const selectedArea = dummyData.find((item) => item.AREA === areaId);

  if (!selectedArea) {
    // AREA를 찾지 못했을 때, Error를 throw하거나 리디렉트
    throw new Response("Not Found", { status: 404 });
    return null;
  }
  return selectedArea;
};

function App() {
  return (
    <>
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<LayOuts />}>
            <Route
              path='/:area'
              element={<Dashboard />}
              loader={areaDataLoader}
            />
            <Route path='/chart/:oper/:factor' element={<ChartDetailPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
