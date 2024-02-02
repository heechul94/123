import { Link } from "react-router-dom";
import ListPresenter from "./ListPresenter";

const ListContainer = ({ item }) => {
  return (
    <Link to={`detail/${item.id}`}>
      <ListPresenter item={item} />
    </Link>
  );
};
export default ListContainer;
