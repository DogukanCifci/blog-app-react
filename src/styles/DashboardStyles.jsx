import styled from "styled-components";

export const DashboardDiv = styled.div`
  h1 {
    background-color: #f49d1a;
    text-align: center;
    padding: 20px;
    color: purple;
  }
  .loading-gif {
    margin-inline: auto;
  }
`;
export const DashboardContainer = styled.div`
  background-color: ${({ contactList }) => (contactList ? "#f49d1a" : "white")};
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
