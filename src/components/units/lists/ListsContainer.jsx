import ListPresenter from "./ListsPresenter";
import fakeData from "../../../assets/fakeData.json";

const ListsContainer = () => {
    console.log(fakeData);
    return <ListPresenter fakeData={fakeData} />;
};
export default ListsContainer;
