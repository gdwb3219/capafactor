import React from "react";
import "../../styles/header/CFHeader.css";

function CFHeader() {
  return (
    <>
      <div className='header-container'>
        <div className='upper-menu'>
          <div className='find-menu'>검색</div>
          <div className='user-info'>유저 정보</div>
        </div>
        <div className='mid-menu'>
          <div className='button-area'>
            <div className='single-button'>버튼</div>
            <div className='single-button'>버튼</div>
            <div className='single-button'>버튼</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CFHeader;
