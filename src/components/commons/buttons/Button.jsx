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
const SubmitButton = styled.button`
    border: none;
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
`;
const DeleteButton = styled.button`
    border: none;
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
`;

const Button = ({
    text,
    color,
    isPickedMember,
    setIsPickedMember,
    onClickDeleteArticleButtonHandler,
}) => {
    color = selectButtonColor(isPickedMember);
    return (
        <>
            {text === "등록" ? (
                <SubmitButton>{text}</SubmitButton>
            ) : text === "삭제" ? (
                <DeleteButton onClick={onClickDeleteArticleButtonHandler}>
                    {text}
                </DeleteButton>
            ) : (
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
            )}
        </>
    );
};
export default Button;
