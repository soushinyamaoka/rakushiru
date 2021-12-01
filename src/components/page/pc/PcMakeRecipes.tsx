import "../../../Make.css";
import Header from './Header';
import SideBar from './SideBar';
import { Const } from '../../../module/Const';
import Service from '../../../module/Service';
import config from '../../../config.json';
import React, { useState } from 'react';
import { RecipeModel, Recipes, Ingredients, Instructions } from '../../../module/RecipeModel';

let modelIns: RecipeModel
let service: Service
let file: File = null!

function Init() {

  modelIns = new RecipeModel();
  service = new Service();
}

const PcMakeRecipes = () => {

  Init();
  const [recipeModel, setRecipeModel] = useState(modelIns.recipeModel);
  const [ingredientModel, setIngredientModel] = useState(modelIns.ingredientModel);
  const [instModel, setInstModel] = useState(modelIns.instModel);
  const [editTitle, setEditTitle] = useState("");
  const defaultImage = process.env.PUBLIC_URL + "/" + config.default.image;
  const service = new Service();
  const recipeId: string = "";
  // const recipeId: string = recipeModel[0].recipeId;


  // TODO：要共通化-------
  const saveRecipe = () => {
    service.reqParam.ReqCode = "saveRecipe";
    const model_copy = recipeModel
    model_copy.Image = "image"
    modelIns.models.Recipes[0] = model_copy;
    modelIns.models.Instructions = instModel;
    modelIns.models.Ingredients = ingredientModel;
    service.reqParam.Data = modelIns.models;

    service.send(service.reqParam, file).then(res => {
      alert("保存しました")
    })
  };

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {

    if (!e.target.files) return

    const files: FileList = e.target.files
    if (files.length > 0) {

      file = files[0]
      var reader = new FileReader()
      const model_copy = { ...recipeModel }
      reader.onload = (e) => {
        console.log("e.target!.result")
        console.log(e.target!.result)
        model_copy.Image = String(e.target!.result)
        setRecipeModel(model_copy)
      };
      reader.readAsDataURL(file)
      // service.reqParam.ReqCode = 'saveImage'
      // service.handleSubmit(service.reqParam, files)

    }
  }

  const add = (model, setModel, keyNo) => {
    console.log(model)
    if (keyNo === Const.RECIPE_INGRE_NO) {
      const ingredient: Ingredients = {
        RecipeId: recipeId,
        OrderNo: model.length + 1,
        // OrderNo: maxIngOrder + 1,
        Name: '',
        Quantity: ''
      }
      setModel([...model, ingredient])
    } else {
      const instructions: Instructions = {
        RecipeId: '',
        OrderNo: model.length + 1,
        // OrderNo: maxInstOrder + 1,
        Detail: ''
      }
      setModel([...model, instructions])
    }


    console.log("追加")
    console.log(model)
  };

  const upRow = (n, model, setModel) => {
    if (n - 1 < 0) return
    const model_copy = model.slice()
    model_copy.splice(n - 1, 2, model_copy[n], model_copy[n - 1])
    setModel(model_copy)

  };

  const downRow = (n, model, setModel) => {
    if (n + 2 > model.length) return
    const model_copy = model.slice()
    model_copy.splice(n, 2, model_copy[n + 1], model_copy[n])
    setModel(model_copy)
  };

  const delRow = (n, model, setModel) => {
    if (model.length === 1) return
    let model_copy = model.slice()
    model_copy.splice(n, 1)
    setModel(model_copy)
  };

  const changeValue = (e: React.ChangeEvent<any>,
    index: number, model: any, setModel: any, key: string) => {
    const value = e.target.value;
    if (model.length) {
      const model_copy = model.slice()
      model_copy[index][key] = value
      setModel(model_copy)
    } else {
      const model_copy = model
      model_copy[key] = value
      setModel(model_copy)
    }
  };
  // ------------------

  // TODO：要共通化
  // 材料
  const IngredientRow = ingredientModel.map((model, index) =>
    <>
      <div key={String(model[RecipeModel.ORDER_NO])} className="ingredient-container">
        <div className="name">
          <input
            className="text-field sortable-line-name ingredient-name-0 disable-invalid-character"
            placeholder={Const.PH_NAME}
            defaultValue={model[RecipeModel.NAME]}
            maxLength={40}
            onChange={(e) => changeValue(e, index, ingredientModel, setIngredientModel, RecipeModel.NAME)}
          >
          </input>
        </div>
        <div className="quantity">
          <input
            className="text-field sortable-line-quantity ingredient-quantity-0 disable-invalid-character"
            placeholder={Const.PH_QUANTITY}
            defaultValue={model[RecipeModel.QUANTITY]}
            maxLength={20}
            onChange={(e) => changeValue(e, index, ingredientModel, setIngredientModel, RecipeModel.QUANTITY)}
          ></input>
        </div>
      </div>
      <div className="control-area">
        <div className="delete-area">
          <button
            className="delete"
            onClick={() => delRow(index, ingredientModel, setIngredientModel)}
          >削除</button>
        </div>
        <div className="up-down-area">
          <button
            className="up-button"
            style={{ display: "inline-block" }}
            onClick={() => upRow(index, ingredientModel, setIngredientModel)}
          >↑</button>
        </div>
        <div className="up-down-area">
          <button
            className="down-button"
            onClick={() => downRow(index, ingredientModel, setIngredientModel)}
          >↓</button>
        </div>
      </div>
    </>
  );

  // 作り方
  const InstRow = instModel.map((model, index) =>
    <>
      <div key={String(model[RecipeModel.ORDER_NO])} className="instructions-container">
        <textarea
          placeholder={Const.PH_DETAIL}
          className="disable-invalid-character"
          defaultValue={model[RecipeModel.DETAIL]}
          maxLength={120}
          onChange={(e) => changeValue(e, index, instModel, setInstModel, RecipeModel.DETAIL)}
        ></textarea>
        <div className="control-area">
          <div className="delete-area">
            <button
              className="delete"
              onClick={() => delRow(index, instModel, setInstModel)}
            >削除</button>
          </div>
          <div className="up-down-area">
            <button
              className="up-button"
              style={{ display: "inline-block" }}
              onClick={() => upRow(index, instModel, setInstModel)}
            >↑</button>
          </div>
          <div className="up-down-area">
            <button
              className="down-button"
              onClick={() => downRow(index, instModel, setInstModel)}
            >↓</button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div id="main_app">
      <Header />
      <div className="make-main">
        <div className="make-main-secondary">
          <div className="make-explanation-photo">
            <div className="make-explanation">
              <div className="make-recipe-inputarea input_box">
                <label>料理名</label>
                <div id="input_box">
                  <input
                    type="text"
                    placeholder={Const.PH_TITLE}
                    defaultValue={recipeModel[RecipeModel.TITLE]}
                    maxLength={20}
                    onChange={(e) => changeValue(e, 0, recipeModel, setRecipeModel, RecipeModel.TITLE)}
                  ></input>
                </div>
              </div>
              <div className="make-recipe-inputarea area_box">
                <label>キャッチコピー</label>
                <div id="area_box">
                  <textarea
                    className="editor_field"
                    placeholder={Const.PH_INTRODUCTION}
                    defaultValue={recipeModel[RecipeModel.DETAIL]}
                    maxLength={60}
                    onChange={(e) => changeValue(e, 0, recipeModel, setRecipeModel, RecipeModel.INTRODUCTION)}
                  >
                  </textarea>
                </div>
              </div>
            </div>
            <div className="clickable_image_uploader_wrapper" data-blank-image="https://assets.cpcdn.com/assets/themes/recipe/blank.png?83b7514a3fee402c0ec13b51dee90d18adbbfd1a79b556bf060fe7735791bc2f" id="recipe_photo_wrapper">
              <div id="recipe_image_form" className="uploader_form" >
                {(!recipeModel.Image) ? (
                  <img
                    alt=""
                    id="recipe-photo"
                    className="uploader"
                    src={defaultImage}>
                  </img>
                ) : (
                  <img
                    alt=""
                    id="recipe-photo"
                    className="uploader"
                    src={recipeModel.Image}>
                  </img>
                )}
                <div className="file_holder">
                  <input
                    className="file_field uploader_input"
                    id="recipe_image_uploader"
                    size={0}
                    type="file"
                    style={{ height: 383, width: 280 }}
                    onChange={(e) => { onFileChange(e) }}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="make-material-how">
            <div className="make-material">
              <label>材料</label>
              <div className="pc-add-area">
                <button
                  className="add"
                  onClick={() => add(ingredientModel, setIngredientModel, Const.RECIPE_INGRE_NO)}
                >材料を追加</button>
              </div>
              {IngredientRow}
            </div>
            <div className="pc-instructions">
              <label>作り方</label>
              <div className="pc-add-area">
                <button
                  className="add"
                  onClick={() => add(instModel, setInstModel, Const.RECIPE_INST_NO)}
                >作り方を追加</button>
              </div>
              {InstRow}
            </div>
          </div>
          <div className="pc-edit-control">
            <button className="edit-Button edit-Button--contained">
              <div className="edit-Button-body edit-Button-body--contained"
                onClick={(e) => { saveRecipe() }}
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保存&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </button>
          </div>
        </div>
        <SideBar />
      </div>
    </div>
  );
}

export default PcMakeRecipes;