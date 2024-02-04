const SUBMIT_LETTER = "fanLetter/SUBMIT_LETTER";
const SET_LETTERS = "fanLetter/SET_LETTERS";

export const submitLetter = (payload) => {
  return {
    type: SUBMIT_LETTER,
    payload,
  };
};
export const setLetters = (payload) => {
  return {
    type: SET_LETTERS,
    payload,
  };
};

const data = {
  fanLetters: [],
};

const fanLetter = (state = data, action) => {
  switch (action.type) {
    case SET_LETTERS:
      return {
        fanLetters: action.payload,
      };
    case SUBMIT_LETTER:
      return {
        fanLetters: [action.payload, ...state.fanLetters],
      };

    default:
      return state;
  }
};

export default fanLetter;
