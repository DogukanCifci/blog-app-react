import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding-top: 100px;
  display: flex;
  align-items: center;
  background-color: aliceblue;
  .container {
    display: flex;
    .left-part {
      background-color: #100f0f;
      padding-top: 30px;
      border: 2px solid black;
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 30px;
      min-height: 100vh;
      img {
        width: 250px;
        height: 250px;
      }
      h3 {
        color: purple;
        font-size: 30px;
        margin-top: 20px;
        text-decoration: underline;
        font-style: italic;
      }
    }
    .right-part {
      padding: 30px 50px;
      h1 {
        margin-bottom: 100px;
        text-align: center;
      }
    }
  }
`;

export const MyLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  margin-top: 30px;
  text-align: center;
  transition: 1s;
  color: white;
  &:hover {
    color: orange;
    text-shadow: 10px 10px 10px red;
    transform: scale(1.1);
  }
`;

export const Info = styled.div`
  border-bottom: 1px solid gray;
  margin-bottom: 30px;
  span.info {
    margin-left: 100px;
    font-size: 20px;
    text-align: start;
  }
  div.label {
    color: purple;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
  }
`;
