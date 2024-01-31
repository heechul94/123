import { getDate, submitValidationCheck } from "shared/library/utils";

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

const initialState = {
    fanLetters: [],
    pickedMember: "아이네",
};

const fanLetter = (state = initialState, action) => {
    switch (action.type) {
        case RERENDER_LETTER:
            return {
                ...state,
                fanLetters: action.payload,
            };
        case SUBMIT_LETTER:
            action.payload.preventDefault();
            const temp = {
                id: crypto.randomUUID(),
                nickName: action.payload.target.nickName.value,
                content: action.payload.target.content.value,
                writedTo: action.payload.target.member.value,
                createdAt: getDate(),
            };
            const newFanLetter = submitValidationCheck(temp);
            if (newFanLetter) {
                state.fanLetters = [newFanLetter, ...state.fanLetters];
                localStorage.setItem(
                    "fanLetters",
                    JSON.stringify(state.fanLetters)
                );
            }
            action.payload.target.reset();
            return {
                ...state,
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
