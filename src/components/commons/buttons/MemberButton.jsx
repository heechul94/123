import { useContext } from "react";
import { ListsContext } from "shared/context/FanLettersContext";
import { selectButtonColor } from "shared/library/utils";
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
    const { isPickedMember, setIsPickedMember } = useContext(ListsContext);
    const color = selectButtonColor(isPickedMember);
    return (
        <CustomButton
            id={text}
            $isPickedMember={isPickedMember}
            color={color}
            onClick={() => {
                setIsPickedMember(text);
            }}
        >
            {text}
        </CustomButton>
    );
};
export default MemberButton;
