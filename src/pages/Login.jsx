//=======ICONS IMPORT=======
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
//==========================================
import {
  Button,
  ButtonContainer,
  Div,
  GoogleButton,
  Input,
  InputGroup,
  LeftImg,
  LoginContainer,
  LoginLeftPart,
  LoginRightPart,
  SpanGroup,
} from "../styles/LoginStyles";
//import backgroundImg from "../assets/blob-scene-haikei.svg";
import leftImage from "../assets/woman-login.png";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword, signIn, signInWithGoogle } from "../helpers/firebase";
import { AuthContext } from "../context/AuthContextProvider";
const Login = () => {
  //=============DEGISKENLER=============
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  //Global Degiskenleri Yakalama
  const { user, setUser, currentUser, setCurrentUser, setToggle } =
    useContext(AuthContext);
  //=============Fonksiyonlar=============
  const loginSubmit = (e) => {
    e.preventDefault();
    signIn(
      loginEmail,
      loginPassword,
      navigate,
      user,
      setUser,
      currentUser,
      setCurrentUser
    );
  };
  return (
    <LoginContainer onClick={() => setToggle(false)}>
      <LoginRightPart>
        <h1>Login</h1>
        <form onSubmit={loginSubmit}>
          <InputGroup>
            <label htmlFor="email" className="input-label">
              Email Adress
            </label>
            <MdEmail className="icon" />
            <Input
              type="email"
              id="email"
              className="input"
              required
              placeholder="Enter your email"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email" className="input-label">
              Password
            </label>
            <RiLockPasswordFill className="icon" />
            <Input
              type="password"
              id="password"
              className="input"
              required
              placeholder="Enter your password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </InputGroup>
          <SpanGroup>
            <div>
              <input
                id="rememberMe"
                type="checkbox"
                style={{ marginRight: "5px" }}
              />
              <label
                htmlFor="rememberMe"
                style={{ color: "black", fontWeight: 600 }}
              >
                Remember Me
              </label>
            </div>
            <span
              style={{
                fontWeight: 600,
                color: "black",
              }}
              onClick={() => forgotPassword(loginEmail)}
            >
              Forgot Password ?
            </span>
          </SpanGroup>
          <ButtonContainer>
            <Button type="submit">LOGIN</Button>
            <div className="liquid"></div>
          </ButtonContainer>
        </form>
        <Div>
          <FcGoogle className="google-icon" />
          <GoogleButton
            className="google-btn"
            onClick={() => signInWithGoogle(setUser, navigate, setCurrentUser)}
          >
            Continue With Google
          </GoogleButton>
        </Div>

        <Div>
          <span className="no-account">Don't you have an account ? </span>
          <Link to="/register" className="sign-up">
            Sign Up
          </Link>
        </Div>
      </LoginRightPart>
      <LoginLeftPart>
        <LeftImg src={leftImage} />
      </LoginLeftPart>
    </LoginContainer>
  );
};
export default Login;
