import {
  Login,
  LogoImg,
  Logout,
  MyNavbarContainer,
  NavbarRightPart,
  New,
  Register,
} from "../styles/NavbarStyles";
import logoDogukan from "../assets/logo.png";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { logOut } from "../helpers/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  //AuthContext'ten degiskenleri cekme
  const { user, setUser } = useContext(AuthContext);
  console.log(user);

  return (
    <MyNavbarContainer>
      <Link to="/">
        <LogoImg src={logoDogukan} />
      </Link>
      <NavbarRightPart>
        <span>{user ? user.userName : ""}</span>
        <Login to="/login" user={user}>
          Login
        </Login>
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
        <FaUser style={{ fontSize: "1.5rem", color: "#FF6D28" }} />
      </NavbarRightPart>
    </MyNavbarContainer>
  );
};
export default Navbar;
