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
                <AddFormLabel htmlFor="nickName">
                    닉네임 :
                    <AddFormInput id="nickName" name="nickName" />
                </AddFormLabel>
                <AddFormLabel htmlFor="content">
                    내용 :
                    <AddFormTextarea id="content" name="content" />
                </AddFormLabel>
                <AddFormLabel htmlFor="member">
                    <select id="member" name="member">
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
