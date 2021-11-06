import React, { useState, useRef } from 'react';
import { RecipeModel, Recipes, Ingredients, Instructions } from '../../module/RecipeModel';
import { Const } from '../../module/Const';
import "../../SpMake.css";

const SpEditModal = (props) => {

  if (!props.recipeModel.recipeId) {
    props.ingredientModel[0].OrderNo = 1
    props.instModel[0].OrderNo = 1
  }

  const [rModel, setRModel] = useState(props.recipeModel);
  const [mModel, setMModel] = useState(props.ingredientModel);
  const [iModel, setIModel] = useState(props.instModel);
  const recipeId: string = props.recipeModel.recipeId;
  const editTitle: string = props.editTitle;

  const saveData = () => {
    props.setRecipeModel(rModel);
    props.setIngredientModel(mModel);
    props.setInstModel(iModel);
    props.setShowModal(0);
  };

  const closeModal = () => {
    props.setShowModal(0);
  };
  const add = (model, setModel) => {
    const ingredient: Ingredients = {
      RecipeId: recipeId,
      OrderNo: model.length + 1,
      Name: '',
      Quantity: ''
    }
    setModel([...model, ingredient])
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
    const model_copy = model.slice()
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

  // 材料
  const IngredientRow = mModel.map((model, index) =>
    <>
      <div key={String(index)} className="ingredient-container">
        <div className="name">
          <input
            className="text-field sortable-line-name ingredient-name-0 disable-invalid-character"
            placeholder="例）豚肉"
            defaultValue={model[RecipeModel.NAME]}
            onChange={(e) => changeValue(e, index, mModel, setMModel, RecipeModel.NAME)}
          >
          </input>
        </div>
        <div className="quantity">
          <input
            className="text-field sortable-line-quantity ingredient-quantity-0 disable-invalid-character"
            placeholder="例）350g"
            defaultValue={model[RecipeModel.QUANTITY]}
            onChange={(e) => changeValue(e, index, mModel, setMModel, RecipeModel.QUANTITY)}
          ></input>
        </div>
      </div>
      <div className="control-area">
        <div className="delete-area">
          <button className="delete" onClick={() => delRow(index, iModel, setIModel)}>削除</button>
        </div>
        <div className="up-down-area">
          <button className="up-button" style={{ display: "inline-block" }} onClick={() => upRow(index, iModel, setIModel)}>↑</button>
        </div>
        <div className="up-down-area">
          <button className="down-button" onClick={() => downRow(index, iModel, setIModel)}>↓</button>
        </div>
      </div>
    </>
  );

  // 作り方
  const InstRow = iModel.map((model, index) =>
    <>
      <div key={String(index)} className="instructions-container">
        <textarea
          placeholder="作り方を入力してください"
          className="disable-invalid-character"
          defaultValue={model[RecipeModel.INSTRUCTIONS]}
          onChange={(e) => changeValue(e, index, iModel, setIModel, RecipeModel.DETAIL)}
        ></textarea>
        <div className="control-area">
          <div className="delete-area">
            <button className="delete" onClick={() => delRow(index, iModel, setIModel)}>削除</button>
          </div>
          <div className="up-down-area">
            <button className="up-button" style={{ display: "inline-block" }} onClick={() => upRow(index, iModel, setIModel)}>↑</button>
          </div>
          <div className="up-down-area">
            <button className="down-button" onClick={() => downRow(index, iModel, setIModel)}>↓</button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {(props.showModal !== 0) ? (
        <div id="modal-window" >
          <div className="edit-header">
            <div className="edit-control">
              <button className="edit-Button edit-Button--contained ">
                <div className="edit-Button-body edit-Button-body--contained"
                  onClick={closeModal}
                >キャンセル</div>
              </button>
            </div>
            <div className="edit-item-name">
              {editTitle}
            </div>
            <div className="edit-control">
              <button className="edit-Button edit-Button--contained">
                <div className="edit-Button-body edit-Button-body--contained"
                  onClick={(e) => { saveData() }}
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保存&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              </button>
            </div>
          </div>
          <div id="edit-main" className="edit-main">
            <div id="recipe-update-form" className="recipe-update-form">

              {/* タイトルを入力 */}
              {(props.showModal === Const.RECIPE_TITLE_NO) ? (
                <input
                  type="text"
                  placeholder="タイトルを入れる"
                  maxLength={20}
                  onChange={(e) => changeValue(e, 0, rModel, setRModel, RecipeModel.TITLE)}
                ></input>
                // キャッチコピーを入力
              ) : (props.showModal === Const.RECIPE_INTRO_NO) ? (
                <textarea
                  placeholder="キャッチコピーを入力してください"
                  className="disable-invalid-character"
                  maxLength={60}
                  onChange={(e) => changeValue(e, 0, rModel, setRModel, RecipeModel.INTRODUCTION)}
                ></textarea>
                // 材料を入力
              ) : (props.showModal === Const.RECIPE_INGRE_NO) ? (
                <>
                  <div className="ingredients">
                    {IngredientRow}
                  </div>
                  <div className="inner">
                    <div className="navi">
                      <div className="add-area">
                        <button
                          className="add"
                          onClick={() => add(mModel, setMModel)}
                        >材料を追加</button>
                      </div>
                    </div>
                  </div>
                </>
                // 作り方を入力
              ) : (props.showModal === Const.RECIPE_INST_NO) ? (
                <>
                  <div className="instructions">
                    {InstRow}
                  </div>
                  <div className="inner">
                    <div className="navi">
                      <div className="add-area">
                        <button
                          className="add"
                          onClick={() => add(iModel, setIModel)}
                        >材料を追加</button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>// showFlagがfalseの場合はModalは表示しない
      )}
    </>
  );
};

export default SpEditModal;