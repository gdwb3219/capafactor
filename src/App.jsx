import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutBoard from './components/component/LayoutBoard';
import Dashboard from './components/dashboard/Dashboard';
import dummyData from './data/dummyData.json';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutBoard />}>
            <Route index element={<HomePage />} />
            <Route path="dashboard" element={<Dashboard data={dummyData} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
