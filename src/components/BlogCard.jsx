import { BlogCardContainer, Div } from "../styles/BlogCard";

const BlogCard = ({ element }) => {
  const { title, date, imageUrl, text, username, email } = element;
  return (
    <BlogCardContainer>
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
