import React from "react";
import "../../styles/SideNavBar/SideNavBar.css";
import AreaTabs from "../dashboard/AreaTabs";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function SideNavBar({ data }) {
  // console.log("side data", data);
  const [areas, setAreas] = useState([]);
  useEffect(() => {
    // 데이터에서 고유한 Area 목록 추출
    const uniqueAreas = [...new Set(data.map((item) => item.AREA))];
    setAreas(uniqueAreas);
  }, [data]);

  const location = useLocation();
  console.log(location, "location");
  return (
    <>
      <aside className='sidebar-container'>
        <div className='logo-area'>로고 영역</div>
        <div className='nav-bar'>
          Area Tabs 영역
          <ul>
            {areas.map((area) => (
              <NavLink key={area} to={`/${area}`}>
                <li>{area}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className='lower-menu'>설정 메뉴</div>
      </aside>
    </>
  );
}

export default SideNavBar;
