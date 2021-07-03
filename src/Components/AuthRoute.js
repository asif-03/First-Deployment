
import { Redirect } from "react-router-dom";


const AuthRoute = (props) => {

  return <>
    {props.isLoggedIn ? props.children : <Redirect to="/login" />}
  </>
}

export default AuthRoute