import { useNavigate, useParams } from "react-router-dom";
import DetailPresenter from "./DetailPresenter";
import { editContentValidationCheck } from "shared/library/utils";
import { DetailContext } from "shared/context/FanLettersContext";

const DetailContainer = ({ isEdit }) => {
    const data = JSON.parse(localStorage.getItem("fanLetters"));
    const navigate = useNavigate();
    const { id } = useParams();
    const articleData = data.find((item) => item.id === id);
    const onClickDeleteArticleButtonHandler = () => {
        const deletedData = data.filter((item) => item !== articleData);
        localStorage.setItem("fanLetters", JSON.stringify(deletedData));
        navigate("/");
    };
    const onClickEditArticleButtonHandler = (event) => {
        event.preventDefault();
        const editedContent = event.target.content.value;
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
                onClickDeleteArticleButtonHandler,
                onClickEditArticleButtonHandler,
            }}
        >
            <DetailPresenter isEdit={isEdit} />
        </DetailContext.Provider>
    );
};
export default DetailContainer;
