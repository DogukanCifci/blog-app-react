import {
  Div,
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
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const Navbar = () => {
  //AuthContext'ten degiskenleri cekme
  const { user, setUser } = useContext(AuthContext);
  console.log(user);

  return (
    <MyNavbarContainer>
      <Link to="/">
        <LogoImg src={logoDogukan} />
      </Link>
      <NavbarRightPart>
        <span>{user.userName ? "Dogukan" : ""}</span>
        <Login to="/login" user={user}>
          Login
        </Login>
        <New to="/newblog" user={user}>
          Add New
        </New>
        <Logout to="/login" user={user}>
          Logout
        </Logout>
        <Register user={user} to="/register">
          Register
        </Register>
        <FaUser style={{ fontSize: "1.5rem", color: "white" }} />
      </NavbarRightPart>
    </MyNavbarContainer>
  );
};
export default Navbar;
