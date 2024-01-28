import AddForm from "components/commons/addForm/AddForm";
import ListContainer from "./list/ListContainer";

const ListsPresenter = ({ fakeData }) => {
    return (
        <main>
            <AddForm />
            {fakeData.map((item) => (
                <ListContainer key={item.id} item={item} />
            ))}
        </main>
    );
};
export default ListsPresenter;
