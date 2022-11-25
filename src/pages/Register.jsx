//ICONS IMPORT
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import leftImageRegister from "../assets/register-img.png";

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
} from "../styles/LoginStyles";
const Register = () => {
  return (
    <LoginContainer>
      <LoginRightPart>
        <h1>REGISTER</h1>
        <form>
          <InputGroup
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              margin: "0 auto",
            }}
          >
            <InputGroup>
              <label htmlFor="name">Name </label>
              <FaUser className="icon" />
              <Input
                type="text"
                className="input"
                id="name"
                style={{ width: "200px" }}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="userName">User Name </label>
              <FaUser className="icon" />
              <Input
                type="text"
                className="input"
                id="userName"
                style={{ width: "200px" }}
              />
            </InputGroup>
          </InputGroup>

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
              placeholder="Enter an email"
              //onChange={(e) => setMail(e.target.value)}
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
              placeholder="Set a password"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>

          <ButtonContainer>
            <Button type="submit">Register</Button>
            <div className="liquid"></div>
          </ButtonContainer>
        </form>
        <div style={{ marginBottom: "15px", fontWeight: 800 }}>Or</div>
        <Div>
          <FcGoogle className="google-icon" />
          <GoogleButton className="google-btn">
            Register With Google
          </GoogleButton>
        </Div>
      </LoginRightPart>
      <LoginLeftPart>
        <LeftImg src={leftImageRegister} />
      </LoginLeftPart>
    </LoginContainer>
  );
};
export default Register;
