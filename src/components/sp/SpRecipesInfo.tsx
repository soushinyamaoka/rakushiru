import React, { useState, useEffect } from 'react';
import SpHeader from './SpHeader';
import RecipeInfoModel from '../../module/RecipeModel';
import Service from '../../module/Service';
import "../../SpInfo.css";

let modelIns: RecipeInfoModel
let service: Service

function init() {
  modelIns = new RecipeInfoModel().getInstance();
  service = new Service(modelIns);

  service.requData.reqCode = "RecipesInfoSelect";
}

const SpRecipesInfo = () => {
  init();

  const [materialModel, setMaterialModel] = useState(modelIns.materialModel);
  const [recipeInfoModel, setRecipeInfoModel] = useState(modelIns.recipeInfoModel);
  const [howModel, setHowModel] = useState(modelIns.howModel);
  const [showModal, setShowModal] = useState(0);

  useEffect(() => {
    service.send(service.requData).then(res => {
      console.log("E")
      console.log(res)
      // console.log(res)
      // const m = service.getData();
      console.log("結果")
      // console.log(m)
      //     console.log("返信が来ました")
      //     console.log(res.data)
      //     this.model = res.data;
      //     //this.setState({ persons });
      // const service = new Service(model);
      const resData = res.data.Data
      console.log(resData)
      setMaterialModel(resData.Material)
      setRecipeInfoModel(resData.RecipeInfo)
      setHowModel(resData.How)
      console.log(recipeInfoModel.Title)
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
                      <h1 className="TitleAndIntroductionSp-titleBody" >{recipeInfoModel.Title}</h1>
                    </div>
                    <div className="TitleAndIntroductionSp-introduction" >
                      <div >
                        <div className="TitleAndIntroductionSp-introductionContent" >
                          <div>{recipeInfoModel.Info}</div>
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
                                <img src={recipeInfoModel.Imgae} className="resizeimage"></img>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MainContentWta-ingredients" >
                      <h2 className="MainContentWta-sectionTitle" >
                        <span className="MainContentWta-sectionTitleIngredients" >材料</span>
                        <span className="MainContentWta-sectionTitleIngredientsServings" >({recipeInfoModel.Serving}人前)</span>
                      </h2>
                      <ul className="MainContentWta-ingredientsList" >
                        {materialModel.map((value) =>
                          <li className="MainContentWta-ingredientsListItem" >
                            <div className="MainContentWta-ingredientsListItemValue" >
                              {value.Name}
                            </div>
                            <div className="MainContentWta-ingredientsListItemValue" >{value.Amount}</div>
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="MainContentWta-instructions" >
                      <span className="MainContentWta-anchorForScroll" >
                      </span>
                      <h2 className="MainContentWta-sectionTitle MainContentWta-sectionTitle--instructions" >手順</h2>
                      <ul className="MainContentWta-instructionsList" >
                        {howModel.map((value) =>
                          <li className="MainContentWta-instructionsListItem" >
                            <span className="MainContentWta-instructionsListItemOrder" >{value.Index}</span>
                            <div className="MainContentWta-instructionsListItemBody" >{value.How}</div>
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