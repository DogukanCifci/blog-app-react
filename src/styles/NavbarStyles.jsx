import { Link } from "react-router-dom";
import styled from "styled-components";

export const MyNavbarContainer = styled.div`
  width: 100%;
  background-color: #153462;
  opacity: 0.8;
  color: white;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: fixed;
  z-index: 1;
`;

export const LogoImg = styled.img`
  width: 200px;
`;
export const MiddleNav = styled.div`
  font-size: 24px;
  font-weight: 600;
  background-image: linear-gradient(to left, #b01e68, #ffe15d);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  @media (max-width: 1030px) {
    font-size: 20px;
  }
  @media (max-width: 900px) {
    font-size: 12px;
  }
  @media (max-width: 900px) {
    font-size: 12px;
  }
  @media (max-width: 810px) {
    display: none;
  }
`;
export const NavbarRightPart = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
  img {
    width: 75px;
    margin-right: 15px;
    height: 75px;
    &:hover {
      cursor: pointer;
    }
  }
  .user-name {
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 20px;
  }
`;

export const YaziPart = styled.div`
  display: ${({ toggle }) => (toggle ? "block" : "none")};
  background-color: black;
  border-radius: 15px;
  padding: 15px;
  width: 150px;
  position: absolute;
  top: 90px;
  right: 0px;
  height: 150px;
`;

export const Div = styled(Link)`
  font-size: 1.6rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    color: #ff6d28;
  }
`;

export const Login = styled(Div)`
  display: ${({ user }) => (user.userName ? "none" : "block")};
  margin-bottom: 10px;
`;
export const Logout = styled(Div)`
  display: ${({ user }) => (user.userName ? "block" : "none")};
`;
export const Register = styled(Div)`
  display: ${({ user }) => (user.userName ? "none" : "block")};
`;
export const New = styled(Div)`
  display: ${({ user }) => (user.userName ? "block" : "none")};
  margin-bottom: 10px;
`;
export const Profile = styled(Div)`
  display: ${({ user }) => (user.userName ? "block" : "none")};
  margin-bottom: 10px;
`;
