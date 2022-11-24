import {
  Button,
  ButtonContainer,
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
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
const Login = () => {
  //=============DEGISKENLER=============
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  //=============Fonksiyonlar=============
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mail : ", mail, "Password :  ", password);
  };
  return (
    <LoginContainer>
      <LoginRightPart>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
              onChange={(e) => setMail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
                style={{ color: "white", fontWeight: 600 }}
              >
                Remember Me{" "}
              </label>
            </div>
            <span
              style={{
                fontWeight: 600,
                color: "white",
              }}
            >
              Forgot Password ?
            </span>
          </SpanGroup>
          <ButtonContainer>
            <Button type="submit">LOGIN</Button>
            <div className="liquid"></div>
          </ButtonContainer>
        </form>
      </LoginRightPart>
      <LoginLeftPart>
        <LeftImg src={leftImage} />
      </LoginLeftPart>
    </LoginContainer>
  );
};
export default Login;
