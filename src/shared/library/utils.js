// 버튼 text에 따른 색깔 선택
export function selectButtonColor(text) {
    let backgroundColor = "#fff";
    const name = text;
    switch (name) {
        case "아이네":
            backgroundColor = "#8A2BE2";
            break;
        case "징버거":
            backgroundColor = "#f0a957";
            break;
        case "릴파":
            backgroundColor = "#443965";
            break;
        case "주르르":
            backgroundColor = "#be185d";
            break;
        case "고세구":
            backgroundColor = "#467ec6";
            break;
        case "비챤":
            backgroundColor = "#95c100";
            break;
        default:
            backgroundColor = "#000";
    }
    return backgroundColor;
}

export const getDate = () => {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd} ${hours}:${minute}`;
};

export const submitValidationCheck = (data) => {
    if (data.nickName.trim("") === "" && data.content.trim("") === "") {
        alert("닉네임과 내용을 입력해주세요");
        return false;
    }
    if (data.nickName.trim("") === "") {
        alert("닉네임을 입력해주세요");
        return false;
    }
    if (data.content.trim("") === "") {
        alert("내용을 입력해주세요");
        return false;
    }
    return data;
};

export const editContentValidationCheck = (data, defaultData) => {
    if (data.trim("") === defaultData) {
        alert("수정된 내용이 없습니다.");
        return false;
    }
    if (data.trim("").length === 0) {
        alert("내용이 없습니다.");
        return false;
    }
    return true;
};
export const convertedCreatedAt = (createdAt) => {
    const createdAtArr = createdAt.split(" ");
    const nowDate = getDate().split(" ")[0];
    const createdDate = createdAtArr[0];
    const createdHourMinute = createdAtArr[1];
    if (nowDate === createdDate) {
        return createdHourMinute;
    } else {
        return createdDate;
    }
};
