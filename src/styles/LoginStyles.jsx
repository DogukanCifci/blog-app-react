import styled from "styled-components";
export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  min-height: 100vh;
  background-color: aliceblue;
`;
export const LoginLeftPart = styled.div`
  width: 50%;
`;
export const LeftImg = styled.img`
  width: 100%;
  border-radius: 30%;
`;

export const LoginRightPart = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  padding: 0 20px;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
  background-color: #dc3535;
`;

//=========INPUT STYLES =========
export const Input = styled.input`
  padding: 10px 10px 10px 40px;
  border: none;
  border-radius: 4px;
  font: inherit;
  outline: 2px solid #fff;
  width: 400px;
  font-size: 18px;
  @media (max-width: 866px) {
    width: 300px;
  }
  @media (max-width: 650px) {
    width: 200px;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  .icon {
    position: absolute;
    left: 5px;
    bottom: 6px;
    font-size: 28px;
    color: #f49d1a;
  }
  label {
    font-weight: 800;
  }
`;

// =========BUTTON STYLES
export const ButtonContainer = styled.div`
  position: relative;
  padding: 20px 50px;
  display: block;
  width: 200px;
  overflow: hidden;
  border-radius: 40px;
  margin: 20px auto;
  .liquid {
    position: absolute;
    top: -80px;
    left: 0;
    width: 200px;
    height: 200px;
    background-color: #f49d1a;

    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  }
  &:hover {
    cursor: pointer;
    transform: scale(0.8);
    transition: 0.7s;
    filter: grayscale(1);
  }
`;
export const Button = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 6px;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;

//======SPAN GROUP
export const SpanGroup = styled.div`
  margin: 18px 0;
  display: flex;
  justify-content: space-between;
  span {
    &:hover {
      cursor: pointer;
    }
  }
`;
