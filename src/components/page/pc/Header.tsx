import { Link } from "react-router-dom";
import "../../../App.css";

const Header = () => {
    return (
      <div id="header_app" className="header-app-root is-pcDesignUpdated" >
        <div className="inner is-pcDesignUpdated" >
          <div className="logo">
            <h1><Link to="/">Rakushiru</Link></h1>
            {/* <img src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/character_logo.svg' /> */}
          </div>
          <div className="headerLinks" >
            <a href="/categories" className="DlyLink headerLink headerLink--category">
              カテゴリ一覧
            </a>
            <a href="/articles" className="DlyLink headerLink headerLink--article">
              レシピをよむ
            </a>
          </div>
          <div className="search-box-wrapper search-box">
            <div id="search_box">
              <form action="/search">
                <input type="text" placeholder="料理名・食材でレシピをさがす" id="query" name="query" ></input>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon"  >
                  <path d="M14.0541 14.0536L21 21.0001" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.64706 16.2941C12.8704 16.2941 16.2941 12.8704 16.2941 8.64706C16.2941 4.42371 12.8704 1 8.64706 1C4.42371 1 1 4.42371 1 8.64706C1 12.8704 4.42371 16.2941 8.64706 16.2941Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ></path>
                </svg>
              </form>
            </div>
          </div>
          <div className="global-menu-root global-controls"  ><span className="button-wrapper">
            <div dly-ghost="" className="invite-button" ><Link to="/MakeRecipes">レシピを作る</Link></div>
            <div dly-ghost="" className="signup-button" ><Link to="/test">お知らせ</Link></div>
            <div dly-ghost="" className="login-button" ><span className="mobile-hidden" >お問い合わせ</span></div></span>
          </div>
        </div>
      </div>
    );
  }

export default Header;