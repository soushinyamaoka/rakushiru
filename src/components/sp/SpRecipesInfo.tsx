import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import SpHeader from './SpHeader';
import { RecipeModel } from '../../module/RecipeModel';
import Service from '../../module/Service';
import "../../SpInfo.css";

let modelIns: RecipeModel
let service: Service

function init() {

  modelIns = new RecipeModel().getInstance();
  service = new Service();
}

const SpRecipesInfo = () => {
  init();

  const [recipeModel, setRecipeModel] = useState(modelIns.recipeModel);
  const [ingredientModel, setIngredientModel] = useState(modelIns.ingredientModel);
  const [instModel, setInstModel] = useState(modelIns.instModel);

  const location: any = useLocation();
  recipeModel.RecipeId = location.state.recipeId;
  modelIns.models.Recipes[0] = recipeModel
  service.reqParam.ReqCode = "searchRecipe";
  service.reqParam.Data = modelIns.models;

  useEffect(() => {
    service.send(service.reqParam).then(res => {
      const resData = res.data.Data
      setIngredientModel(resData.Ingredients)
      setRecipeModel(resData.Recipes[0])
      setInstModel(resData.Instructions)
    })
  }, [])

  return (
    <>
      <SpHeader />
      <div id="wrapper">
        <div id="content">
          <div id="content-inner">
            <section id="partial_spa" className="partial-spa-root is-mobile" >
              <div className="SpApp router-view"  >
                <main className="SpApp-main" >
                  <div className="TitleAndIntroductionSp SpApp-titleAndIntroduction"  >
                    <div className="TitleAndIntroductionSp-title" >
                      <h1 className="TitleAndIntroductionSp-titleBody" >{recipeModel.Title}</h1>
                    </div>
                    <div className="TitleAndIntroductionSp-introduction" >
                      <div >
                        <div className="TitleAndIntroductionSp-introductionContent" >
                          <div>{recipeModel.Introduction}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="MainContentWta SpApp-mainContent"  >
                    <div className="RecipeDetail-metadataWrap"  >
                      <div className="DlyW2aNutrientSlideUpModal-wrapper">
                        <div className="DlyW2aNutrientSlideUpModal">
                          <div className="DlyW2aNutrientSlideUpModal-contentWrap">
                            <div className="DlyW2aNutrientSlideUpModal-nutrientWrap">
                              <div className="image-wrapper">
                                <img src={`${process.env.PUBLIC_URL}` + "image/" + recipeModel.Image} className="resizeimage"></img>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MainContentWta-ingredients" >
                      <h2 className="MainContentWta-sectionTitle" >
                        <span className="MainContentWta-sectionTitleIngredients" >材料</span>
                        <span className="MainContentWta-sectionTitleIngredientsServings" >({recipeModel.Serving}人前)</span>
                      </h2>
                      <ul className="MainContentWta-ingredientsList" >
                        {ingredientModel.map((model) =>
                          <li key={model.OrderNo} className="MainContentWta-ingredientsListItem" >
                            <div className="MainContentWta-ingredientsListItemValue" >
                              <span className="MainContentWta-instructionsListItemOrder" >{model.OrderNo}</span>
                              {model.Name}
                            </div>
                            <div className="MainContentWta-ingredientsListItemValue" >{model.Quantity}</div>
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="MainContentWta-instructions" >
                      <span className="MainContentWta-anchorForScroll" >
                      </span>
                      <h2 className="MainContentWta-sectionTitle MainContentWta-sectionTitle--instructions" >手順</h2>
                      <ul className="MainContentWta-instructionsList" >
                        {instModel.map((model) =>
                          <li key={model.OrderNo} className="MainContentWta-instructionsListItem" >
                            <span className="MainContentWta-instructionsListItemOrder" >{model.OrderNo}</span>
                            <div className="MainContentWta-instructionsListItemBody" >{model.Detail}</div>
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="MainContentWta-memo" >
                      <h2 className="MainContentWta-sectionTitle MainContentWta-sectionTitle--memo" >
                        コツ・ポイント
                      </h2>
                      <div className="MainContentWta-memoContent" >
                        とにかく、あまりに手早くできて、美味しいので、オススメです！
                        必須はキュウリ、塩昆布、ゴマ油なので、他に、たとえば、シソ、ワカメ、梅肉などを加えてもいいです。
                        お家にある材料で、足したり引いたりしてみてください。
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpRecipesInfo;