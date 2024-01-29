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
