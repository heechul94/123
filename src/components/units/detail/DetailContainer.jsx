import { useNavigate, useParams } from "react-router-dom";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = () => {
    const data = JSON.parse(localStorage.getItem("fanLetters"));
    const navigate = useNavigate();
    const { id } = useParams();
    const articleData = data.find((item) => item.id === id);
    const onClickDeleteArticleButtonHandler = () => {
        const deletedData = data.filter((item) => item !== articleData);
        localStorage.setItem("fanLetters", JSON.stringify(deletedData));
        navigate("/");
    };
    return (
        <DetailPresenter
            {...articleData}
            onClickDeleteArticleButtonHandler={
                onClickDeleteArticleButtonHandler
            }
        />
    );
};
export default DetailContainer;
