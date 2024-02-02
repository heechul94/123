import styled from "styled-components";
const ArticleMiddle = styled.div``;
const ArticleBottom = styled.div``;
const EditDetailForm = ({ content, onEditClick, onClickNavigate }) => {
  return (
    <form onSubmit={onEditClick}>
      <ArticleMiddle>
        <textarea name="content" defaultValue={content} />
      </ArticleMiddle>
      <ArticleBottom>
        <button type="submit">적용</button>
        <button type="button" onClick={onClickNavigate}>
          취소
        </button>
      </ArticleBottom>
    </form>
  );
};
export default EditDetailForm;
