import ListPresenter from "./ListsPresenter";
import fakeData from "../../../assets/fakeData.json";

const ListsContainer = () => {
    return <ListPresenter fakeData={fakeData} />;
};
export default ListsContainer;
