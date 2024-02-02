import AddForm from "components/commons/forms/AddForm";
import ListContainer from "./list/ListContainer";
import MemberButton from "components/commons/buttons/MemberButton";
import { useDispatch, useSelector } from "react-redux";
import { setLetters } from "shared/redux/modules/fanLetter";
import { useEffect } from "react";

const ListsPresenter = () => {
  const MEMBERS = ["아이네", "징버거", "릴파", "주르르", "고세구", "비챤"];
  const fanLetters = useSelector(({ fanLetter }) => fanLetter.fanLetters);
  const selectedMember = useSelector(({ selector }) => selector.selectedMember);
  const filteredFanLetters = fanLetters.filter(
    (item) => selectedMember === item.writedTo
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fanLetters")) || [];
    dispatch(setLetters(data)); //
  }, [dispatch]);
  return (
    <main>
      <AddForm />
      <nav>
        {MEMBERS.map((member) => (
          <MemberButton
            key={member}
            text={member}
            selectedMember={selectedMember}
          />
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
