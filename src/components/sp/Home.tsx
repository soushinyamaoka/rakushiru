import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import SpHeader from './SpHeader';
import { RecipeModel } from '../../module/RecipeModel';
import Service from '../../module/Service';
import { Link } from "react-router-dom";
import "../../SpHome.css";

let modelIns: RecipeModel
let service: Service

function init() {

  modelIns = new RecipeModel().getInstance();
  service = new Service();
}

const Home = () => {
  const recipeId = "12345"

  init();

  // const [recipeModel, setRecipeModel] = useState(modelIns.recipeModel);

  // const location: any = useLocation();
  // recipeModel.RecipeId = location.state.recipeId;
  // modelIns.models.Recipes[0] = recipeModel
  // service.reqParam.ReqCode = "searchRecipe";
  // service.reqParam.Data = modelIns.models;

  // useEffect(() => {
  //   service.send(service.reqParam, null!).then(res => {
  //     const resData = res.data.Data
  //     setRecipeModel(resData.Recipes[0])
      
  //   })
  // }, [])
  let homeModel = modelIns.getHomeModels.Recipes
  console.log(homeModel)

  return (
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
                              <img src="https://video.kurashiru.com/production/videos/b624170e-41fc-4f15-b1ec-5e3b26f6bb5c/compressed_thumbnail_square_normal.jpg?1626830520" alt="居酒屋さんメニュー！キュウリの塩昆布和え" dly-img-state="loaded" className="DlyImg-img" ></img>
                              <div className="DlyImg-placeholder" style={{ paddingBottom: "100%" }} >
                                <noscript>
                                  <img className="DlyImg-noscriptImg" src="https://video.kurashiru.com/production/videos/b624170e-41fc-4f15-b1ec-5e3b26f6bb5c/compressed_thumbnail_square_normal.jpg?1626830520" alt="居酒屋さんメニュー！キュウリの塩昆布和え"></img>
                                </noscript>
                              </div>
                            </div>
                          </a>
                          <div className="video-list-info" >
                            <div className="video-list-title" >
                              <p className="dly-video-item-title-root mobile small"  >
                              <Link
                                to={{
                                  pathname: "/RecipesInfo",
                                  state: model[RecipeModel.RECIPE_ID]
                                }} 
                                >{model[RecipeModel.TITLE]}
                              </Link>
                              </p>
                            </div>  </div>
                        </div>
                      </li>
                      ))}
                    </ul>
                  </div>
                  <div className="SpRoot-adsWrapper" >
                    <div className="SpRoot-ads" >
                      <div className="SpRoot-adsInner" style={{ transformOrigin: "left center", transform: "scaleY(1.05) scaleX(1.05)" }}>
                        <div id="div-gpt-ad-1561083175021-0" className="dlyAds ads-fluct-root" data-v-cac48460="" style={{ margin: "0 !important" }} data-transform-id="18fac902-9ab9-4e81-a00b-d66742d383ab" data-google-query-id="COOkl865l_MCFU0bKgodgeQA9A">
                          <div id="google_ads_iframe_/67340404/s_kurashiru_300*250_top_keywordshita_0__container__" style={{ border: "0pt none", display: "inline-block", width: 320, height: 50 }}>
                            <iframe src="https://ef20d84b112ae406e0cfc129dcabdf3e.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html" id="google_ads_iframe_/67340404/s_kurashiru_300*250_top_keywordshita_0" title="3rd party ad content" scrolling="no" width="320" height="50" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" data-google-container-id="2" style={{ border: 0, verticalAlign: "bottom" }} data-load-complete="true">
                            </iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;