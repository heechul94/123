import { useDispatch, useSelector } from "react-redux";
import { selectButtonColor } from "shared/library/utils";
import { selectMember } from "shared/redux/modules/fanLetter";
import styled from "styled-components";

const CustomButton = styled.button`
    border: none;
    color: ${(props) =>
        props.$isPickedMember === props.id ? "white" : "black"};
    border: 1px solid black;
    border-radius: 5px;
    background-color: ${(props) =>
        props.$isPickedMember === props.id ? props.color : "white"};
    cursor: pointer;
`;

const MemberButton = ({ text }) => {
    const dispatch = useDispatch();
    const isPickedMember = useSelector(
        ({ fanLetter }) => fanLetter.pickedMember
    );
    const color = selectButtonColor(isPickedMember);
    return (
        <CustomButton
            id={text}
            $isPickedMember={isPickedMember}
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
