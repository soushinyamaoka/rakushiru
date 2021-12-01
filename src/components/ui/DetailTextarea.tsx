import { RecipeModel } from '../../module/RecipeModel';
import { Const } from '../../module/Const';
import Service from '../../module/Service';
import "../../SpMake.css";

let service: Service
const DetailTextarea = (props) => {
  return (
    <>
      <textarea
        ref={props.el}
        placeholder={Const.PH_DETAIL}
        className="disable-invalid-character"
        defaultValue={props.model[RecipeModel.DETAIL]}
        maxLength={120}
        onChange={(e) => service.changeValue(e, props.index, props.model, props.setModel, RecipeModel.DETAIL)}
      ></textarea>
    </>
  );
};

export default DetailTextarea;