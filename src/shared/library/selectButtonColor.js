export default function selectButtonColor(text) {
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
