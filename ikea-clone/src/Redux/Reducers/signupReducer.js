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
    {
      firstname: "Nikita",
      surname: "Saini",
      email: "nikitasaini09@gmail.com",
      password: "1234",
    }
  ],
  Auth: localStorage.getItem("isAuth") || false
};
function signupReducer(state = intialData, action) {
  switch (action.type) {
    case "SIGNUP":
      // console.log(action.payload);
      return { ...state, signupUsers: [...state.signupUsers, action.payload] };
    case "SIGNIN": localStorage.setItem("isAuth" , true )
      return { ...state, Auth: action.payload };
    default:
      return state;
  }
}

export default signupReducer;
