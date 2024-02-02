import React from "react";
import { useDispatch } from "react-redux";
import { getDate, submitValidationCheck } from "shared/library/utils";
import { submitLetter } from "shared/redux/modules/fanLetter";
import styled from "styled-components";

const AddFormWrapper = styled.section`
  align-self: center;
  width: fit-content;
  padding: 2rem;
  margin: 1rem;
  border: none;
  border-radius: 10px;
  background-color: #ffffff40;
  backdrop-filter: blur(5px);
  box-shadow: 0rem 0.1rem 1rem #00000050;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  select {
    padding: 0.3rem;
    margin-bottom: 1rem;
    color: white;
    border: none;
    border-radius: 5px;
    background-color: #00000050;
    backdrop-filter: blur(5px);
    box-shadow: 0rem 0.1rem 1rem #00000050;
    &:focus {
      outline: none;
    }
  }
`;
const AddFormLabel = styled.label`
  display: flex;
`;
const AddFormInput = styled.input`
  width: 18rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: #00000050;
  backdrop-filter: blur(5px);
  box-shadow: 0rem 0.1rem 1rem #00000050;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;
const AddFormTextarea = styled.textarea`
  width: 18rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: #00000050;
  backdrop-filter: blur(5px);
  box-shadow: 0rem 0.1rem 1rem #00000050;
  resize: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;
const SubmitButton = styled.button`
  color: white;
  padding: 0.3rem;
  border: none;
  border-radius: 5px;
  background-color: #00000050;
  backdrop-filter: blur(5px);
  box-shadow: 0rem 0.1rem 1rem #00000050;
  cursor: pointer;
`;

const AddForm = ({ fanLetters }) => {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = {
      id: crypto.randomUUID(),
      avatar: "/잎하.webp",
      nickName: event.target.nickName.value,
      content: event.target.content.value,
      writedTo: event.target.member.value,
      createdAt: getDate(),
    };
    const validatedData = submitValidationCheck(formData);
    if (validatedData) {
      dispatch(submitLetter(validatedData));
      localStorage.setItem(
        "fanLetters",
        JSON.stringify([validatedData, ...fanLetters])
      );
      event.target.reset();
    }
  };

  return (
    <AddFormWrapper>
      <Form onSubmit={onSubmit}>
        <AddFormLabel>
          <AddFormInput
            name="nickName"
            placeholder="닉네임을 입력해주세요"
            maxLength={"12"}
          />
        </AddFormLabel>
        <AddFormLabel>
          <AddFormTextarea
            name="content"
            placeholder="내용을 입력해주세요"
            maxLength={"120"}
          />
        </AddFormLabel>
        <AddFormLabel>
          <select name="member">
            <option value={null}>보낼 멤버를 선택하세요</option>
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
