import AddForm from "components/commons/addForm/AddForm";
import ListContainer from "./list/ListContainer";
import MemberButton from "components/commons/buttons/MemberButton";

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
                    <MemberButton
                        key={member}
                        text={member}
                        isPickedMember={isPickedMember}
                        setIsPickedMember={setIsPickedMember}
                    />
                ))}
            </nav>
            <ul>
                {data?.map((item) =>
                    isPickedMember === item.writedTo ? (
                        <ListContainer key={item.id} item={item} />
                    ) : null
                )}
            </ul>
        </main>
    );
};
export default ListsPresenter;
