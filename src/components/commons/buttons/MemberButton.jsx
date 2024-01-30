import { selectButtonColor } from "shared/library/utils";
import styled from "styled-components";

const CustomButton = styled.button`
    border: none;
    color: ${(props) =>
        props.$ispickedmember === props.id ? "white" : "black"};
    border: 1px solid black;
    border-radius: 5px;
    background-color: ${(props) =>
        props.$ispickedmember === props.id ? props.color : "white"};
    cursor: pointer;
`;

const MemberButton = ({ text, color, isPickedMember, setIsPickedMember }) => {
    color = selectButtonColor(isPickedMember);
    return (
        <CustomButton
            id={text}
            $ispickedmember={isPickedMember}
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
