import React from "react";
import SpHeader from './SpHeader';
import { Link } from "react-router-dom";
import "../../SpHome.css";

const Home = () => {
  const recipeId = "12345"
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
                  <a href="/categories" className="DlyLink SpRoot-globalNavItem" > カテゴリ一覧 </a>
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
                          <div className="video-list-favorite" >
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                              <path d="M12 21C11.6426 21 11.3298 20.9145 11.0171 20.7435C10.1682 20.2733 2.88591 15.9985 0.786094 10.7832C-0.643568 7.32061 -0.509537 2.53282 4.49428 0.480916C6.05797 -0.160305 7.84505 -0.160305 9.45342 0.480916C10.1682 0.780153 11.1065 1.29313 12 2.19084C12.8935 1.25038 13.8318 0.737405 14.5466 0.480916C16.155 -0.160305 17.942 -0.160305 19.5057 0.480916C24.5095 2.53282 24.6436 7.32061 23.2139 10.7832C21.0694 15.9985 13.7871 20.2733 12.9829 20.7435C12.6702 20.9145 12.3127 21 12 21ZM6.95151 2.14809C6.41539 2.14809 5.87926 2.23359 5.34314 2.44733C0.920125 4.2855 2.30511 8.68855 2.84123 10.0137C4.31557 13.6473 9.36406 17.2809 12 18.8198C14.5913 17.2809 19.6398 13.6473 21.1588 10.0137C21.6949 8.68855 23.1246 4.2855 18.6569 2.44733C17.6293 2.01985 16.5124 2.01985 15.4401 2.44733C14.77 2.70382 13.7871 3.30229 12.9829 4.54198C12.7595 4.84122 12.4021 5.05496 12.0447 5.05496C11.6426 5.05496 11.2852 4.88397 11.1065 4.54198C10.3023 3.30229 9.31938 2.74656 8.64923 2.44733C8.06843 2.23359 7.48763 2.14809 6.95151 2.14809Z" fill="white">
                              </path>
                            </svg>
                          </div>
                          <div className="video-list-info" >
                            <div className="video-list-title" >
                              <p className="dly-video-item-title-root mobile small"  >
                              <Link
                                to={{
                                  pathname: "/RecipesInfo",
                                  state: { recipeId }
                                }} 
                                >居酒屋さんメニュー！キュウリの塩昆布和え
                              </Link>
                              </p>
                            </div>  </div>
                        </div>
                      </li>
                      <li className="SpRoot-popularRecipe" >
                        <div className="dly-video-item-root mobile small"  >
                          <a href="/recipes/86978a96-d5ad-49f1-a214-0a90a2934920" className="DlyLink thumbnail-wrapper dly-video-item-thumbnail-root responsive small" style={{ borderRadius: 8 }}  >
                            <div className="DlyImg-root video-list-img"  >
                              <img src="https://video.kurashiru.com/production/videos/86978a96-d5ad-49f1-a214-0a90a2934920/compressed_thumbnail_square_normal.jpg?1578975270" alt="ポリポリ食感 きゅうりの佃煮" dly-img-state="loaded" className="DlyImg-img" ></img>
                              <div className="DlyImg-placeholder" style={{ paddingBottom: "100%" }} >
                                <noscript>
                                  <img className="DlyImg-noscriptImg" src="https://video.kurashiru.com/production/videos/86978a96-d5ad-49f1-a214-0a90a2934920/compressed_thumbnail_square_normal.jpg?1578975270" alt="ポリポリ食感 きゅうりの佃煮"></img>
                                </noscript>
                              </div>
                            </div>
                          </a>
                          <div className="video-list-favorite" >
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                              <path d="M12 21C11.6426 21 11.3298 20.9145 11.0171 20.7435C10.1682 20.2733 2.88591 15.9985 0.786094 10.7832C-0.643568 7.32061 -0.509537 2.53282 4.49428 0.480916C6.05797 -0.160305 7.84505 -0.160305 9.45342 0.480916C10.1682 0.780153 11.1065 1.29313 12 2.19084C12.8935 1.25038 13.8318 0.737405 14.5466 0.480916C16.155 -0.160305 17.942 -0.160305 19.5057 0.480916C24.5095 2.53282 24.6436 7.32061 23.2139 10.7832C21.0694 15.9985 13.7871 20.2733 12.9829 20.7435C12.6702 20.9145 12.3127 21 12 21ZM6.95151 2.14809C6.41539 2.14809 5.87926 2.23359 5.34314 2.44733C0.920125 4.2855 2.30511 8.68855 2.84123 10.0137C4.31557 13.6473 9.36406 17.2809 12 18.8198C14.5913 17.2809 19.6398 13.6473 21.1588 10.0137C21.6949 8.68855 23.1246 4.2855 18.6569 2.44733C17.6293 2.01985 16.5124 2.01985 15.4401 2.44733C14.77 2.70382 13.7871 3.30229 12.9829 4.54198C12.7595 4.84122 12.4021 5.05496 12.0447 5.05496C11.6426 5.05496 11.2852 4.88397 11.1065 4.54198C10.3023 3.30229 9.31938 2.74656 8.64923 2.44733C8.06843 2.23359 7.48763 2.14809 6.95151 2.14809Z" fill="white">
                              </path>
                            </svg>
                          </div>
                          <div className="video-list-info" >
                            <div className="video-list-title" >
                              <p className="dly-video-item-title-root mobile small"  >
                                <a href="/recipes/86978a96-d5ad-49f1-a214-0a90a2934920" className="DlyLink title" >
                                  ポリポリ食感 きゅうりの佃煮
                                </a>
                              </p>
                            </div>  </div>
                        </div>
                      </li>
                      <li className="SpRoot-popularRecipe" >
                        <div className="dly-video-item-root mobile small"  >
                          <a href="/recipes/57770d0e-b22e-46d5-8bb1-c671e27974a3" className="DlyLink thumbnail-wrapper dly-video-item-thumbnail-root responsive small" style={{ borderRadius: 8 }}  >
                            <div className="DlyImg-root video-list-img"  >
                              <img src="https://video.kurashiru.com/production/videos/57770d0e-b22e-46d5-8bb1-c671e27974a3/compressed_thumbnail_square_normal.jpg?1564646148" alt="簡単副菜！タコときゅうりの酢の物" dly-img-state="loaded" className="DlyImg-img" ></img>
                              <div className="DlyImg-placeholder" style={{ paddingBottom: "100%" }} >
                                <noscript>
                                  <img className="DlyImg-noscriptImg" src="https://video.kurashiru.com/production/videos/57770d0e-b22e-46d5-8bb1-c671e27974a3/compressed_thumbnail_square_normal.jpg?1564646148" alt="簡単副菜！タコときゅうりの酢の物"></img>
                                </noscript>
                              </div>
                            </div>
                          </a>
                          <div className="video-list-favorite" >
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                              <path d="M12 21C11.6426 21 11.3298 20.9145 11.0171 20.7435C10.1682 20.2733 2.88591 15.9985 0.786094 10.7832C-0.643568 7.32061 -0.509537 2.53282 4.49428 0.480916C6.05797 -0.160305 7.84505 -0.160305 9.45342 0.480916C10.1682 0.780153 11.1065 1.29313 12 2.19084C12.8935 1.25038 13.8318 0.737405 14.5466 0.480916C16.155 -0.160305 17.942 -0.160305 19.5057 0.480916C24.5095 2.53282 24.6436 7.32061 23.2139 10.7832C21.0694 15.9985 13.7871 20.2733 12.9829 20.7435C12.6702 20.9145 12.3127 21 12 21ZM6.95151 2.14809C6.41539 2.14809 5.87926 2.23359 5.34314 2.44733C0.920125 4.2855 2.30511 8.68855 2.84123 10.0137C4.31557 13.6473 9.36406 17.2809 12 18.8198C14.5913 17.2809 19.6398 13.6473 21.1588 10.0137C21.6949 8.68855 23.1246 4.2855 18.6569 2.44733C17.6293 2.01985 16.5124 2.01985 15.4401 2.44733C14.77 2.70382 13.7871 3.30229 12.9829 4.54198C12.7595 4.84122 12.4021 5.05496 12.0447 5.05496C11.6426 5.05496 11.2852 4.88397 11.1065 4.54198C10.3023 3.30229 9.31938 2.74656 8.64923 2.44733C8.06843 2.23359 7.48763 2.14809 6.95151 2.14809Z" fill="white">
                              </path>
                            </svg>
                          </div>
                          <div className="video-list-info" >
                            <div className="video-list-title" >
                              <p className="dly-video-item-title-root mobile small"  >
                                <a href="/recipes/57770d0e-b22e-46d5-8bb1-c671e27974a3" className="DlyLink title" >
                                  簡単副菜！タコときゅうりの酢の物
                                </a>
                              </p>
                            </div>  </div>
                        </div>
                      </li>
                      <li className="SpRoot-popularRecipe" >
                        <div className="dly-video-item-root mobile small"  >
                          <a href="/recipes/435fc9ab-7da1-4709-84e2-e766cc980aa0" className="DlyLink thumbnail-wrapper dly-video-item-thumbnail-root responsive small" style={{ borderRadius: 8 }}  >
                            <div className="DlyImg-root video-list-img"  >
                              <img src="" alt="簡単におつまみ きゅうりのピリ辛和え" dly-img-state="loading" className="DlyImg-img" ></img>
                              <div className="DlyImg-placeholder" style={{ paddingBottom: "100%" }} >
                                <noscript>
                                  <img className="DlyImg-noscriptImg" src="https://video.kurashiru.com/production/videos/435fc9ab-7da1-4709-84e2-e766cc980aa0/compressed_thumbnail_square_normal.jpg?1626136161" alt="簡単におつまみ きゅうりのピリ辛和え"></img>
                                </noscript>
                              </div>
                            </div>
                          </a>
                          <div className="video-list-favorite" >
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                              <path d="M12 21C11.6426 21 11.3298 20.9145 11.0171 20.7435C10.1682 20.2733 2.88591 15.9985 0.786094 10.7832C-0.643568 7.32061 -0.509537 2.53282 4.49428 0.480916C6.05797 -0.160305 7.84505 -0.160305 9.45342 0.480916C10.1682 0.780153 11.1065 1.29313 12 2.19084C12.8935 1.25038 13.8318 0.737405 14.5466 0.480916C16.155 -0.160305 17.942 -0.160305 19.5057 0.480916C24.5095 2.53282 24.6436 7.32061 23.2139 10.7832C21.0694 15.9985 13.7871 20.2733 12.9829 20.7435C12.6702 20.9145 12.3127 21 12 21ZM6.95151 2.14809C6.41539 2.14809 5.87926 2.23359 5.34314 2.44733C0.920125 4.2855 2.30511 8.68855 2.84123 10.0137C4.31557 13.6473 9.36406 17.2809 12 18.8198C14.5913 17.2809 19.6398 13.6473 21.1588 10.0137C21.6949 8.68855 23.1246 4.2855 18.6569 2.44733C17.6293 2.01985 16.5124 2.01985 15.4401 2.44733C14.77 2.70382 13.7871 3.30229 12.9829 4.54198C12.7595 4.84122 12.4021 5.05496 12.0447 5.05496C11.6426 5.05496 11.2852 4.88397 11.1065 4.54198C10.3023 3.30229 9.31938 2.74656 8.64923 2.44733C8.06843 2.23359 7.48763 2.14809 6.95151 2.14809Z" fill="white">
                              </path>
                            </svg>
                          </div>
                          <div className="video-list-info" >
                            <div className="video-list-title" >
                              <p className="dly-video-item-title-root mobile small"  >
                                <a href="/recipes/435fc9ab-7da1-4709-84e2-e766cc980aa0" className="DlyLink title" >
                                  簡単におつまみ きゅうりのピリ辛和え
                                </a>
                              </p>
                            </div>  </div>
                        </div>
                      </li>
                      <li className="SpRoot-popularRecipe" >
                        <div className="dly-video-item-root mobile small"  >
                          <a href="/recipes/b2362ea4-b0a0-447c-8946-71f487ddc5f7" className="DlyLink thumbnail-wrapper dly-video-item-thumbnail-root responsive small" style={{ borderRadius: 8 }}  >
                            <div className="DlyImg-root video-list-img"  >
                              <img src="" alt="ご飯と合う きゅうりとツナの旨辛和え" dly-img-state="loading" className="DlyImg-img" ></img>
                              <div className="DlyImg-placeholder" style={{ paddingBottom: "100%" }} >
                                <noscript>
                                  <img className="DlyImg-noscriptImg" src="https://video.kurashiru.com/production/videos/b2362ea4-b0a0-447c-8946-71f487ddc5f7/compressed_thumbnail_square_normal.jpg?1622161942" alt="ご飯と合う きゅうりとツナの旨辛和え"></img>
                                </noscript>
                              </div>
                            </div>
                          </a>
                          <div className="video-list-favorite" >
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                              <path d="M12 21C11.6426 21 11.3298 20.9145 11.0171 20.7435C10.1682 20.2733 2.88591 15.9985 0.786094 10.7832C-0.643568 7.32061 -0.509537 2.53282 4.49428 0.480916C6.05797 -0.160305 7.84505 -0.160305 9.45342 0.480916C10.1682 0.780153 11.1065 1.29313 12 2.19084C12.8935 1.25038 13.8318 0.737405 14.5466 0.480916C16.155 -0.160305 17.942 -0.160305 19.5057 0.480916C24.5095 2.53282 24.6436 7.32061 23.2139 10.7832C21.0694 15.9985 13.7871 20.2733 12.9829 20.7435C12.6702 20.9145 12.3127 21 12 21ZM6.95151 2.14809C6.41539 2.14809 5.87926 2.23359 5.34314 2.44733C0.920125 4.2855 2.30511 8.68855 2.84123 10.0137C4.31557 13.6473 9.36406 17.2809 12 18.8198C14.5913 17.2809 19.6398 13.6473 21.1588 10.0137C21.6949 8.68855 23.1246 4.2855 18.6569 2.44733C17.6293 2.01985 16.5124 2.01985 15.4401 2.44733C14.77 2.70382 13.7871 3.30229 12.9829 4.54198C12.7595 4.84122 12.4021 5.05496 12.0447 5.05496C11.6426 5.05496 11.2852 4.88397 11.1065 4.54198C10.3023 3.30229 9.31938 2.74656 8.64923 2.44733C8.06843 2.23359 7.48763 2.14809 6.95151 2.14809Z" fill="white">
                              </path>
                            </svg>
                          </div>
                          <div className="video-list-info" >
                            <div className="video-list-title" >
                              <p className="dly-video-item-title-root mobile small"  >
                                <a href="/recipes/b2362ea4-b0a0-447c-8946-71f487ddc5f7" className="DlyLink title" >
                                  ご飯と合う きゅうりとツナの旨辛和え
                                </a>
                              </p>
                            </div>  </div>
                        </div>
                      </li>
                      <li className="SpRoot-popularRecipe" >
                        <div className="dly-video-item-root mobile small"  >
                          <a href="/recipes/b6d788bd-b98f-4021-a158-63370573ec19" className="DlyLink thumbnail-wrapper dly-video-item-thumbnail-root responsive small" style={{ borderRadius: 8 }}  >
                            <div className="DlyImg-root video-list-img"  >
                              <img src="" alt="あると嬉しい！シンプルなきゅうりとワカメの酢の物" dly-img-state="loading" className="DlyImg-img" ></img>
                              <div className="DlyImg-placeholder" style={{ paddingBottom: "100%" }} >
                                <noscript>
                                  <img className="DlyImg-noscriptImg" src="https://video.kurashiru.com/production/videos/b6d788bd-b98f-4021-a158-63370573ec19/compressed_thumbnail_square_normal.jpg?1607900139" alt="あると嬉しい！シンプルなきゅうりとワカメの酢の物"></img>
                                </noscript>
                              </div>
                            </div>
                          </a>
                          <div className="video-list-favorite" >
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                              <path d="M12 21C11.6426 21 11.3298 20.9145 11.0171 20.7435C10.1682 20.2733 2.88591 15.9985 0.786094 10.7832C-0.643568 7.32061 -0.509537 2.53282 4.49428 0.480916C6.05797 -0.160305 7.84505 -0.160305 9.45342 0.480916C10.1682 0.780153 11.1065 1.29313 12 2.19084C12.8935 1.25038 13.8318 0.737405 14.5466 0.480916C16.155 -0.160305 17.942 -0.160305 19.5057 0.480916C24.5095 2.53282 24.6436 7.32061 23.2139 10.7832C21.0694 15.9985 13.7871 20.2733 12.9829 20.7435C12.6702 20.9145 12.3127 21 12 21ZM6.95151 2.14809C6.41539 2.14809 5.87926 2.23359 5.34314 2.44733C0.920125 4.2855 2.30511 8.68855 2.84123 10.0137C4.31557 13.6473 9.36406 17.2809 12 18.8198C14.5913 17.2809 19.6398 13.6473 21.1588 10.0137C21.6949 8.68855 23.1246 4.2855 18.6569 2.44733C17.6293 2.01985 16.5124 2.01985 15.4401 2.44733C14.77 2.70382 13.7871 3.30229 12.9829 4.54198C12.7595 4.84122 12.4021 5.05496 12.0447 5.05496C11.6426 5.05496 11.2852 4.88397 11.1065 4.54198C10.3023 3.30229 9.31938 2.74656 8.64923 2.44733C8.06843 2.23359 7.48763 2.14809 6.95151 2.14809Z" fill="white">
                              </path>
                            </svg>
                          </div>
                          <div className="video-list-info" >
                            <div className="video-list-title" >
                              <p className="dly-video-item-title-root mobile small"  >
                                <a href="/recipes/b6d788bd-b98f-4021-a158-63370573ec19" className="DlyLink title" >
                                  あると嬉しい！シンプルなきゅうりとワカ...
                                </a>
                              </p>
                            </div>  </div>
                        </div>
                      </li>
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