import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/SidebarBoard.css'; // Sidebar.css에 스타일 정의

const SidebarBoard = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              end // '/' 경로가 다른 경로의 접두사가 되는 것을 방지
            >
              홈
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              대시보드
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products" // ProductsPage로 이동
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              상품 관리
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings" // SettingsPage로 이동
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              설정
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarBoard;
