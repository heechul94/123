import AddForm from "components/commons/addForm/AddForm";
import ListContainer from "./list/ListContainer";
import Button from "components/commons/buttons/Button";

const ListsPresenter = ({
    data,
    onSubmitFanLettersHandler,
    isPickedMember,
    setIsPickedMember,
}) => {
    const MEMBERS = ["아이네", "징버거", "릴파", "주르르", "고세구", "비챤"];

    return (
        <main>
            <AddForm onSubmitFanLettersHandler={onSubmitFanLettersHandler} />
            <nav>
                {MEMBERS.map((member) => (
                    <Button
                        key={member}
                        text={member}
                        isPickedMember={isPickedMember}
                        setIsPickedMember={setIsPickedMember}
                    />
                ))}
            </nav>
            {data?.map((item) =>
                isPickedMember === item.writedTo ? (
                    <ListContainer key={item.id} item={item} />
                ) : null
            )}
        </main>
    );
};
export default ListsPresenter;
