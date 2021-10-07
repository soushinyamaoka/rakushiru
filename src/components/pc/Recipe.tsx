import React from "react";
import { Link } from "react-router-dom";
const Recip = (props) => {
  return (
    <div>
      <li className="PcRoot-popularRecipe" >
        <div className="PcRoot-popularRecipe--item dly-video-item-root small"  >
          <a href={props.link} className="DlyLink thumbnail-wrapper dly-video-item-thumbnail-root small" style={{ borderRadius: 8 }}  >
            <div className="DlyImg-root video-list-img"  >
              <img src={props.image} alt={props.name} dly-img-state="loaded" className="DlyImg-img" ></img>
              <div className="DlyImg-placeholder" style={{ paddingBottom: "100%" }} >
                <noscript>
                  <img className="DlyImg-noscriptImg" src={props.image} alt={props.name}></img>
                </noscript>
              </div>
            </div>
          </a>
          <div className="video-list-info" >
            <div className="video-list-title" >
              <p className="dly-video-item-title-root small"  >
              <div dly-ghost="" className="DlyLink title" ><Link to={props.link}>{props.name}</Link></div>
              </p>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Recip;