import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import { Info, MyLink, ProfileContainer } from "../styles/ProfileStyles";

const Profile = () => {
  // const navigate = useNavigate();
  const [eslesenVeri, setEslesenVeri] = useState([]);
  const { user, setToggle } = useContext(AuthContext);
  console.log("user in Profile : ", user);
  const { currentUser } = useContext(AuthContext);
  console.log("New infos in Profile : ", currentUser);
  useEffect(() => {
    currentUser.map((element) => {
      return element.email === user.email && setEslesenVeri(element);
    });
  }, [currentUser, user.email]);

  console.log(eslesenVeri);
  const id = eslesenVeri.id;
  console.log(id);
  return (
    <ProfileContainer onClick={() => setToggle(false)}>
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
            <div className="label">Full Name </div>
            <span className="info">{user.userName}</span>
          </Info>
          <Info>
            <div className="label">Email</div>
            <span className="info">{user.email}</span>
          </Info>
          <Info>
            <div className="label">Created Date </div>
            <span className="info">{user.createdDate}</span>
          </Info>
          <Info>
            <div className="label">Last Login</div>
            <span className="info">{user.lastLogin}</span>
          </Info>
          <h1 style={{ marginTop: "60px" }}>Recent Project</h1>
          <Info>
            <div className="label">Project</div>
            <span className="info">{eslesenVeri.title}</span>
          </Info>
          <Info>
            <div className="label">Created Date</div>
            <span className="info">{eslesenVeri.date}</span>
          </Info>
          <Info>
            <div className="label">Edited Date</div>
            <span className="info">
              {eslesenVeri.editedDate ? eslesenVeri.editedDate : ""}
            </span>
          </Info>
          {/* <div onClick={() => navigate(`/details/${id}`)}>Go Project</div> */}
        </div>
      </div>
    </ProfileContainer>
  );
};
export default Profile;
