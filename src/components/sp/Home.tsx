import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import SpHeader from './SpHeader';
import { RecipeModel } from '../../module/RecipeModel';
import Service from '../../module/Service';
import { Link } from "react-router-dom";
import "../../SpHome.css";

let modelIns: RecipeModel
let service: Service
let isInit: boolean = false

function init() {

  modelIns = new RecipeModel().getInstance();
  service = new Service();
}

const Home = () => {
  const recipeId = "12345"

  init();

  const [homeModel, setHomeModel] = useState(modelIns.homeModel);

  // const location: any = useLocation();
  // recipeModel.RecipeId = location.state.recipeId;
  // modelIns.models.Recipes[0] = recipeModel

  useEffect(() => {
    service.reqParam.ReqCode = "openHome";
    service.reqParam.Data = service.getKeyWord();
    service.openHome(service.reqParam).then(res => {
      const resData = res.data.Data
      isInit = true
      setHomeModel(resData.Recipes)

    })
  }, [])
  // let homeModel = modelIns.getHomeModels.Recipes
  console.log(homeModel)

  return (
    <>
      {(isInit) ? (
        <>
          <SpHeader />
          <div id="wrapper">
            <div id="content">
              <div id="content-inner">
                <section id="partial_spa" className="partial-spa-root is-mobile" >
                  <div className="SpRoot router-view"  >
                    <div className="SpRoot-topBannerWrapper" >
                      <a href="https://app.adjust.com/kd90u9m_ms11le2?deeplink=%2F" className="TopToAppBanner-link SpRoot-topBanner"  >
                        <div className="DlyImg-root"  >
                          <img src="//assets.kurashiru.com/production/assets/web_to_app/top_ carousel_w2a_sp-c7601d89c3dd232469c2ea26c55a25d312b0baa4efdfb401bb4713fb279aec63.png" dly-img-state="loaded" className="DlyImg-img" ></img>
                          <div className="DlyImg-placeholder" style={{ paddingBottom: "56.3235294117647%" }} >
                            <noscript>
                              <img className="DlyImg-noscriptImg" src="//assets.kurashiru.com/production/assets/web_to_app/top_ carousel_w2a_sp-c7601d89c3dd232469c2ea26c55a25d312b0baa4efdfb401bb4713fb279aec63.png" alt=""></img>
                            </noscript>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="SpRoot-attentionLinkWrapper" >
                    </div>
                    <div className="SpRoot-globalNav" >
                      <a href="/categories" className="DlyLink SpRoot-globalNavItem" > カテゴリをみる </a>
                      <Link className="SpRoot-globalNavItem" to="/MakeRecipes">レシピをつくる</Link>
                      <a href="/articles" className="DlyLink SpRoot-globalNavItem" > レシピをよむ </a>
                    </div>
                    <div className="SpRoot-categories" >
                      <div className="SpRoot-categoryTabs" >
                        <div className="SpRoot-categoryTabItem SpRoot-categoryTabItem--active" >
                          メニューから探す
                        </div>
                        <div className="SpRoot-categoryTabItem" >
                          簡単さで探す
                        </div>
                      </div>
                      <div className="SpRoot-categoryList" >
                        <a href="/video_categories/140" className="DlyLink SpRoot-categoryListItem SpRoot-categoryListItem--forIngredient">
                          <span className="SpRoot-categoryListItemContent">
                            野菜
                          </span>
                        </a>
                        <a href="/video_categories/199" className="DlyLink SpRoot-categoryListItem SpRoot-categoryListItem--forIngredient">
                          <span className="SpRoot-categoryListItemContent">
                            肉
                          </span>
                        </a>
                        <a href="/video_categories/219" className="DlyLink SpRoot-categoryListItem SpRoot-categoryListItem--forIngredient">
                          <span className="SpRoot-categoryListItemContent">
                            大豆・豆腐
                          </span>
                        </a>
                        <a href="/video_categories/244" className="DlyLink SpRoot-categoryListItem SpRoot-categoryListItem--forIngredient">
                          <span className="SpRoot-categoryListItemContent">
                            チーズ
                          </span>
                        </a>
                        <a href="/video_categories/226" className="DlyLink SpRoot-categoryListItem SpRoot-categoryListItem--forIngredient">
                          <span className="SpRoot-categoryListItemContent">
                            魚
                          </span>
                        </a>
                        <a href="/categories" className="DlyLink SpRoot-categoryListItem SpRoot-categoryListItem--all SpRoot-categoryListItem--forIngredient" >
                          すべて
                        </a>
                      </div>
                    </div>
                    <div className="SpRoot-popularRecipesTitle" >人気キーワードのレシピ</div>
                    <div className="SpRoot-popularRecipes" >
                      <div className="SpRoot-popularRecipeItem" >
                        <div className="SpRoot-popularRecipeSectionTitle" >
                          <div className="SpRoot-popularRecipeWord" >
                            きゅうり
                          </div>
                          <div className="SpRoot-popularRecipeMore" >
                            すべて見る
                          </div>
                        </div>
                        <ul className="SpRoot-popularRecipeRecipes" >
                          {homeModel.map((model) => (
                            <li className="SpRoot-popularRecipe" >
                              <div className="dly-video-item-root mobile small"  >
                                <a href="/recipes/b624170e-41fc-4f15-b1ec-5e3b26f6bb5c" className="DlyLink thumbnail-wrapper dly-video-item-thumbnail-root responsive small" style={{ borderRadius: 8 }}  >
                                  <div className="DlyImg-root video-list-img"  >
                                    <img src={service.getImagePath(model[RecipeModel.IMAGE])} className="DlyImg-img" ></img>
                                  </div>
                                </a>
                                <div className="video-list-info" >
                                  <div className="video-list-title" >
                                    <p className="dly-video-item-title-root mobile small"  >
                                      <Link
                                        to={{
                                          pathname: "/RecipesInfo",
                                          state: { recipeId: model[RecipeModel.RECIPE_ID] }
                                        }}
                                      >{model[RecipeModel.TITLE]}
                                      </Link>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>// showFlagがfalseの場合はModalは表示しない
      )}
    </>
  );
}

export default Home;