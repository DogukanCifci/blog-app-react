import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify } from "../helpers/toastNotify";
import { BlogCardContainer, Div } from "../styles/BlogCardStyles";
import { AuthContext } from "../context/AuthContextProvider";

const BlogCard = ({ element }) => {
  const { user } = useContext(AuthContext);
  const { id, title, date, imageUrl, text, username, email } = element;
  //FONKSIYON
  const navigate = useNavigate();
  const getCardDetails = () => {
    navigate(`/details/${id}`, { state: { element } });
    !user.userName && toastErrorNotify("Please Login Firstly!");
  };

  return (
    <BlogCardContainer onClick={() => getCardDetails()}>
      <Div>
        <img
          src="https://images.pexels.com/photos/12704642/pexels-photo-12704642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </Div>
      <Div>
        <h2>{title}</h2>
      </Div>
      <Div className="text">
        <p>{text}</p>
      </Div>
      <Div>
        <p>Author : {email}</p>
      </Div>
      <Div>
        <p>Published Date : {date}</p>
      </Div>
    </BlogCardContainer>
  );
};
export default BlogCard;
