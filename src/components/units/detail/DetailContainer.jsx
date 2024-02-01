import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CustomArticle from "components/commons/articles/CustomArticle";

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

const DetailContainer = () => {
    const data = useSelector(({ fanLetter }) => fanLetter.fanLetters);
    const navigate = useNavigate();
    const { id } = useParams();
    const { nickName, createdAt, content } = data.find(
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
            <Link to="/">
                <div>홈으로</div>
            </Link>
            <ArticleWrapper>
                <ArticleTop>
                    <span>{nickName}</span>
                    <span>{createdAt}</span>
                </ArticleTop>
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
