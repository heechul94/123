import { useNavigate, useParams } from "react-router-dom";
import DetailPresenter from "./DetailPresenter";
import { useState } from "react";
import { editContentValidationCheck } from "shared/library/utils";
import { DetailContext } from "shared/context/FanLettersContext";

const DetailContainer = ({ isEdit }) => {
    const data = JSON.parse(localStorage.getItem("fanLetters"));
    const navigate = useNavigate();
    const { id } = useParams();
    const articleData = data.find((item) => item.id === id);
    const [editedContent, setEditedContent] = useState(articleData.content);
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
        const validatedContent = editContentValidationCheck(
            editedContent,
            articleData.content
        );
        if (validatedContent) {
            articleData.content = validatedContent;
            localStorage.setItem("fanLetters", JSON.stringify(data));
            navigate(`/detail/${id}`);
        } else {
            return;
        }
    };
    return (
        <DetailContext.Provider
            value={{
                id,
                ...articleData,
                onChangeContentHandler,
                onClickDeleteArticleButtonHandler,
                onClickEditArticleButtonHandler,
            }}
        >
            <DetailPresenter isEdit={isEdit} />
        </DetailContext.Provider>
    );
};
export default DetailContainer;
