import Service from '../../module/Service';
import "../../SpMake.css";

let service: Service = new Service();
const UpButton = (props) => {
  return (
    <>
      <button
        className="up-button"
        style={{ display: "inline-block" }}
        onClick={() => service.upRow(props.index, props.model, props.setModel)}
      >↑</button>
    </>
  );
};

export default UpButton;