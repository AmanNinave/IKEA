const intialData = {
  signupUsers: [
    {
      firstname: "Manoj",
      surname: "Bachhal",
      email: "themanojbachhal@gmail.com",
      password: "1234",
    },
    {
      firstname: "Aman",
      surname: "Ninave",
      email: "amanninave987@gmail.com",
      password: "1234",
    },
  ],
  Auth: false,
};
function signupReducer(state = intialData, action) {
  switch (action.type) {
    case "SIGNUP":
      // console.log(action.payload);
      return { ...state, signupUsers: [...state.signupUsers, action.payload] };
    case "SIGNIN":
      return { ...state, Auth: action.payload };
    default:
      return state;
  }
}

export default signupReducer;
