import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { AddTechnologie } from "../helpers/functions";
import { Button, Div, Input, NewBlogContainer } from "../styles/NewBlogStyles";

const NewBlog = () => {
  //Useri yakalama
  const { user } = useContext(AuthContext);
  //Degiskenler
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [explain, setExplain] = useState("");

  //Güncel Tarih
  const date = new Date().toLocaleDateString("de-DE");
  console.log(date);
  console.log(user);
  //fonksiyon
  const newBlogSubmit = (e) => {
    e.preventDefault();
    AddTechnologie(title, imageUrl, explain, date);
  };
  return (
    <NewBlogContainer>
      <form onSubmit={newBlogSubmit}>
        <Div className="logo">
          <img
            src="https://www.transparentpng.com/thumb/technology/png-best-technology-6.png"
            alt=""
          />
          <h3>Add a New Technology</h3>
        </Div>
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
            <label htmlFor="explain">Explain</label>
            <textarea
              id="explain"
              className="tech-explain"
              required
              onChange={(e) => setExplain(e.target.value)}
            />
          </Div>
        </Div>
        <Button type="submit">Add New</Button>
      </form>
    </NewBlogContainer>
  );
};
export default NewBlog;
