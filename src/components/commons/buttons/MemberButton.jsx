import { useDispatch } from "react-redux";
import { selectButtonColor } from "shared/library/utils";
import { selectMember } from "shared/redux/modules/selector";
import styled from "styled-components";

const CustomButton = styled.button`
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  border: 1px solid inherit;
  border-radius: 5px;
  background-color: ${(props) =>
    props.$selectedMember === props.id ? props.color : "inherit"};
  cursor: pointer;
`;

const MemberButton = ({ text, selectedMember }) => {
  const dispatch = useDispatch();
  const color = selectButtonColor(selectedMember);
  return (
    <CustomButton
      id={text}
      $selectedMember={selectedMember}
      color={color}
      onClick={() => {
        dispatch(selectMember(text));
      }}
    >
      {text}
    </CustomButton>
  );
};
export default MemberButton;
