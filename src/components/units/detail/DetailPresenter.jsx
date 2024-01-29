import Button from "components/commons/buttons/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DetailWrapper = styled.main`
    margin: 50% auto;
    border: 1px solid black;
`;
const ArticleWrapper = styled.article`
    border: 1px solid black;
`;
const ArticleHeader = styled.div`
    border-bottom: 1px solid black;
`;

const DetailPresenter = ({
    nickName,
    createdAt,
    content,
    onClickDeleteArticleButtonHandler,
}) => {
    return (
        <DetailWrapper>
            <Link to="/">
                <div>홈으로</div>
            </Link>
            <ArticleWrapper>
                <ArticleHeader>
                    <span>{nickName}</span>
                    <span>{createdAt}</span>
                </ArticleHeader>
                <div>{content}</div>
                <Button text="수정" />
                <Button
                    text="삭제"
                    onClickDeleteArticleButtonHandler={
                        onClickDeleteArticleButtonHandler
                    }
                />
            </ArticleWrapper>
        </DetailWrapper>
    );
};
export default DetailPresenter;
