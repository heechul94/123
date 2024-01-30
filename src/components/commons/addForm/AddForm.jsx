import styled from "styled-components";
import Button from "../buttons/MemberButton";

const AddFormWrapper = styled.section`
    border: 1px solid black;
`;
const Form = styled.form``;
const AddFormLabel = styled.label`
    display: flex;
`;
const AddFormInput = styled.input`
    border: 1px solid black;
`;
const AddFormTextarea = styled.textarea`
    resize: none;
`;
const SubmitButton = styled.button`
    border: none;
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
`;

const AddForm = ({ onSubmitFanLettersHandler }) => {
    return (
        <AddFormWrapper>
            <Form onSubmit={onSubmitFanLettersHandler}>
                <AddFormLabel>
                    닉네임 :
                    <AddFormInput name="nickName" />
                </AddFormLabel>
                <AddFormLabel>
                    내용 :
                    <AddFormTextarea name="content" />
                </AddFormLabel>
                <AddFormLabel>
                    <select name="member">
                        <option value={"아이네"}>아이네</option>
                        <option value={"징버거"}>징버거</option>
                        <option value={"릴파"}>릴파</option>
                        <option value={"주르르"}>주르르</option>
                        <option value={"고세구"}>고세구</option>
                        <option value={"비챤"}>비챤</option>
                    </select>
                </AddFormLabel>
                <SubmitButton type="submit">등록</SubmitButton>
            </Form>
        </AddFormWrapper>
    );
};
export default AddForm;
