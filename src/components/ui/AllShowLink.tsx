import Service from '../../module/Service';
import { RecipeModel } from '../../module/RecipeModel';
import { Link } from "react-router-dom";
import "../../SpMake.css";

const AllShowLink = (props) => {
  return (
    <>
      <Link
        className={props.className}
        to={{
          pathname: "/RecipeList/" + props.keyWord + "/"
        }}
      >すべて見る</Link>
    </>
  );
};

export default AllShowLink;