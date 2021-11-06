import React from "react";
import { Link } from "react-router-dom";
import "../../SpHome.css";

const SpHeaderTemp = () => {
  return (
    <>
      <header id="header_app" className="SpApp" >
        <div className="SpApp-inner-sub" >
        </div>
        <div className="SpApp-inner" >
          <div className="logo">
            {/* <h5>とにかく簡単レシピが満載</h5> */}
            <div style={{ paddingBottom: 5 }}>とにかく簡単レシピが満載</div>
            <h1><Link to="/">Rakushiru</Link></h1>
          </div>
          <div dly-ghost="" className="invite-button" >新規登録</div>
          <div dly-ghost="" className="signup-button" >ログイン</div>
        </div>
        <div className="search-box-wrapper SpApp-searchBox"  >
          <div id="search_box" >
            <form action="/search" >
              <input type="text" placeholder="食材・料理名でレシピをさがす" name="query" >
              </input>
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon" >
                <path d="M17.3271 16.7212L13.8652 13.2593C15.0192 12.0741 15.7365 10.4522 15.7365 8.64327C15.7365 4.96296 12.7423 2 9.09322 2C5.4441 2 2.44995 4.99415 2.44995 8.64327C2.44995 12.2924 5.4441 15.2865 9.09322 15.2865C10.4032 15.2865 11.6195 14.9123 12.6488 14.2261L16.2043 17.7817C16.3603 17.9376 16.5474 18 16.7657 18C16.9841 18 17.1712 17.9376 17.3271 17.7817C17.639 17.501 17.639 17.0019 17.3271 16.7212ZM4.00941 8.64327C4.00941 5.83626 6.2862 3.55945 9.09322 3.55945C11.9002 3.55945 14.177 5.83626 14.177 8.64327C14.177 11.4503 11.9002 13.7271 9.09322 13.7271C6.2862 13.7271 4.00941 11.4503 4.00941 8.64327Z" fill="#93918F" >
                </path>
              </svg>
            </form>
          </div>
        </div>
        <div className="SuggestWordsSp SpApp-searchSuggest" style={{ display: "none" }}  >
          <ul className="SuggestWordsSp-list" >
          </ul>
        </div>
      </header>
    </>
  );
}

class SpHeader extends React.Component {

  render() {
    return SpHeaderTemp();
  }
}

export default SpHeader;