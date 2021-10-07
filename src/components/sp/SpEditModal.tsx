import React, { useState, useRef } from 'react';
import "../../SpMake.css";

const SpEditModal = (props) => {
  const closeModal = () => {
    props.setShowModal(0);
  };
  const add = (model, setModel) => {
    setModel([...model, { index: model.length + 1, name: "", amount: "" }])
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

  const [materialModel, setMaterialModel] = useState(props.materialModel);
  const [recipeModel, setRecipeModel] = useState(props.recipeModel);
  const [howModel, setHowModel] = useState(props.howModel);

  const MaterialRow = materialModel.map((model, index) =>
    <>
      <tr key={String(index)}>
        <td className="name">
          <input
            className="text-field sortable_line_name ingredient_name_0 disable_invalid_character"
            placeholder="例）豚肉"
            value={model.name}>
          </input>
          <div className="delete_container">
            <a className="delete" onClick={delRow.bind(this, index, materialModel, setMaterialModel)}>削除</a>
          </div>
          <div className="position_change_container">
            <a className="change_postion higher button action min" style={{ display: "inline-block" }} onClick={upRow.bind(this, index, materialModel, setMaterialModel)}>↑</a>
            <a className="change_postion lower button action min" onClick={downRow.bind(this, index, materialModel, setMaterialModel)}>↓</a>
          </div>
        </td>
        <td className="quantity">
          <input
            className="text-field sortable_line_quantity ingredient_quantity_0 disable_invalid_character"
            placeholder="例）350g"
            value={model.amount}
          ></input>
        </td>
      </tr>
    </>
  );

  const HowRow = howModel.map((model, index) =>
    <>
      <tr key={String(index)}>
        <td className="name">
          <textarea 
            placeholder="作り方を入力してください"
            className="disable_invalid_character"
            value = {model.how}
          ></textarea>
          <div className="delete_container">
            <a className="delete" onClick={delRow.bind(this, index, howModel, setHowModel)}>削除</a>
          </div>
          <div className="position_change_container">
            <a className="change_postion higher button action min" style={{ display: "inline-block" }} onClick={upRow.bind(this, index, howModel, setHowModel)}>↑</a>
            <a className="change_postion lower button action min" onClick={downRow.bind(this, index, howModel, setHowModel)}>↓</a>
          </div>
        </td>
      </tr>
    </>
  );

  return (
    <>
      {(props.showModal !== 0) ? (
        <div id="modal_window" >
          <div id="recipe_update_form" >
            <div className="inner" >
              <div id="edit_recipe_step_form" className="recipe_update_form">
                <div className="navi">
                  <div className="cancel">
                    <a className="edit_button dismiss_modal_window button action min" onClick={closeModal}>キャンセル</a>
                  </div>
                  <div className="edit_item_name">
                    作り方2
                  </div>
                  <div className="save_and_lenth_check">
                    <div id="counter" style={{ color: "rgb(153, 153, 153)" }}>60</div>
                    <input type="submit" name="commit" value="保存" className="save_button button attention min" ></input>
                  </div>
                </div>
                {(props.showModal === 1) ? (
                  <input type="text" placeholder="タイトルを入れる" maxLength={20}></input>

                ) : (props.showModal === 2) ? (
                  <textarea placeholder="作り方を入力してください" className="disable_invalid_character" maxLength={60}></textarea>

                ) : (props.showModal === 3) ? (
                  <>
                    <table className="ingredients">
                      <tbody>
                        {MaterialRow}
                      </tbody>
                    </table>
                    <div className="inner">
                      <div className="navi">
                        <div className="cancel">
                          <a className="edit_button dismiss_modal_window button action min" onClick={closeModal}>キャンセル</a>
                        </div>
                        <div className="create">
                          <a className="edit_button add_ingredient button action min" onClick={add.bind(this, materialModel, setMaterialModel)}>材料を追加</a>
                        </div>
                        <div className="save_and_lenth_check">
                          <input value="保存" className="save_button button attention min" ></input>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (props.showModal === 4) ? (
                  <>
                    <table className="ingredients">
                      <tbody>
                        {HowRow}
                      </tbody>
                    </table>
                    <div className="inner">
                      <div className="navi">
                        <div className="cancel">
                          <a className="edit_button dismiss_modal_window button action min" onClick={closeModal}>キャンセル</a>
                        </div>
                        <div className="create">
                        <a className="edit_button add_ingredient button action min" onClick={add.bind(this, howModel, setHowModel)}>材料を追加</a>
                        </div>
                        <div className="save_and_lenth_check">
                          <input value="保存" className="save_button button attention min" ></input>
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
        </div>
      ) : (
        <></>// showFlagがfalseの場合はModalは表示しない
      )}
    </>
  );
};

export default SpEditModal;