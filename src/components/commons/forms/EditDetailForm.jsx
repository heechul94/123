import { useEffect, useRef } from "react";
import styled from "styled-components";
const Form = styled.form`
  width: 100%;
`;
const ArticleMiddle = styled.div`
  width: 100%;
  margin: 1rem 0;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: auto;
  padding: 1rem;
  font-size: 1rem;
  line-height: 2rem;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: #ffffff80;
  backdrop-filter: blur(1px);
  box-shadow: 0rem 0.1rem 0.4rem #00000050;
  resize: none;
`;
const ArticleBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    padding: 0.4rem 0.5rem;
    margin-right: 1rem;
    color: white;
    border: none;
    border-radius: 10px;
    background-color: #ffffff80;
    backdrop-filter: blur(1px);
    box-shadow: 0rem 0.1rem 0.4rem #00000050;
    cursor: pointer;
  }
`;
const EditDetailForm = ({ content, onEditClick, onClickNavigate }) => {
  const textarea = useRef();
  const handleResizeHeight = () => {
    textarea.current.style.height = "auto";
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };
  useEffect(() => {
    handleResizeHeight();
  }, []);

  return (
    <Form onSubmit={onEditClick}>
      <ArticleMiddle>
        <TextArea
          name="content"
          ref={textarea}
          defaultValue={content}
          onChange={handleResizeHeight}
          rows={1}
          maxLength={"120"}
        />
      </ArticleMiddle>
      <ArticleBottom>
        <button type="submit">적용</button>
        <button type="button" onClick={onClickNavigate}>
          취소
        </button>
      </ArticleBottom>
    </Form>
  );
};
export default EditDetailForm;
