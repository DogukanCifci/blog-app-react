import styled from "styled-components";

export const DetailsContainer = styled.div`
  background-image: url("https://images.pexels.com/photos/326506/pexels-photo-326506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  //background-image: url("https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ffff00;
  width: 100%;
  min-height: 100vh;
  color: red;
  padding: 120px 20px;
`;

export const Div = styled.div`
  border: 3px solid purple;
  text-align: center;
  margin-inline: auto;
  width: 45%;
  border-radius: 50px;

  img {
    width: 100%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }
  p {
    margin-top: 30px;
    color: black;
    font-weight: 700;
    font-size: 18px;
    overflow: auto;
    font-family: "Nerko One", cursive;
    letter-spacing: 2px;
  }
  h1 {
    margin-bottom: 30px;
    background-color: white;
    padding: 40px;
    opacity: 0.6;
    color: red;
    font-family: "Rubik Microbe", cursive;
    font-weight: 900;
    font-size: 38px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: red;
  padding: 20px 40px;
  border-radius: 20px;
  opacity: 0.6;
  transition: all 0.5s ease-in-out;
  margin: 20px;
  font-weight: 600;
  font-size: 18px;
  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const UpdateButton = styled(Button)`
  background-color: green;
`;

export const ButtonContainer = styled.div``;
