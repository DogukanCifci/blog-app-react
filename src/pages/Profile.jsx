import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Info, MyLink, ProfileContainer } from "../styles/ProfileStyles";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <ProfileContainer>
      <div className="container">
        <div className="left-part">
          <img
            src="https://www.pngarts.com/files/11/Avatar-PNG-Download-Image.png"
            alt=""
          />
          <h3>{user.userName}</h3>
          <MyLink to="/">Home</MyLink>
          <MyLink to="/newblog">Add New Blog</MyLink>
        </div>
        <div className="right-part">
          <h1>About</h1>
          <Info>
            <span className="label">Full Name </span>
            <span className="info">{user.userName}</span>
          </Info>
          <Info>
            <span className="label">Email</span>
            <span className="info">{user.email}</span>
          </Info>
          <h1 style={{ marginTop: "60px" }}>Recent Project</h1>
        </div>
      </div>
    </ProfileContainer>
  );
};
export default Profile;
