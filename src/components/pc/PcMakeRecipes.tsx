import "../../Make.css";
import MainPhoto from './MainPhoto';
import Material from './Material';
import Header from './Header';
import SideBar from './SideBar';
import HowToMake from './HowToMake';
import React from 'react';

function test2(evt: any) {
  console.log("aaaaaaaaa")
  evt.preventDefault();
        // let form1 = document.getElementById('form1');
        // let xhr = new XMLHttpRequest();

        // xhr.open("POST", "http://localhost:8080/user-form");

        // xhr.addEventListener('load', (evt) => {
        //     console.log('** xhr: load');
        //     let response = JSON.parse(xhr.responseText);
        //     console.log(response);
        //     console.log(xhr);
        // });
        // xhr.addEventListener('error', (evt) => {
        //     console.log('** xhr: error');
        // });

        // xhr.send("aaaa");
}

const PcMakeRecipesTemp = () => {
  return (
    <div id="main_app">
      <Header />
      <div className="make-main">
        <div className="make-main-secondary">
          <div className="make-explanation-photo">
            <div className="make-explanation">
              <div className="make-recipe-inputarea input_box">
                <label>料理名</label>
                <div id="input_box">
                  <input type="text" placeholder="料理名をいれる" id="query" name="query" value="１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０"></input>
                </div>
              </div>
              <div className="make-recipe-inputarea area_box">
                <label>料理の説明</label>
                <div id="area_box">
                  <textarea
                    className="editor_field"
                    name="value"
                    placeholder="料理の説明をいれる"
                    value="あ345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"
                  >
                  </textarea>
                </div>
              </div>
            </div>
            <MainPhoto />
          </div>
          <div className="make-material-how">
            <div className="make-material">
              <label>材料</label>
              <button className="edit_htm_button" onClick={test2}>編集</button>
              <button className="add_m_button" >追加</button>
              <Material />
            </div>
            <div className="make-how">
              <label>作り方</label>
              <button className="edit_htm_button" >編集</button>
              <button className="add_htm_button" >追加</button>
              <HowToMake />
            </div>
          </div>
        </div>
        <SideBar />
      </div>
    </div>
  );
}

class PcMakeRecipes extends React.Component {

  render() {
    return PcMakeRecipesTemp()
  }
}

export default PcMakeRecipes;