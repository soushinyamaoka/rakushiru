import "../../SpMake.css";
import Modal from "./SpEditModal";
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import { RecipeModel } from '../../module/RecipeModel';
import { Const } from '../../module/Const';
import Service from '../../module/Service';
import config from '../../config.json';

let modelIns: RecipeModel
let service: Service
const TITLE = ["", "レシピタイトル", "写真", "キャッチコピー", "材料", "作り方"]

function Init() {

  modelIns = new RecipeModel();
  service = new Service();
}
const SpMakeRecipes = () => {
  Init();

  const [recipeModel, setRecipeModel] = useState(modelIns.recipeModel);
  const [ingredientModel, setIngredientModel] = useState(modelIns.ingredientModel);
  const [instModel, setInstModel] = useState(modelIns.instModel);
  const [showModal, setShowModal] = useState(0);
  const [editTitle, setEditTitle] = useState("");
  const defaultImage = process.env.PUBLIC_URL + "/" + config.default.image;
  const service = new Service();
  const history: any = useHistory();
  const location: any = useLocation();
  if (location.state && location.state.recipeId) {
    recipeModel.RecipeId = location.state.recipeId;
    service.reqParam.Data = recipeModel;
  }

  useEffect(() => {
    if (service.reqParam.Data && service.reqParam.Data.Recipes.RecipeId) {
      service.send(service.reqParam).then(res => {
        const resData = res.data.Data
        setIngredientModel(resData.Ingredients)
        setRecipeModel(resData.Recipes[0])
        setInstModel(resData.Instructions)
      })
    }
  }, [])

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {

    if (!e.target.files) return

    const files: FileList = e.target.files
    if (files.length > 0) {

      var file = files[0]
      var reader = new FileReader()
      const model_copy = { ...recipeModel }
      reader.onload = (e) => {
        model_copy.Image = String(e.target!.result)
        setRecipeModel(model_copy)
      };
      reader.readAsDataURL(file)

    }
  }

  const ShowModal = (modalNo: number) => {
    setEditTitle(TITLE[modalNo]);
    setShowModal(modalNo);
  };

  const saveRecipe = () => {
    service.reqParam.ReqCode = "saveRecipe";
    modelIns.models.Recipes[0] = recipeModel;
    modelIns.models.Instructions = instModel;
    modelIns.models.Ingredients = ingredientModel;
    service.reqParam.Data = modelIns.models;
    service.send(service.reqParam).then(res => {
      alert("保存しました")
    })
  };

  const backPage = () => {
    history.push('/'); // 画面遷移
  };

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        ingredientModel={ingredientModel}
        setIngredientModel={setIngredientModel}
        recipeModel={recipeModel}
        setRecipeModel={setRecipeModel}
        instModel={instModel}
        setInstModel={setInstModel}
        editTitle={editTitle}
      />
      <div className="recipe-edit">
        <div className="recipe-edit-container" id="edit-main">
          <div className="sblock">
            {/* レシピタイトル */}
            <div className="title">{TITLE[Const.RECIPE_TITLE_NO]}</div>
            <div className="open-modal-window">
              {(!recipeModel.Title) ? (
                <div className="content description">
                  <div className="guide" onClick={(e) => { ShowModal(Const.RECIPE_TITLE_NO) }}>タップして入力する</div>
                </div>
              ) : (
                <div className="introduction">
                  <div className="guide" onClick={(e) => { ShowModal(Const.RECIPE_TITLE_NO) }}>{recipeModel.Title}</div>
                </div>
              )}
            </div>
            {/* 写真 */}
            <div className="title">{TITLE[Const.RECIPE_IMAGE]}</div>
            <div className="center content" data-thumbnail-path="https://assets.cpcdn.com/assets/device/recipe-edit-placeholder.png?9c42ea49292fad568d6756473f63a910476887d02aabf0f147e5a5a84e27fa3f" id="update-photo">
              {(!recipeModel.Image) ? (
                <img width="100%" className="photo" id="recipe-main-photo" src={defaultImage} alt="Recipe edit placeholder"></img>
              ) : (
                <img width="100%" className="photo" id="recipe-main-photo" src={recipeModel.Image} alt="Recipe edit placeholder"></img>
              )}
              <div className="recipe-photo-update-form-container center">
                <input className="file-field" type="file" name="recipe[uploaded-photo]" id="recipe-uploaded-photo" style={{ top: "-320.516px", left: 0, height: 316 }}
                  onChange={(e) => { onFileChange(e) }}></input>
              </div>
            </div>
            {/* キャッチコピー */}
            <div className="title">
              {TITLE[Const.RECIPE_INTRO_NO]}
            </div>
            <div className="open-modal-window">
              <div className="content description">
                {(!recipeModel.Introduction) ? (
                  <div className="guide" onClick={(e) => { ShowModal(Const.RECIPE_INTRO_NO) }}>タップして入力する</div>
                ) : (
                  <div className="guide" onClick={(e) => { ShowModal(Const.RECIPE_INTRO_NO) }}>{recipeModel.Introduction}</div>
                )}
              </div>
            </div>
            {/* 材料 */}
            <div className="title">
              {TITLE[Const.RECIPE_INGRE_NO]}
            </div>
            <div className="open-modal-window">
              {(ingredientModel.length === 1 && !ingredientModel[0].Name && !ingredientModel[0].Quantity) ? (
                <div className="content description">
                  <div className="guide" onClick={(e) => { ShowModal(Const.RECIPE_INGRE_NO) }}>タップして入力する</div>
                </div>
              ) : (
                <ul className="IngredientList" >
                  {ingredientModel.map((model) =>
                    <li key={model.OrderNo} className="IngredientListItem" onClick={(e) => { ShowModal(Const.RECIPE_INGRE_NO) }}>
                      <div className="IngredientListItemValue">
                        <span className="HowListItemOrder" >{model.OrderNo}</span>
                        {model.Name}
                        </div>
                      <div className="IngredientListItemValue" >{model.Quantity}</div>
                    </li>
                  )}
                </ul>
              )}
            </div>
            {/* 作り方 */}
            <div className="title">
              {TITLE[Const.RECIPE_INST_NO]}
            </div>
            <div className="open-modal-window">
              {(instModel.length === 1 && !instModel[0].Detail) ? (
                <div className="content description">
                  <div className="guide" onClick={(e) => { ShowModal(Const.RECIPE_INST_NO) }}>タップして入力する</div>
                </div>
              ) : (
                <ul className="HowList" >
                  {instModel.map((model) =>
                    <li key={model.OrderNo} className="HowListItem" onClick={(e) => { ShowModal(Const.RECIPE_INST_NO) }}>
                      <span className="HowListItemOrder" >{model.OrderNo}</span>
                      <div className="HowListListItemBody" >{model.Detail}</div>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="finish-edit">
          <button className="edit-Button edit-Button--contained ">
            <div className="edit-Button-body edit-Button-body--contained"
              onClick={(e) => { backPage() }}
            >キャンセル</div>
          </button>
          <button className="edit-Button edit-Button--contained">
            <div
              className="edit-Button-body edit-Button-body--contained"
              onClick={(e) => { saveRecipe() }}
            >保存</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default SpMakeRecipes;

