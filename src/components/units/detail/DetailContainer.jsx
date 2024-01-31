import { useNavigate, useParams } from "react-router-dom";
import DetailPresenter from "./DetailPresenter";
import { editContentValidationCheck } from "shared/library/utils";

const DetailContainer = ({ isEdit }) => {
    const data = JSON.parse(localStorage.getItem("fanLetters"));
    const navigate = useNavigate();
    const { id } = useParams();
    const articleData = data.find((item) => item.id === id);
    const onClickDeleteArticleButtonHandler = () => {
        const isDelete = window.confirm("게시글을 삭제하시겠습니까?");
        if (isDelete) {
            const deletedData = data.filter((item) => item !== articleData);
            localStorage.setItem("fanLetters", JSON.stringify(deletedData));
            navigate("/");
        } else {
            return;
        }
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
            navigate(`/`);
        } else {
            return;
        }
    };
    return (
        <DetailPresenter
            isEdit={isEdit}
            id={id}
            {...articleData}
            onClickDeleteArticleButtonHandler={
                onClickDeleteArticleButtonHandler
            }
            onClickEditArticleButtonHandler={onClickEditArticleButtonHandler}
        />
    );
};
export default DetailContainer;
