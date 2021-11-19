import "../../info.css";
import Header from './Header';
import SideBar from './SideBar';
import { RecipeModel } from '../../module/RecipeModel';
import Service from '../../module/Service';
import axios from 'axios';
import React from 'react';

const PcRecipesInfoTemp = (howModel: { index: number; how: string; }[], 
                        materialModel: { index: number; name: string; amount: string; }[], 
                        recipeModel: { RecipeCode: number; title: string; info: string; serving: number; imgae: string; }) => {
  return (
    <div className="main_app">
      <Header />
      <div className="recipe-info-wrapper">
        <div className="content-wrapper">
          <main role="main" className="main content">
            <article className="main-video-wrapper" >
              <article className="main-video-root main-video" >
                <div className="video-wrapper" >
                  <div className="dly-video-root video"  >
                    <div className="clickable_image_uploader_wrapper" id="recipe_photo_wrapper">
                      <div id="recipe_image_form" className="uploader_form">
                        <img alt="" id="recipe-photo" className="uploader" src={recipeModel.imgae}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="title-wrapper" >
                  <h1 className="title" >{recipeModel.title}</h1>
                </div>
                <p className="introduction" >{recipeModel.info}</p>
                <section className="ingredients" >
                  <h2 >材料<span className="servings" >({recipeModel.serving}人前)</span></h2>
                  <ul className="ingredient-list" >
                    {materialModel.map((value) =>
                      <li className="ingredient-list-item" >
                        <a className="DlyLink ingredient-name" >
                          {value.name}
                        </a>
                        <span className="ingredient-quantity-amount" >{value.amount}</span>
                      </li>
                    )}
                  </ul>
                  {/* <ul className="ingredient-list" >
                    <li className="ingredient-list-item group-title" >
                      <span className="ingredient-title" >お好みで</span>
                    </li>
                    <li className="ingredient-list-item group-item" >
                      <a href="/search?query=%E3%81%94%E3%81%AF%E3%82%93" className="DlyLink ingredient-name" >
                        ごはん
                      </a>
                      <span className="ingredient-quantity-amount" >適量</span>
                    </li>
                  </ul> */}
                </section>
                <section className="instructions" >
                  <h2 >作り方</h2>
                  <ol className="instruction-list" >
                    {howModel.map((value) =>
                      <li className="instruction-list-item" >
                        <span className="sort-order" >{value.index}</span>
                        <span className="content" >{value.how}</span>
                      </li>
                    )}
                  </ol>
                </section>
              </article>
            </article>
          </main>
        </div>
        <SideBar />
      </div>
    </div>
  );
}

class PcRecipesInfo extends React.Component {
  private recipeModel = new RecipeModel();
  private service = new Service();

  componentDidMount() {
    this.service.requData.reqCode = "";
    this.service.requData.data = this.recipeModel;
    this.service.send(this.service.requData, null!);
  }

  // render() {
  //   return PcRecipesInfoTemp(this.recipeModel.howModel, this.recipeModel.materialModel, this.recipeModel.recipeInfoModel)
  // }
}



export default PcRecipesInfo;