import ListsPresenter from "./ListsPresenter";
import { useEffect, useState } from "react";
import { getDate, submitValidationCheck } from "shared/library/utils";

const ListsContainer = () => {
    const [fanLetters, setFanLetters] = useState([]);
    const [isPickedMember, setIsPickedMember] = useState("아이네");
    const onSubmitFanLettersHandler = (event) => {
        event.preventDefault();
        const createdAt = getDate();
        const nickName = event.target.nickName.value;
        const content = event.target.content.value;
        const writedTo = event.target.member.value;
        const temp = {
            id: crypto.randomUUID(),
            createdAt,
            nickName,
            content,
            writedTo,
        };
        const newFanLetter = submitValidationCheck(temp);
        if (newFanLetter) {
            setFanLetters([...fanLetters, newFanLetter]);
            localStorage.setItem(
                "fanLetters",
                JSON.stringify([...fanLetters, newFanLetter])
            );
        }
        event.target.reset();
    };
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("fanLetters")) || [];
        setFanLetters(data);
    }, []);

    return (
        <ListsPresenter
            data={fanLetters}
            isPickedMember={isPickedMember}
            setIsPickedMember={setIsPickedMember}
            onSubmitFanLettersHandler={onSubmitFanLettersHandler}
        />
    );
};
export default ListsContainer;
