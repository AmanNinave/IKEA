const intialData = {
  signupUsers: [],
  Auth: false,
};
function signupReducer(state = intialData, action) {
  switch (action.type) {
    case "SIGNUP":
      console.log(action.payload);
      return { ...state, signupUsers: [...state.signupUsers, action.payload] };

    default:
      return state;
  }
}

export default signupReducer;
