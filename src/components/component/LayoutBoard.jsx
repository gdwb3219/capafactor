import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../styles/LayoutBoard.css'; // Layout.css 또는 App.css 등에 스타일 정의
import SidebarBoard from './SidebarBoard';
import Footer from './Footer';
import UpperNav from './UpperNav';

const LayoutBoard = () => {
  return (
    <div className="layout-container">
      <SidebarBoard />
      <main className="main-content">
        <UpperNav />
        <Outlet className="main-area" />{' '}
        {/* 중첩된 라우트의 컴포넌트가 여기에 렌더링됩니다. */}
        <Footer />
      </main>
    </div>
  );
};

export default LayoutBoard;
