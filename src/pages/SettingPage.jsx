import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import '../../styles/SubNavbar.css'; // SubNavbar 스타일

const SettingsPage = () => {
  return (
    <div className="settings-page-container">
      <h2>설정</h2>
      <nav className="sub-navbar">
        <ul>
          <li>
            {/* NavLink의 to 경로는 부모 라우트('/settings')에 상대적임 */}
            {/* 현재 URL이 /settings 일 때 ProfileSettings를 보여주기 위해 to="." 또는 to="" (혹은 index route 사용) */}
            <NavLink
              to="/settings" // 또는 그냥 "." (현재 경로)
              className={({ isActive }) =>
                isActive && window.location.pathname === '/settings'
                  ? 'active-sub-link'
                  : ''
              }
              end // 하위 경로와 겹치지 않도록 end 사용
            >
              프로필 설정
            </NavLink>
          </li>
          <li>
            <NavLink
              to="account" // /settings/account
              className={({ isActive }) => (isActive ? 'active-sub-link' : '')}
            >
              계정 설정
            </NavLink>
          </li>
          <li>
            <NavLink
              to="notifications" // /settings/notifications
              className={({ isActive }) => (isActive ? 'active-sub-link' : '')}
            >
              알림 설정
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="settings-content">
        <Outlet />{' '}
        {/* Profile, Account, NotificationSettings 컴포넌트가 여기에 렌더링됨 */}
      </div>
    </div>
  );
};

export default SettingsPage;
