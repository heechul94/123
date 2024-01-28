import AddForm from "components/commons/addForm/AddForm";
import ListContainer from "./list/ListContainer";
import Button from "components/commons/buttons/Button";

const ListsPresenter = ({ fakeData, color, onClickMemberButtonHandler }) => {
    const MEMBERS = ["아이네", "징버거", "릴파", "주르르", "고세구", "비챤"];
    return (
        <main>
            <AddForm />
            <nav>
                {MEMBERS.map((member) => (
                    <Button
                        key={member}
                        id={member}
                        text={member}
                        color={color}
                        onClickMemberButtonHandler={onClickMemberButtonHandler}
                    />
                ))}
            </nav>
            {fakeData.map((item) => (
                <ListContainer key={item.id} item={item} />
            ))}
        </main>
    );
};
export default ListsPresenter;
