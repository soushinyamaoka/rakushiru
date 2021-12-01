import Service from '../../module/Service';
import "../../SpMake.css";

let service: Service = new Service();
const DownButton = (props) => {
  return (
    <>
      <button
        className="down-button"
        onClick={() => service.downRow(props.index, props.model, props.setModel)}
      >↓</button>
    </>
  );
};

export default DownButton;