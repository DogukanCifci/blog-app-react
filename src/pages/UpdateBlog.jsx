import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import { UpdateTechnologie } from "../helpers/functions";
import {
  Button,
  UpdateBlogContainer,
  Div,
  Input,
} from "../styles/UpdateBlogStyles";

const UpdateBlog = () => {
  const navigate = useNavigate();
  const { setToggle } = useContext(AuthContext);
  //Degiskenlerin AuthContexten Cekilmesi
  //Güncel Tarih
  /* console.log(date);
  console.log(user); */
  /*  const { id } = useParams();
  console.log(id); */
  ////======BASLANGIC=========
  const location = useLocation();
  const element = location.state.item;

  const [title, setTitle] = useState(element.title);
  const [imageUrl, setImageUrl] = useState(element.imageUrl);
  const [text, setText] = useState(element.text);
  console.log(element);

  const editedDate = new Date().toLocaleDateString("de-DE");

  //state ile gönderilen infoyu yakalama

  //FONKSIYONLAR

  const UpdateClicked = () => {
    UpdateTechnologie(
      element.id,
      title,
      imageUrl,
      text,
      element.date,
      element.email,
      element.username,
      editedDate,
      navigate
    );
  };
  return (
    <UpdateBlogContainer onClick={() => setToggle(false)}>
      <form>
        <Div className="logo">
          <h3>UPDATE PAGE</h3>
        </Div>
        <Div className="input-container">
          <Div className="input-groups">
            <label htmlFor="title">Title</label>
            <Input
              type="search"
              placeholder="Title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Div>
          <Div className="input-groups">
            <label htmlFor="image-url">Image URL</label>
            <Input
              type="search"
              placeholder="Image URL"
              id="image-url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </Div>
          <Div className="input-groups">
            <label htmlFor="explain">Content</label>
            <textarea
              id="explain"
              className="tech-explain"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </Div>
        </Div>
        <Button onClick={() => UpdateClicked()}>Update</Button>
      </form>
    </UpdateBlogContainer>
  );
};
export default UpdateBlog;
