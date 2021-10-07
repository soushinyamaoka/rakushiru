import "../../Make.css";
import MainPhoto from './MainPhoto';
import Material from './Material';
import RecipesInfo from './RecipesInfo';
import Header from './Header';
import SideBar from './SideBar';
import ProductPage from './ProductPage';
import HowToMake from './HowToMake';

function test2(evt: any) {
  console.log("aaaaaaaaa")
  evt.preventDefault();
        let form1 = document.getElementById('form1');
        let xhr = new XMLHttpRequest();

        xhr.open("POST", "http://localhost:8080/user-form");

        xhr.addEventListener('load', (evt) => {
            console.log('** xhr: load');
            let response = JSON.parse(xhr.responseText);
            console.log(response);
            console.log(xhr);
        });
        xhr.addEventListener('error', (evt) => {
            console.log('** xhr: error');
        });

        xhr.send("aaaa");
}

const test = () => {
  return (
    <div>
      <Header />
      <div className="Sample">
        <div className="TEST1">
          <div className="TEST2">
            <div className="TEST3">
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
          <div className="TEST4">
            <div className="TEST5">
              <label>材料</label>
              <button className="edit_htm_button" onClick={test2}>編集</button>
              <button className="add_m_button" >追加</button>
              <Material />
            </div>
            <div className="TEST6">
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

export default test;