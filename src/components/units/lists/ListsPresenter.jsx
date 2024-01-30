import AddForm from "components/commons/addForm/AddForm";
import ListContainer from "./list/ListContainer";
import MemberButton from "components/commons/buttons/MemberButton";
import { useContext } from "react";
import { ListsContext } from "shared/context/FanLettersContext";

const ListsPresenter = () => {
    const { data, MEMBERS, isPickedMember } = useContext(ListsContext);
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
