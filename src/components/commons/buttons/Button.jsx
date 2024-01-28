import selectButtonColor from "shared/library/selectButtonColor";
import styled from "styled-components";

const CustomButton = styled.button`
    border: none;
    color: white;
    background-color: #000;
    cursor: pointer;
    &:focus {
        background-color: ${(props) => props.color};
    }
`;

const Button = ({ text, color, onClickMemberButtonHandler }) => {
    color = selectButtonColor(text);
    return (
        <CustomButton id={text} color={color}>
            {text}
        </CustomButton>
    );
};
export default Button;
