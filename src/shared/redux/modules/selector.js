const SELECT_MEMBER = "selector/SELECT_MEMBER";

export const selectMember = (payload) => {
  return {
    type: SELECT_MEMBER,
    payload,
  };
};

const data = {
  selectedMember: "아이네",
};

const selector = (state = data, action) => {
  switch (action.type) {
    case SELECT_MEMBER:
      return {
        selectedMember: action.payload,
      };

    default:
      return state;
  }
};

export default selector;
