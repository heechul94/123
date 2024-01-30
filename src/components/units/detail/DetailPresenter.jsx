import Button from "components/commons/buttons/MemberButton";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DetailContext } from "shared/context/FanLettersContext";
import styled from "styled-components";

const DetailWrapper = styled.main`
    margin: 50% auto;
    border: 1px solid black;
`;
const ArticleWrapper = styled.article`
    border: 1px solid black;
`;
const ArticleTop = styled.div`
    border-bottom: 1px solid black;
`;
const ArticleMiddle = styled.div``;
const ArticleBottom = styled.div``;
const DeleteButton = styled.button`
    border: none;
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
`;
const EditButton = styled.button`
    border: none;
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
`;

const DetailPresenter = ({ isEdit }) => {
    const {
        id,
        nickName,
        createdAt,
        content,
        onClickEditArticleButtonHandler,
        onChangeContentHandler,
        onClickDeleteArticleButtonHandler,
    } = useContext(DetailContext);
    const navigate = useNavigate();
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
                {isEdit ? (
                    <form onSubmit={onClickEditArticleButtonHandler}>
                        <ArticleMiddle>
                            <textarea
                                id="content"
                                defaultValue={content}
                                onChange={onChangeContentHandler}
                            />
                        </ArticleMiddle>
                        <ArticleBottom>
                            <button type="submit">적용</button>
                            <button
                                type="button"
                                onClick={() => navigate(`/detail/${id}`)}
                            >
                                취소
                            </button>
                        </ArticleBottom>
                    </form>
                ) : (
                    <>
                        <ArticleMiddle>
                            <div>{content}</div>
                        </ArticleMiddle>
                        <ArticleBottom>
                            <EditButton
                                onClick={() => navigate(`/editDetail/${id}`)}
                            >
                                수정
                            </EditButton>
                            <DeleteButton
                                onClick={onClickDeleteArticleButtonHandler}
                            >
                                삭제
                            </DeleteButton>
                        </ArticleBottom>
                    </>
                )}
            </ArticleWrapper>
        </DetailWrapper>
    );
};
export default DetailPresenter;
