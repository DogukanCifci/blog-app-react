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
  transition: 0.5s;
  .text {
    overflow: hidden;
    padding: 10px 5px;
    height: 70px;
    p {
      color: black;
    }
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Div = styled.div`
  position: relative;
  margin-bottom: 10px;
  font-weight: 600;

  .publish-date {
    position: absolute;
    top: 60px;
    right: 140px;
  }

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
