import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: aliceblue;

  .container {
    display: flex;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
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
      @media (max-width: 1000px) {
        margin-inline: auto;
      }
      img {
        width: 250px;
        height: 250px;
      }
      h3 {
        color: #f94c66;
        font-size: 30px;
        margin-top: 20px;
        text-decoration: underline;
        font-style: italic;
      }
    }
    .right-part {
      min-width: 500px;
      padding: 30px 50px;
      margin: 0 100px;
      h1 {
        margin-bottom: 50px;
        text-align: center;
        color: #839aa8;
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
    font-size: 20px;
    margin-left: 10px;
    text-align: start;
    font-weight: 700;
  }
  div.label {
    color: purple;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;
