import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_UP":
    case "USER_LOADED":
      toast("Welcome...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      const user = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        name: user.name,
        email: user.email,
        id: user.id,
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      toast("Goodbye...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return {
        token: null,
        name: null,
        email: null,
        id: null,
      };
    default:
      return state;
  }
};

export default authReducer;
