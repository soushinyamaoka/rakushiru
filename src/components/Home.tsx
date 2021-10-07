import React from "react";
import PcHome from './pc/Home';
import SpHome from './sp/Home';

import "../App.css";

const Home = () => {
  return (
    <div>
      <div className="is-pc">
        <PcHome />
      </div>
      <div className="is-sp">
        <SpHome />
      </div>
    </div>

  );
}

export default Home;