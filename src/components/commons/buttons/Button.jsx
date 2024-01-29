import { selectButtonColor } from "shared/library/utils";
import styled from "styled-components";

const CustomButton = styled.button`
    border: none;
    color: ${(props) =>
        props.isPickedMember === props.id ? "white" : "black"};
    border: 1px solid black;
    border-radius: 5px;
    background-color: ${(props) =>
        props.isPickedMember === props.id ? props.color : "white"};
    cursor: pointer;
`;
const SubmitButton = styled.button`
    border: none;
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
`;

const Button = ({ text, color, isPickedMember, setIsPickedMember }) => {
    color = selectButtonColor(isPickedMember);
    return (
        <>
            {text === "등록" ? (
                <SubmitButton color={color}>{text}</SubmitButton>
            ) : (
                <CustomButton
                    id={text}
                    isPickedMember={isPickedMember}
                    color={color}
                    onClick={() => {
                        setIsPickedMember(text);
                    }}
                >
                    {text}
                </CustomButton>
            )}
        </>
    );
};
export default Button;
