const SUBMIT_LETTER = "fanLetter/SUBMIT_LETTER";
const RERENDER_LETTER = "fanLetter/RERENDER_LETTER";
const SELECT_MEMBER = "fanLetter/SELECT_MEMBER";

export const submitLetter = (payload) => {
    return {
        type: SUBMIT_LETTER,
        payload,
    };
};
export const reRenderLetter = (payload) => {
    return {
        type: RERENDER_LETTER,
        payload,
    };
};
export const selectMember = (payload) => {
    return {
        type: SELECT_MEMBER,
        payload,
    };
};

const data = {
    fanLetters: [],
    pickedMember: "아이네",
};

const fanLetter = (state = data, action) => {
    switch (action.type) {
        case RERENDER_LETTER:
            return {
                ...state,
                fanLetters: action.payload,
            };
        case SUBMIT_LETTER:
            return {
                ...state,
                fanLetters: [action.payload, ...state.fanLetters],
            };

        case SELECT_MEMBER:
            state.pickedMember = action.payload;
            return {
                ...state,
            };

        default:
            return state;
    }
};

export default fanLetter;
