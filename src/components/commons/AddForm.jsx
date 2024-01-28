import styled from "styled-components";
import Button from "./buttons/Button";

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

const AddForm = () => {
    return (
        <AddFormWrapper>
            <Form>
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
                        <option value={"INE"}>아이네</option>
                        <option value={"JINGBURGER"}>징버거</option>
                        <option value={"LILPA"}>릴파</option>
                        <option value={"JURURU"}>주르르</option>
                        <option value={"GOSEGU"}>고세구</option>
                        <option value={"VIICHAN"}>비챤</option>
                    </select>
                </AddFormLabel>
                <Button type="submit" text={"등록"} />
            </Form>
        </AddFormWrapper>
    );
};
export default AddForm;
