import { RecipeModel } from '../../module/RecipeModel';
import { Const } from '../../module/Const';
import Service from '../../module/Service';
import "../../SpMake.css";

let service: Service
const NameInput = (props) => {
  return( 
    <>
      <input
            ref={props.el}
            className="text-field sortable-line-name ingredient-name-0 disable-invalid-character"
            placeholder={Const.PH_NAME}
            defaultValue={props.model[RecipeModel.NAME]}
            maxLength={40}
            onChange={(e) => service.changeValue(e, props.index, props.model, props.setModel, RecipeModel.NAME)}
          >
          </input>
    </>
  );
};

export default NameInput;