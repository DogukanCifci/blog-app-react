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
import { useContext, useState } from "react";
import { createUser, signInWithGoogle } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
////===========FONKSIYON KISMINA GECIS ===========
const Register = () => {
  //Degiskenler
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerUserName, setRegisterUserName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();

  //Global Degiskenleri Yakalama
  const { setUser, setToggle } = useContext(AuthContext);

  //Submit Oldugunda Fonksiyon Cagirma
  const registerSubmit = (e) => {
    e.preventDefault();
    createUser(
      registerEmail,
      registerPassword,
      registerUserName,
      navigate,
      setUser
    );
  };

  ////===========DÖNDÜRME KISMINA GECIS ===========

  return (
    <LoginContainer onClick={() => setToggle(false)}>
      <LoginRightPart>
        <h1>REGISTER</h1>
        <form onSubmit={registerSubmit}>
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
                placeholder="Name"
                required
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="userName">Surname </label>
              <FaUser className="icon" />
              <Input
                type="text"
                className="input"
                id="userName"
                style={{ width: "200px" }}
                onChange={(e) => setRegisterUserName(e.target.value)}
                placeholder="Surname"
                required
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
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <RiLockPasswordFill className="icon" />
            <Input
              type="password"
              id="password"
              className="input"
              required
              placeholder="Set a password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
          </InputGroup>

          <ButtonContainer>
            <Button type="submit">Sign Up</Button>
            <div className="liquid"></div>
          </ButtonContainer>
        </form>
        <div style={{ marginBottom: "15px", fontWeight: 800 }}>Or</div>
        <Div>
          <FcGoogle className="google-icon" />
          <GoogleButton
            className="google-btn"
            onClick={() => signInWithGoogle(setUser, navigate)}
          >
            Continue With Google
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
