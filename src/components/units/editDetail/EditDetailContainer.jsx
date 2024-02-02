import EditDetailForm from "components/commons/forms/EditDetailForm";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editContentValidationCheck } from "shared/library/utils";
import styled from "styled-components";

const DetailWrapper = styled.main`
  margin: 0 auto;
  border: 1px solid black;
`;
const ArticleWrapper = styled.article`
  border: 1px solid black;
`;
const ArticleTop = styled.div`
  border-bottom: 1px solid black;
`;

const EditDetailContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useSelector(({ fanLetter }) => fanLetter.fanLetters);
  let articleData = data.find((item) => item.id === id);
  const onEditClick = (event) => {
    event.preventDefault();
    const editedContent = event.target.content.value;
    const isValid = editContentValidationCheck(
      editedContent,
      articleData.content
    );
    if (isValid) {
      articleData.content = editedContent;
      localStorage.setItem("fanLetters", JSON.stringify(data));
      navigate(`/`);
    }
  };
  const onClickNavigate = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <DetailWrapper>
      <Link to="/">
        <div>홈으로</div>
      </Link>
      <ArticleWrapper>
        <ArticleTop>
          <span>{articleData.nickName}</span>
          <span>{articleData.createdAt}</span>
        </ArticleTop>
        <EditDetailForm
          content={articleData.content}
          onEditClick={onEditClick}
          onClickNavigate={onClickNavigate}
        />
      </ArticleWrapper>
    </DetailWrapper>
  );
};
export default EditDetailContainer;
