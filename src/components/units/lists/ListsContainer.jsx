import ListsPresenter from "./ListsPresenter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { reRenderLetter } from "shared/redux/modules/fanLetter";

const ListsContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("fanLetters")) || [];
        dispatch(reRenderLetter(data));
    });

    return <ListsPresenter />;
};
export default ListsContainer;
