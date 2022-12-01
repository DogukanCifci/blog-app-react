import styled from "styled-components";

export const DashboardDiv = styled.div`
  //  background-image: url("https://images.pexels.com/photos/327509/pexels-photo-327509.jpeg?auto=compress&cs=tinysrgb&w=4000");
  background-image: url("https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&w=4000");
  padding-top: 110px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    text-align: center;
    padding: 20px;
    color: purple;
  }
  .loading-gif {
    margin-inline: auto;
  }
`;
export const DashboardContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
