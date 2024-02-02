import styled from "styled-components";

const ArticleMiddle = styled.div`
  margin: 1rem 0;
  p {
    width: 95%;
    padding: 1rem;
    word-wrap: break-word;
    line-height: 2rem;
    color: white;
    border: none;
    border-radius: 10px;
    background-color: #ffffff80;
    backdrop-filter: blur(1px);
    box-shadow: 0rem 0.1rem 0.4rem #00000050;
  }
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
const CustomArticle = ({ content, onDeleteClick, navigateToEdit }) => {
  return (
    <>
      <ArticleMiddle>
        <p>{content}</p>
      </ArticleMiddle>
      <ArticleBottom>
        <button onClick={navigateToEdit}>수정</button>
        <button onClick={onDeleteClick}>삭제</button>
      </ArticleBottom>
    </>
  );
};
export default CustomArticle;
