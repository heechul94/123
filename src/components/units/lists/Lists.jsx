import AddForm from "components/commons/forms/AddForm";
import ListContainer from "./list/List";
import MemberButton from "components/commons/buttons/MemberButton";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import { setLetters } from "shared/redux/modules/fanLetter";

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  margin: 1rem;
`;
const ListsWrapper = styled.ul`
  margin: 1rem;
`;
const EmptyMessage = styled.div`
  padding: 1rem;
  text-align: center;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: #00000050;
  backdrop-filter: blur(1px);
  box-shadow: 0rem 0.1rem 0.4rem #00000050;
`;
const ListsContainer = () => {
  const dispatch = useDispatch();
  const MEMBERS = ["아이네", "징버거", "릴파", "주르르", "고세구", "비챤"];
  const fanLetters = useSelector(({ fanLetter }) => fanLetter.fanLetters);
  const selectedMember = useSelector(({ selector }) => selector.selectedMember);
  const filteredFanLetters = fanLetters.filter(
    (item) => selectedMember === item.writedTo
  );
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fanLetters")) || [];
    dispatch(setLetters(data));
  }, []);

  return (
    <Main>
      <Navigation>
        {MEMBERS.map((member) => (
          <MemberButton
            key={member}
            text={member}
            selectedMember={selectedMember}
          />
        ))}
      </Navigation>
      <AddForm fanLetters={fanLetters} />
      <ListsWrapper>
        {filteredFanLetters.length ? (
          filteredFanLetters.map((item) => (
            <ListContainer key={item.id} item={item} />
          ))
        ) : (
          <EmptyMessage>없어요 좀 뭐라고 적어봐요</EmptyMessage>
        )}
      </ListsWrapper>
    </Main>
  );
};
export default ListsContainer;
