import styled from "styled-components";

export const BlogCardContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 500px;
  background-color: white;
  text-align: center;
  border-radius: 20%;
  .text {
    overflow: hidden;
    padding: 10px 5px;
    height: 50px;
    p {
      color: black;
    }
  }
`;

export const Div = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  p {
    color: #b01e68;
  }
  img {
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 20%;
    border-top-right-radius: 20%;
  }
  h2 {
    background-color: aliceblue;
    padding: 10px 0;
    color: #dc3535;
  }
`;
