import AddForm from "components/commons/addForm/AddForm";
import ListContainer from "./list/ListContainer";
import MemberButton from "components/commons/buttons/MemberButton";
import { useSelector } from "react-redux";

const ListsPresenter = () => {
    const MEMBERS = ["아이네", "징버거", "릴파", "주르르", "고세구", "비챤"];
    const fanLetters = useSelector(({ fanLetter }) => fanLetter.fanLetters);
    const isPickedMember = useSelector(
        ({ fanLetter }) => fanLetter.pickedMember
    );
    const filteredFanLetters = fanLetters.filter(
        (item) => isPickedMember === item.writedTo
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
                {filteredFanLetters.length ? (
                    filteredFanLetters.map((item) => (
                        <ListContainer key={item.id} item={item} />
                    ))
                ) : (
                    <div>없어요 좀 뭐라고 적어봐요</div>
                )}
            </ul>
        </main>
    );
};
export default ListsPresenter;
