import "../../SpMake.css";
import Modal from "./SpEditModal";
import React, { useState, useEffect } from 'react';
import RecipeModel from '../../module/RecipeModel';



const SpMakeRecipes = () => {

  const [imageData, setImageData] = useState(process.env.PUBLIC_URL + "/sp_up_image.png");
  const [materialModel, setMaterialModel] = useState(new RecipeModel().materialModel);
  const [recipeModel, setRecipeModel] = useState(new RecipeModel().recipeModel);
  const [howModel, setHowModel] = useState(new RecipeModel().howModel);
  const [showModal, setShowModal] = useState(0);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {

    if (!e.target.files) return

    const files: FileList = e.target.files
    if (files.length > 0) {

      var file = files[0]
      var reader = new FileReader()
      reader.onload = (e) => {

        setImageData(String(e.target!.result))
      };
      reader.readAsDataURL(file)

    } else {

      setImageData(process.env.PUBLIC_URL + "/sp_up_image.png")
    }

  }

  const ShowModal = (modalNo: number) => {
    setShowModal(modalNo);
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
      <div
        className="recipe recipe_edit"
      >
        <div
          className="recipe_edit_container"
          id="edit_main"
        >
          <div className="sblock">
            <div className="title">レシピタイトル</div>
            <a className="open_modal_window"  onClick={ShowModal.bind(this, 1)}>
              <div className="content" id="title">
                test４
              </div>
            </a>
            <div className="title">写真</div>
            <div className="center content" data-thumbnail-path="https://assets.cpcdn.com/assets/device/recipe_edit_placeholder.png?9c42ea49292fad568d6756473f63a910476887d02aabf0f147e5a5a84e27fa3f" id="update_photo">
              <img width="100%" className="photo" id="recipe_main_photo" src={imageData} alt="Recipe edit placeholder"></img>
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
                <div className="guide" onClick={ShowModal.bind(this, 2)}>タップして入力する</div>
              </div>
            </a>
            <div className="title">
              材料
            </div>
            <a className="open_modal_window">
              <div className="content" id="description">
                <div className="guide" onClick={ShowModal.bind(this, 3)}>タップして入力する</div>
              </div>
            </a>
            <div className="title">
              作り方
            </div>
            <a className="open_modal_window">
              <div className="content" id="description">
                <div className="guide" onClick={ShowModal.bind(this, 4)}>タップして入力する</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpMakeRecipes;

