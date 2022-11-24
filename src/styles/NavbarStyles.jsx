import { Link } from "react-router-dom";
import styled from "styled-components";

export const MyNavbarContainer = styled.div`
  width: 100%;
  background-color: blue;
  color: white;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const LogoImg = styled.img`
  width: 120px;
`;

export const NavbarRightPart = styled.div`
  display: flex;
  gap: 10px;
`;

export const Div = styled(Link)`
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    color: red;
  }
`;

export const Login = styled(Div)`
  display: ${({ user }) => (user.userName ? "none" : "block")};
`;
export const Logout = styled(Div)`
  display: ${({ user }) => (user.userName ? "block" : "none")};
`;
export const Register = styled(Div)`
  display: ${({ user }) => (user.userName ? "none" : "block")};
`;
export const New = styled(Div)`
  display: ${({ user }) => (user.userName ? "block" : "none")};
`;