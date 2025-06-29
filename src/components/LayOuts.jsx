import React from "react";
import { Outlet } from "react-router-dom";
import CFHeader from "./header/CFHeader";
import CFFooter from "./footer/CFFooter";
import SideNavBar from "./SideNavBar/SideNavBar";
import dummyData from "../data/dummyData.json";
import "../styles/LayOuts.css";

function LayOuts() {
  return (
    <div className='layout-container'>
      {/* 사이드 바 */}
      <SideNavBar data={dummyData} />
      {/* 메인 컨텐츠 영역 */}
      <div className='right-side'>
        {/* 헤더 */}
        <CFHeader />
        {/* 메인 컨텐츠 */}
        <main className='main-container'>
          <Outlet />
        </main>
        {/* 푸터 */}
        <CFFooter />
      </div>
    </div>
  );
}

export default LayOuts;
