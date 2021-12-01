import React, { useState, useEffect, useRef } from 'react';
import { RecipeModel, Recipes, Ingredients, Instructions } from '../../../module/RecipeModel';
import { Const } from '../../../module/Const';
import Service from '../../../module/Service';
import NameInput from '../../ui/NameInput';
import QuantityInput from '../../ui/QuantityInput';
import DetailTextarea from '../../ui/DetailTextarea';
import DeleteButton from '../../ui/DeleteButton';
import UpButton from '../../ui/UpButton';
import AddButton from '../../ui/AddButton';
import DownButton from '../../ui/DownButton';
import ServingInput from '../../ui/ServingInput';

import ReactDOM from "react-dom";
import "../../../SpMake.css";

let service: Service = new Service()
const SpEditModal = (props) => {

  const [model, setModel] = useState(props.model);
  const [rModel, setRModel] = useState(props.rModel);
  const recipeId: string = props.recipeId;
  // let len: number = 0
  // if (props.model.length) {

  // }
  const refs: any = useRef(Array.from({ length: props.model.length }, a => React.createRef()));
  console.log("model")
  console.log(model)

  const rootEl = document.getElementById('root')!;
  const editTitle: string = props.editTitle;

  const saveData = () => {
    for (let i = 0; i < model.length; i++) {
      model[i][RecipeModel.ORDER_NO] = i + 1
    }
    props.setModel(model);
    props.setShowModal(0);
  };

  const closeModal = () => {
    document.body.style.overflowY = "";
    props.setModel(props.model);
    if (props.showModal === Const.RECIPE_INGRE_NO) {
      props.setRModel(rModel)
    }
    props.setShowModal(0);
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    const node: any = refs.current;
    console.log("node")
    console.log(node)
    console.log(node[0])
    if (node && node[0] && node[0].current) {

      node[0].current.focus();
    }
  }, [])

  return (ReactDOM.createPortal(
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
                  placeholder={Const.PH_TITLE}
                  defaultValue={model[RecipeModel.TITLE]}
                  maxLength={20}
                  onChange={(e) => service.changeValue(e, 0, model, setModel, RecipeModel.TITLE)}
                ></input>
                // キャッチコピーを入力
              ) : (props.showModal === Const.RECIPE_INTRO_NO) ? (
                <textarea
                  placeholder={Const.PH_INTRODUCTION}
                  className="disable-invalid-character"
                  defaultValue={model[RecipeModel.DETAIL]}
                  maxLength={60}
                  onChange={(e) => service.changeValue(e, 0, model, setModel, RecipeModel.INTRODUCTION)}
                ></textarea>
                // 材料を入力
              ) : (props.showModal === Const.RECIPE_INGRE_NO) ? (
                <>
                  <div className="ingredients">
                    <ServingInput
                      el={refs.current[0]}
                      model={rModel}
                      setModel={setRModel}
                    ></ServingInput>
                    {React.Children.toArray(model.map((model, index) =>
                      <>
                        <div key={String(model[RecipeModel.ORDER_NO])} className="ingredient-container">
                          <div className="name">
                            <NameInput
                              model={model}
                              setModel={setModel}
                              index={index}
                            ></NameInput>
                          </div>
                          <div className="quantity">
                            <QuantityInput
                              model={model}
                              setModel={setModel}
                              index={index}
                            ></QuantityInput>
                          </div>
                        </div>
                        <div className="control-area">
                          <div className="delete-area">
                            <DeleteButton
                              model={model}
                              setModel={setModel}
                              index={index}
                            ></DeleteButton>
                          </div>
                          <div className="up-down-area">
                            <UpButton
                              model={model}
                              setModel={setModel}
                              index={index}
                            ></UpButton>
                          </div>
                          <div className="up-down-area">
                            <DownButton
                              model={model}
                              setModel={setModel}
                              index={index}
                            ></DownButton>
                          </div>
                        </div>
                      </>
                    ))}

                  </div>
                  <div className="inner">
                    <div className="navi">
                      <div className="add-area">
                        <AddButton
                          model={model}
                          setModel={setModel}
                          recipeId={recipeId}
                        ></AddButton>
                      </div>
                    </div>
                  </div>
                </>
                // 作り方を入力
              ) : (props.showModal === Const.RECIPE_INST_NO) ? (
                <>
                  <div className="instructions">
                    {React.Children.toArray(model.map((model, index) =>
                      <>
                        <div key={String(model[RecipeModel.ORDER_NO])} className="instructions-container">
                          <DetailTextarea
                            el={refs.current[index]}
                            model={model}
                            setModel={setModel}
                            index={index}
                          ></DetailTextarea>
                          <div className="control-area">
                            <div className="delete-area">
                              <DeleteButton
                                model={model}
                                setModel={setModel}
                                index={index}
                              ></DeleteButton>
                            </div>
                            <div className="up-down-area">
                              <UpButton
                                model={model}
                                setModel={setModel}
                                index={index}
                              ></UpButton>
                            </div>
                            <div className="up-down-area">
                              <DownButton
                                model={model}
                                setModel={setModel}
                                index={index}
                              ></DownButton>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                  <div className="inner">
                    <div className="navi">
                      <div className="add-area">
                        <AddButton
                          model={model}
                          setModel={setModel}
                          recipeId={recipeId}
                        ></AddButton>
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
    </>,
    rootEl)
  );
};

export default SpEditModal;