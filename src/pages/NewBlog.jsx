import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import { AddTechnologie } from "../helpers/functions";
import { Button, Div, Input, NewBlogContainer } from "../styles/NewBlogStyles";

const NewBlog = () => {
  //Useri yakalama
  const { user, setToggle } = useContext(AuthContext);
  const navigate = useNavigate();
  //Degiskenler
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [explain, setExplain] = useState("");

  //Güncel Tarih
  const date = new Date().toLocaleDateString("de-DE");
  /* console.log(date);
  console.log(user); */

  //FONKSIYONLAR
  const newBlogSubmit = (e) => {
    e.preventDefault();
    AddTechnologie(title, imageUrl, explain, date, user, navigate);
  };
  return (
    <NewBlogContainer onClick={() => setToggle(false)}>
      <Div className="logo">
        <img
          src="https://www.transparentpng.com/thumb/technology/png-best-technology-6.png"
          alt=""
        />
        {/* <h3>Add a New Technology</h3> */}
      </Div>
      <form onSubmit={newBlogSubmit}>
        <Div className="input-container">
          <Div className="input-groups">
            <label htmlFor="title">Title</label>
            <Input
              type="search"
              placeholder="Title"
              id="title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </Div>
          <Div className="input-groups">
            <label htmlFor="image-url">Image URL</label>
            <Input
              type="search"
              placeholder="Image URL"
              id="image-url"
              required
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </Div>
          <Div className="input-groups">
            <label htmlFor="explain">Content</label>
            <textarea
              id="explain"
              className="tech-explain"
              required
              onChange={(e) => setExplain(e.target.value)}
              placeholder="Content"
            />
          </Div>
        </Div>
        <Button type="submit">Add New</Button>
      </form>
    </NewBlogContainer>
  );
};
export default NewBlog;
