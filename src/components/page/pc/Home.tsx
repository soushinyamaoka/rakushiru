import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import { RecipeModel } from '../../../module/RecipeModel';
import Service from '../../../module/Service';
import { Link } from "react-router-dom";
import "../../../App.css";

let modelIns: RecipeModel
let service: Service
let isInit: boolean = false

function init() {

  modelIns = new RecipeModel().getInstance();
  service = new Service();
}

const Home = () => {


  init();

  const [homeModel, setHomeModel] = useState(modelIns.homeModel);

  useEffect(() => {
    service.reqParam.ReqCode = "openHome";
    service.reqParam.Data = service.getKeyWord();
    service.openHome(service.reqParam).then(res => {
      const resData = res.data.Data
      isInit = true
      setHomeModel(resData.Recipes)

    })
  }, [])
  return (
    <>
      {(isInit) ? (
        <>
          <div id="main_app">
            <Header />
            <section className="partial-spa-root is-pcDesignUpdated">
              <div className="PcRoot router-view">
                <div className="PcRoot-main">
                  <div className="HeroVideoPc">
                    <div>
                      <div className="VueCarousel">
                        <div className="VueCarousel-wrapper">
                          <div className="VueCarousel-inner" style={{ transform: "translate(0px, 0px)", transition: "transform 0.5s ease 0s", flexBasis: 680, visibility: "visible", height: "auto" }}>
                            <div role="tabpanel" className="VueCarousel-slide VueCarousel-slide-active VueCarousel-slide-center">
                              <a href="https://app.adjust.com/st2pn1q_zj7ofsw?deeplink=%2F" className="TopToAppBanner-link">
                                <div className="DlyImg-root">
                                  <img src="//assets.kurashiru.com/production/assets/web_to_app/top_ carousel_w2a-bcc5e6602a9c7550a52f204177610ff4f442b64493bd1f8eb2b92e21d1a1acee.png" dly-img-state="loaded" className="DlyImg-img"></img>
                                  <div className="DlyImg-placeholder">
                                    <noscript>
                                      <img className="DlyImg-noscriptImg" src="//assets.kurashiru.com/production/assets/web_to_app/top_ carousel_w2a-bcc5e6602a9c7550a52f204177610ff4f442b64493bd1f8eb2b92e21d1a1acee.png" alt=""></img>
                                    </noscript>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="PcRoot-popularRecipes">
                    <h3 className="PcRoot-popularRecipeTitle" >人気のレシピ</h3>
                    <div className="PcRoot-popularRecipeSectionTitle" >
                      <div className="PcRoot-popularRecipeWord" >{service.getRank1()}</div>
                      <div className="PcRoot-popularRecipeMore" >
                        すべて見る
                      </div>
                    </div>
                    <div className="PcRoot-popularRecipeItem">
                      <div>
                        <ul className="PcRoot-popularRecipeRecipes" >
                          {homeModel.map((model) => (
                            <li key={model[RecipeModel.RECIPE_ID]} className="PcRoot-popularRecipe" >
                              <div className="PcRoot-popularRecipe--item dly-video-item-root small"  >
                                <a className="DlyLink thumbnail-wrapper dly-video-item-thumbnail-root small" style={{ borderRadius: 8 }}  >
                                  <div className="DlyImg-root video-list-img"  >
                                    <img src={new Service().getImagePath(model[RecipeModel.IMAGE])} alt={model[RecipeModel.TITLE]} dly-img-state="loaded" className="DlyImg-img" ></img>
                                  </div>
                                </a>
                                <div className="video-list-info" >
                                  <div className="video-list-title" >
                                    <p className="dly-video-item-title-root small"  >
                                      <Link
                                        to={{
                                          pathname: "/RecipesInfo/" + model[RecipeModel.RECIPE_ID]
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
                  </div >
                </div >
                <SideBar />
              </div>
            </section>
            <Footer />
          </div>
        </>
      ) : (
        <></>// showFlagがfalseの場合はModalは表示しない
      )}
    </>
  );
}

export default Home;