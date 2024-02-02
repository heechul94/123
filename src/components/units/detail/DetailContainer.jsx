import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CustomArticle from "components/commons/articles/CustomArticle";

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

const DetailContainer = () => {
  const data = useSelector(({ fanLetter }) => fanLetter.fanLetters);
  const navigate = useNavigate();
  const { id } = useParams();
  const { avatar, nickName, createdAt, writedTo, content } = data.find(
    (item) => item.id === id
  );
  const onDeleteClick = () => {
    const isDelete = window.confirm("게시글을 삭제하시겠습니까?");
    if (isDelete) {
      const deletedData = data.filter((item) => item.id !== id);
      localStorage.setItem("fanLetters", JSON.stringify(deletedData));
      navigate("/");
    }
  };
  const navigateToEdit = () => {
    navigate(`/editDetail/${id}`);
  };

  return (
    <DetailWrapper>
      <HomeAnchor to="/">
        <span>홈으로 가기</span>
      </HomeAnchor>
      <ArticleWrapper>
        <ArticleTop>
          <div>
            <img src={avatar} alt="profile" />
            <span>{nickName}</span>
          </div>
          <span>{createdAt.split(" ")[0]}</span>
        </ArticleTop>
        <span>To : {writedTo}</span>
        <CustomArticle
          content={content}
          onDeleteClick={onDeleteClick}
          navigateToEdit={navigateToEdit}
        />
      </ArticleWrapper>
    </DetailWrapper>
  );
};
export default DetailContainer;
