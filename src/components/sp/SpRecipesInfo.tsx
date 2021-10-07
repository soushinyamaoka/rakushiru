import React from "react";
import SpHeader from './SpHeader';
import RecipeModel from '../../module/RecipeModel';
import Service from '../../module/Service';
import "../../SpInfo.css";

const SpRecipesInfoTemp = (howModel: { index: number; how: string; }[],
  materialModel: { index: number; name: string; amount: string; }[],
  recipeModel: { RecipeCode: number; title: string; info: string; serving: number; imgae: string; }) => {
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
                      <h1 className="TitleAndIntroductionSp-titleBody" >{recipeModel.title}</h1>
                    </div>
                    <div className="TitleAndIntroductionSp-introduction" >
                      <div >
                        <div className="TitleAndIntroductionSp-introductionContent" >
                          <div>{recipeModel.info}</div>
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
                                <img src={recipeModel.imgae} className="resizeimage"></img>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MainContentWta-ingredients" >
                      <h2 className="MainContentWta-sectionTitle" >
                        <span className="MainContentWta-sectionTitleIngredients" >材料</span>
                        <span className="MainContentWta-sectionTitleIngredientsServings" >({recipeModel.serving}人前)</span>
                      </h2>
                      <ul className="MainContentWta-ingredientsList" >
                        {materialModel.map((value) =>
                          <li className="MainContentWta-ingredientsListItem" >
                            <div className="MainContentWta-ingredientsListItemValue" >
                              {value.name}
                            </div>
                            <div className="MainContentWta-ingredientsListItemValue" >{value.amount}</div>
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
                            <span className="MainContentWta-instructionsListItemOrder" >{value.index}</span>
                            <div className="MainContentWta-instructionsListItemBody" >{value.how}</div>
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

class SpRecipesInfo extends React.Component {
  private recipeModel = new RecipeModel();
  private service = new Service();

  componentDidMount() {
    this.service.send();
  }

  render() {
    return SpRecipesInfoTemp(this.recipeModel.howModel, this.recipeModel.materialModel, this.recipeModel.recipeModel)
  }
}

export default SpRecipesInfo;