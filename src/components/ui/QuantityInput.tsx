import { RecipeModel } from '../../module/RecipeModel';
import { Const } from '../../module/Const';
import Service from '../../module/Service';
import "../../SpMake.css";

let service: Service
const QuantityInput = (props) => {
  return (
    <>
      <input
        className="text-field sortable-line-quantity ingredient-quantity-0 disable-invalid-character"
        placeholder={Const.PH_QUANTITY}
        defaultValue={props.model[RecipeModel.QUANTITY]}
        maxLength={20}
        onChange={(e) => service.changeValue(e, props.index, props.model, props.setModel, RecipeModel.QUANTITY)}
      ></input>
    </>
  );
};

export default QuantityInput;