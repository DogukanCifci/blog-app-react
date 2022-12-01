import styled from "styled-components";

export const NewBlogContainer = styled.div`
  display: flex;
  background-color: #bad1c2;
  form {
    width: 80%;
    min-height: 100vh;
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #bad1c2;
    padding-bottom: 30px;
  }

  .input-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 5px;
    gap: 10px;
  }
  .logo {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 300px;
    img {
      height: 500px;
      transform: rotate(270deg);
    }
    h3 {
      font-size: 30px;
      text-align: center;
      margin-bottom: 20px;
      color: #00abb3;
      font-family: "Nerko One", cursive;
    }
  }
`;

export const Div = styled.div`
  .input-groups {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 5px;

    label {
      font-weight: 800;
      color: #0e5e6f;
      font-size: 22px;
      margin-bottom: 10px;
      font-family: "Nerko One", cursive;
    }
  }
  .tech-explain {
    height: 300px;
    max-width: 100%;
    padding: 10px 0 0 10px;
    border: 2px solid orange;
    min-width: 100%;
    border: none;
    border-radius: 10px;
    font-family: "Nerko One", cursive;
    font-size: 18px;
  }
`;

export const Input = styled.input`
  height: 40px;
  padding-left: 15px;
  font-size: 18px;
  border: 2px solid orange;
  border: none;
  border-radius: 10px;
  font-family: "Nerko One", cursive;
`;

export const Button = styled.button`
  width: 110px;
  height: 50px;
  margin-top: 20px;
  background-color: orange;
  border: none;
  border-radius: 10px;
  transition: 1s;
  font-size: 18px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
    transform: scale(1.3);
    transform: rotate(360deg);
    background-color: blue;
    color: white;
  }
`;
