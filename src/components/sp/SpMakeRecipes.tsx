import "../../SpMake.css";
import Modal from "./SpEditModal";
import React, { useState, useEffect } from 'react';
import RecipeModel from '../../module/RecipeModel';
import Service from '../../module/Service';
import { convertCompilerOptionsFromJson } from "typescript";


const SpMakeRecipes = () => {

  const modelIns = new RecipeModel().getInstance()
  const model = modelIns.getModel();
  const [materialModel, setMaterialModel] = useState(model.material);
  const [recipeModel, setRecipeModel] = useState(model.recipeInfo);
  const [howModel, setHowModel] = useState(model.how);
  const [showModal, setShowModal] = useState(0);
  const defaultImage = process.env.PUBLIC_URL + "/sp_up_image.png";
  const service = new Service(model);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {

    if (!e.target.files) return

    const files: FileList = e.target.files
    if (files.length > 0) {

      var file = files[0]
      var reader = new FileReader()
      const model_copy = { ...recipeModel }
      reader.onload = (e) => {
        model_copy.imgae = String(e.target!.result)
        setRecipeModel(model_copy)
      };
      reader.readAsDataURL(file)

    }
  }

  const ShowModal = (modalNo: number) => {
    setShowModal(modalNo);
  };

  const saveRecipe = () => {
    service.requData.reqCode = "";
    model.recipeInfo = recipeModel
    model.material = materialModel
    model.recipeInfo = recipeModel
    service.requData.data = model;
    service.send(service.requData);
  };

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        materialModel={materialModel}
        setMaterialModel={setMaterialModel}
        recipeModel={recipeModel}
        setRecipeModell={setRecipeModel}
        howModel={howModel}
        setHowModel={setHowModel}
      />
      <div className="recipe_edit">
        <div className="recipe_edit_container" id="edit_main">
          <div className="sblock">
            <div className="title">レシピタイトル</div>
            <a className="open_modal_window" onClick={(e) => {ShowModal(1)}}>
              <div className="content" id="title">
                {recipeModel.title}
              </div>
            </a>
            <div className="title">写真</div>
            <div className="center content" data-thumbnail-path="https://assets.cpcdn.com/assets/device/recipe_edit_placeholder.png?9c42ea49292fad568d6756473f63a910476887d02aabf0f147e5a5a84e27fa3f" id="update_photo">
              {(recipeModel.imgae) ? (
                <img width="100%" className="photo" id="recipe_main_photo" src={recipeModel.imgae} alt="Recipe edit placeholder"></img>
              ) : (
                <img width="100%" className="photo" id="recipe_main_photo" src={defaultImage} alt="Recipe edit placeholder"></img>
              )}
              <div className="recipe_photo_update_form_container center">
                <input className="file_field" type="file" name="recipe[uploaded_photo]" id="recipe_uploaded_photo" style={{ top: "-320.516px", left: 0, height: 316 }}
                  onChange={(e) => { onFileChange(e) }}></input>
              </div>
            </div>
            <div className="title">
              キャッチコピー
            </div>
            <a className="open_modal_window">
              <div className="content" id="description">
                {(recipeModel.info) ? (
                  <div className="guide" onClick={(e) => {ShowModal(2)}}>{recipeModel.info}</div>
                ) : (
                  <div className="guide" onClick={(e) => {ShowModal(2)}}>タップして入力する</div>
                )}
              </div>
            </a>
            <div className="title">
              材料
            </div>
            <a className="open_modal_window">
              {(materialModel.length) ? (
                <ul className="MaterialList" >
                  {materialModel.map((model) =>
                    <li className="MaterialListItem" >
                      <div className="MaterialListItemValue" >
                        {model.name}
                      </div>
                      <div className="MaterialListItemValue" >{model.amount}</div>
                    </li>
                  )}
                </ul>
              ) : (
                <div className="content" id="description">
                  <div className="guide" onClick={(e) => {ShowModal(3)}}>タップして入力する</div>
                </div>
              )}
            </a>
            <div className="title">
              作り方
            </div>
            <a className="open_modal_window">
              {(howModel.length) ? (
                <ul className="HowList" >
                  {howModel.map((model) =>
                    <li className="HowListItem" >
                      <span className="HowListItemOrder" >{model.index}</span>
                      <div className="HowListListItemBody" >{model.how}</div>
                    </li>
                  )}
                </ul>
              ) : (
                <div className="content" id="description">
                  <div className="guide" onClick={(e) => {ShowModal(4)}}>タップして入力する</div>
                </div>
              )}
            </a>
          </div>
        </div>
        <div className="finish_edit">
          <button className="dly-Button dly-Button--contained ">
            <div className="dly-Button-body dly-Button-body--contained">キャンセル</div>
          </button>
          <button className="dly-Button dly-Button--contained">
            <div className="dly-Button-body dly-Button-body--contained" onClick={(e) => {saveRecipe()}}>保存</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default SpMakeRecipes;

