import { useNavigate, useParams } from "react-router-dom";
import DetailPresenter from "./DetailPresenter";
import { useState } from "react";

const DetailContainer = ({ isEdit }) => {
    const [editedContent, setEditedContent] = useState();
    const data = JSON.parse(localStorage.getItem("fanLetters"));
    const navigate = useNavigate();
    const { id } = useParams();
    const articleData = data.find((item) => item.id === id);
    const onClickDeleteArticleButtonHandler = () => {
        const deletedData = data.filter((item) => item !== articleData);
        localStorage.setItem("fanLetters", JSON.stringify(deletedData));
        navigate("/");
    };
    const onChangeContentHandler = (event) => {
        setEditedContent(event.target.value);
    };
    const onClickEditArticleButtonHandler = (event) => {
        event.preventDefault();
        articleData.content = editedContent;
        localStorage.setItem("fanLetters", JSON.stringify(data));
        navigate(`/detail/${id}`);
    };
    return (
        <DetailPresenter
            {...articleData}
            onChangeContentHandler={onChangeContentHandler}
            onClickDeleteArticleButtonHandler={
                onClickDeleteArticleButtonHandler
            }
            onClickEditArticleButtonHandler={onClickEditArticleButtonHandler}
            editedContent={editedContent}
            isEdit={isEdit}
            id={id}
        />
    );
};
export default DetailContainer;
