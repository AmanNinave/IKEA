import { myStore } from "../Store";
function signupAction(data) {
  myStore.dispatch({
    type: "SIGNUP",
    payload: data,
  });
}

function signinAction(data) {
  myStore.dispatch({
    type: "SIGNIN",
    payload: data,
  });
}

export default signupAction;
export { signinAction };
