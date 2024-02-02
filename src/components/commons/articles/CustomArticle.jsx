import styled from "styled-components";

const ArticleMiddle = styled.div``;
const ArticleBottom = styled.div``;
const EditButton = styled.button`
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
const CustomArticle = ({ content, onDeleteClick, navigateToEdit }) => {
  return (
    <>
      <ArticleMiddle>
        <div>{content}</div>
      </ArticleMiddle>
      <ArticleBottom>
        <EditButton onClick={navigateToEdit}>수정</EditButton>
        <DeleteButton onClick={onDeleteClick}>삭제</DeleteButton>
      </ArticleBottom>
    </>
  );
};
export default CustomArticle;
