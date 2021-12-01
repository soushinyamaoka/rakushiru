import "../../../SpMake.css";
import Modal from "./SpEditModal";
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { RecipeModel, Recipes, Ingredients, Instructions } from '../../../module/RecipeModel';
import { Const } from '../../../module/Const';
import Service from '../../../module/Service';
import config from '../../../config.json';

let modelIns: RecipeModel
let service: Service
const TITLE = ["", "レシピタイトル", "写真", "キャッチコピー", "材料", "作り方"]
let file: File = null!
let modalModel: any = null!
let setModalModel: any = null!
let other: string = ""
let setOther: any = ""

function Init() {

  modelIns = new RecipeModel();
  service = new Service();
}
const SpMakeRecipes = () => {
  Init();

  const [recipeModel, setRecipeModel] = useState(modelIns.recipeModel);
  const [ingredientModel, setIngredientModel] = useState(modelIns.ingredientModel);
  const [instModel, setInstModel] = useState(modelIns.instModel);
  const [serving, setServing] = useState("");
  const [showModal, setShowModal] = useState(0);
  const [editTitle, setEditTitle] = useState("");
  const [localFile, setLocalFile] = useState("");
  const defaultImage = process.env.PUBLIC_URL + "/" + config.default.image;
  const history: any = useHistory();
  const params: any = useParams();
  if (params.id.length > 4) {
    recipeModel.RecipeId = params.id;
    modelIns.models.Recipes[0] = recipeModel
    service.reqParam.ReqCode = "searchRecipe";
    service.reqParam.Data = modelIns.models;
  }

  useEffect(() => {
    if (recipeModel.RecipeId.length > 4) {
      service.selectRecipe(service.reqParam).then(res => {
        const resData = res.data.Data
        console.log("resData")
        console.log(resData)
        setIngredientModel(resData.Ingredients)
        setRecipeModel(resData.Recipes[0])
        setInstModel(resData.Instructions)
        setServing(resData.Recipes[0].Serving)
      })
    }
  }, [])

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {

    if (!e.target.files) return

    const files: FileList = e.target.files
    if (files.length > 0) {

      file = files[0]
      var reader = new FileReader()
      reader.onload = (e) => {
        setLocalFile(String(e.target!.result))
      };
      reader.readAsDataURL(file)
    }
  }

  const ShowModal = (modalNo: number) => {

    if (modalNo === Const.RECIPE_TITLE_NO) {
      modalModel = recipeModel
      setModalModel = setRecipeModel
    } else if (modalNo === Const.RECIPE_INTRO_NO) {
      modalModel = recipeModel
      setModalModel = setRecipeModel
    } else if (modalNo === Const.RECIPE_INGRE_NO) {
      modalModel = ingredientModel
      setModalModel = setIngredientModel

    } else if (modalNo === Const.RECIPE_INST_NO) {
      modalModel = instModel
      setModalModel = setInstModel
    }

    setEditTitle(TITLE[modalNo]);
    setShowModal(modalNo);
  };

  const saveRecipe = () => {
    let recipe_copy: Recipes = recipeModel
    let inst_copy: Instructions[] = instModel.slice()
    let ing_copy: Ingredients[] = ingredientModel.slice()

    // TODO:要見直し
    // 画像ファイル名をセット
    recipe_copy.Image = recipe_copy.RecipeId + ".jpg"
    // 未登録の場合、初期値をセット
    if (inst_copy.length === 0) {
      inst_copy = [...inst_copy, modelIns.instModel[0]]
      inst_copy[0].RecipeId = recipe_copy.RecipeId
    }
    // 未登録の場合、初期値をセット
    if (ing_copy.length === 0) {
      ing_copy = [...ing_copy, modelIns.ingredientModel[0]]
      ing_copy[0].RecipeId = recipe_copy.RecipeId
    }

    // 保存用パラメータをセット
    modelIns.models.Recipes[0] = recipe_copy;
    modelIns.models.Instructions = inst_copy;
    modelIns.models.Ingredients = ing_copy;
    service.reqParam.ReqCode = "saveRecipe";
    service.reqParam.Data = modelIns.models;

    // 保存
    service.send(service.reqParam, file).then(res => {
      console.log("res")
      console.log(res)
      if (res.status !== 200 || (res.data && res.data.Status !== 0)) {
        alert("保存に失敗しました")
      } else {
        alert("保存しました")
      }
    })
  };

  const backPage = () => {
    history.push('/'); // 画面遷移
  };

  return (
    <>
      {(showModal !== 0) ? (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          model={modalModel}
          setModel={setModalModel}
          recipeId={recipeModel.RecipeId}
          editTitle={editTitle}
          rModel={recipeModel}
          setRModel={setRecipeModel}
        />
      ) : (
        <></>// showFlagがfalseの場合はModalは表示しない
      )}
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
            <div className="center content" id="update-photo">
              {(localFile) ? (
                <img width="100%" className="photo" id="recipe-main-photo" src={localFile} alt="Recipe edit placeholder"></img>
              ) : (!recipeModel.Image) ? (
                <img width="100%" className="photo" id="recipe-main-photo" src={defaultImage} alt="Recipe edit placeholder"></img>
              ) : (
                <img width="100%" className="photo" id="recipe-main-photo" src={service.getImagePath(recipeModel[RecipeModel.IMAGE])} alt="Recipe edit placeholder"></img>
              )}
              <div className="recipe-photo-update-form-container center">
                <input
                  className="file-field"
                  type="file"
                  style={{ top: "-320.516px", left: 0, height: 316 }}
                  onChange={(e) => { onFileChange(e) }}
                ></input>
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
                  <div className="IngredientListItemValue" onClick={(e) => { ShowModal(Const.RECIPE_INGRE_NO) }}>{recipeModel.Serving}  人前</div>
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

