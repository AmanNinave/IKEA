import { myStore } from "../Store";
function signupAction(data) {
  myStore.dispatch({
    type: "SIGNUP",
    payload: data,
  });
}

export default signupAction;
