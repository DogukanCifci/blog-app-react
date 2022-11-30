import {
  Login,
  LogoImg,
  Logout,
  MiddleNav,
  MyNavbarContainer,
  NavbarRightPart,
  New,
  Profile,
  Register,
  YaziPart,
} from "../styles/NavbarStyles";
import logoDogukan from "../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { logOut } from "../helpers/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  //AuthContext'ten degiskenleri cekme
  const { user, setUser, toggle, setToggle } = useContext(AuthContext);
  console.log(user);
  console.log(toggle);
  return (
    <MyNavbarContainer>
      <Link to="/" onClick={() => setToggle(false)}>
        <LogoImg src={logoDogukan} />
      </Link>
      <MiddleNav>
        <h1>{"< BLOG PAGE />"}</h1>
      </MiddleNav>
      <NavbarRightPart>
        <span className="user-name"> {user ? user.userName : ""}</span>
        <YaziPart toggle={toggle} user={user} onClick={() => setToggle(false)}>
          <Login to="/login" user={user}>
            Login
          </Login>
          <Profile to="/profile" user={user}>
            Profile
          </Profile>
          <New to="/newblog" user={user}>
            Add New
          </New>
          <Logout
            to="/login"
            user={user}
            onClick={() => logOut(setUser, navigate)}
          >
            Logout
          </Logout>
          <Register user={user} to="/register">
            Register
          </Register>
        </YaziPart>
        <img
          src="https://cdn-icons-png.flaticon.com/512/186/186313.png"
          alt=""
          onClick={() => setToggle(!toggle)}
        />
        {/* <FaUser  style={{ fontSize: "1.5rem", color: "#FF6D28" }} /> */}
      </NavbarRightPart>
    </MyNavbarContainer>
  );
};
export default Navbar;
