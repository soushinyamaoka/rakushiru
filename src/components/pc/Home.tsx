import React from "react";
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import "../../App.css";

const Home = () => {
  return (
    <div id="main_app">
      <Header />
      <section className="partial-spa-root is-pcDesignUpdated">
        <div className="PcRoot router-view">
          <Main />
          <SideBar />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;