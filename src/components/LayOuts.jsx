import React from "react";
import { Outlet } from "react-router-dom";
import CFHeader from "./header/CFHeader";
import CFFooter from "./footer/CFFooter";
import SideNavBar from "./SideNavBar/SideNavBar";
import dummyData from "../data/dummyData.json";

function LayOuts() {
  return (
    <div className='layout-container'>
      {/* 사이드 바 */}
      <div>
        <SideNavBar dummyData={dummyData} />
      </div>
      {/* 메인 컨텐츠 영역 */}
      <div>
        {/* 헤더 */}
        <div>
          <CFHeader />
        </div>
        {/* 메인 컨텐츠 */}
        <main className='main-container'>
          <Outlet />
        </main>
        {/* 푸터 */}
        <div>
          <CFFooter />
        </div>
      </div>
    </div>
  );
}

export default LayOuts;
