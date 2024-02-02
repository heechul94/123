import EditDetailForm from "components/commons/forms/EditDetailForm";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editContentValidationCheck } from "shared/library/utils";
import styled from "styled-components";

const DetailWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;
const HomeAnchor = styled(Link)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  width: 5rem;
  padding: 0.5rem;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #00000050;
  backdrop-filter: blur(1px);
  box-shadow: 0rem 0.1rem 0.4rem #00000050;
  span {
    color: white;
  }
`;
const ArticleWrapper = styled.article`
  width: 80%;
  padding: 1rem;
  align-self: center;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #00000050;
  backdrop-filter: blur(5px);
  box-shadow: 0rem 0.1rem 1rem #00000050;
`;
const ArticleTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  div {
    display: flex;
    align-items: center;
  }
  img {
    width: 5rem;
    margin-right: 1rem;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0rem 0.1rem 0.3rem #00000050;
  }
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
      <HomeAnchor to="/">
        <span>홈으로 가기</span>
      </HomeAnchor>
      <ArticleWrapper>
        <ArticleTop>
          <div>
            <img src={articleData.avatar} alt="profile" />
            <span>{articleData.nickName}</span>
          </div>
          <span>{articleData.createdAt.split(" ")[0]}</span>
        </ArticleTop>
        <span>To : {articleData.writedTo}</span>
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
