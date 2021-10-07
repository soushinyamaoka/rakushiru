import React from "react";
import MainSection from './MainSection';
import Recipe from './Recipe';

const Main = () => {
  return (
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
                <div role="tabpanel" className="VueCarousel-slide" aria-hidden="true">
                  <a data-v-2df921e1="" href="https://chirashi.kurashiru.com/?utm_source=kurashiru&amp;utm_content=top_carousel" className="TopChirashiBanner-link">
                    <div data-v-2df921e1="" className="DlyImg-root">
                      <img src="//assets.kurashiru.com/production/assets/top_chirashi_banner-f8896cb710150018f3daf9ce64834d4a1ab2a02ab87e787094240632a023835f.jpg" dly-img-state="loaded" className="DlyImg-img"></img>
                      <div className="DlyImg-placeholder">
                        <noscript>
                          <img className="DlyImg-noscriptImg" src="//assets.kurashiru.com/production/assets/top_chirashi_banner-f8896cb710150018f3daf9ce64834d4a1ab2a02ab87e787094240632a023835f.jpg" alt=""></img>
                        </noscript>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="VueCarousel-pagination VueCarousel-pagination--bottom-overlay">
              <div role="tablist" className="VueCarousel-dot-container" style={{ marginTop: 20 }}>
                <button aria-hidden="false" role="tab" title="Item 0" value="Item 0" aria-label="Item 0" aria-selected="true" className="VueCarousel-dot VueCarousel-dot--active" style={{ marginTop: 20, padding: 10, width: 10, height: 10, backgroundColor: "rgb(255, 170, 78)" }}>
                </button>
                <button aria-hidden="false" role="tab" title="Item 1" value="Item 1" aria-label="Item 1" aria-selected="false" className="VueCarousel-dot" style={{ marginTop: 20, padding: 10, width: 10, height: 10, backgroundColor: "rgb(239, 239, 239)" }}>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="PcRoot-popularRecipes">
        <h3 className="PcRoot-popularRecipeTitle" >人気のレシピ</h3>
        <div className="PcRoot-popularRecipeItem">
          <ul className="PcRoot-popularRecipeRecipes" >
            <Recipe
              name="居酒屋さんメニュー！キュウリの塩昆布和え"
              image="https://video.kurashiru.com/production/videos/b624170e-41fc-4f15-b1ec-5e3b26f6bb5c/compressed_thumbnail_square_normal.jpg?1480416129"
              link="/RecipesInfo"
            />
            <Recipe
              name="ポリポリ食感 きゅうりの佃煮"
              image="https://video.kurashiru.com/production/videos/86978a96-d5ad-49f1-a214-0a90a2934920/compressed_thumbnail_square_normal.jpg?1566274162"
              link="/RecipesInfo"
            />
          </ul>
        </div>
      </div >
    </div >
  );
}

export default Main;