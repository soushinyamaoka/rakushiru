import "../../../info.css";
import Header from './Header';
import SideBar from './SideBar';
import { RecipeModel } from '../../../module/RecipeModel';
import Service from '../../../module/Service';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


let modelIns: RecipeModel
let service: Service

function init() {

  modelIns = new RecipeModel().getInstance();
  service = new Service();
}

const PcRecipesInfo = () => {

  init();

  const [recipeModel, setRecipeModel] = useState(modelIns.recipeModel);
  const [ingredientModel, setIngredientModel] = useState(modelIns.ingredientModel);
  const [instModel, setInstModel] = useState(modelIns.instModel);

  const params: any = useParams();
  if (params.id) {
    recipeModel.RecipeId = params.id;
    modelIns.models.Recipes[0] = recipeModel
    service.reqParam.ReqCode = "searchRecipe";
    service.reqParam.Data = modelIns.models;
  }


  useEffect(() => {
    service.selectRecipe(service.reqParam).then(res => {
      const resData = res.data.Data
      console.log("resData")
      console.log(resData)
      setIngredientModel(resData.Ingredients)
      setRecipeModel(resData.Recipes[0])
      setInstModel(resData.Instructions)
    })
  }, [])

  const editData = () => {
  };

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
                        <img id="recipe-photo" className="uploader" src={service.getImagePath(recipeModel[RecipeModel.IMAGE])}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="title-wrapper" >
                  <h1 className="recipesInfo-title" >{recipeModel[RecipeModel.TITLE]}</h1>
                </div>
                <p className="introduction" >{recipeModel[RecipeModel.INTRODUCTION]}</p>
                <section className="ingredients" >
                  <h2 >材料<span className="servings" >({recipeModel[RecipeModel.SERVING]}人前)</span></h2>
                  <ul className="ingredient-list" >
                    {ingredientModel.map((model) =>
                      <li key={model[RecipeModel.ORDER_NO]} className="ingredient-list-item" >
                        <a className="DlyLink ingredient-name" >
                          {model[RecipeModel.NAME]}
                        </a>
                        <span className="ingredient-quantity-amount" >{model[RecipeModel.QUANTITY]}</span>
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
                    {instModel.map((model) =>
                      <li key={model[RecipeModel.ORDER_NO]} className="instruction-list-item" >
                        <span className="sort-order" >{model[RecipeModel.ORDER_NO]}</span>
                        <span className="content" >{model[RecipeModel.DETAIL]}</span>
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

export default PcRecipesInfo;