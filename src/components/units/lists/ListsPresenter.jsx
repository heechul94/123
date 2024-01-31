import AddForm from "components/commons/addForm/AddForm";
import ListContainer from "./list/ListContainer";
import MemberButton from "components/commons/buttons/MemberButton";
import { useSelector } from "react-redux";

const ListsPresenter = () => {
    const MEMBERS = ["아이네", "징버거", "릴파", "주르르", "고세구", "비챤"];
    const data = useSelector(({ fanLetter }) => fanLetter.fanLetters);
    const isPickedMember = useSelector(
        ({ fanLetter }) => fanLetter.pickedMember
    );
    return (
        <main>
            <AddForm />
            <nav>
                {MEMBERS.map((member) => (
                    <MemberButton key={member} text={member} />
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
