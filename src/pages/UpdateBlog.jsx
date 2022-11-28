import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UpdateTechnologie } from "../helpers/functions";
import {
  Button,
  UpdateBlogContainer,
  Div,
  Input,
} from "../styles/UpdateBlogStyles";

const UpdateBlog = () => {
  const navigate = useNavigate();
  //Degiskenlerin AuthContexten Cekilmesi
  //Güncel Tarih
  /* console.log(date);
  console.log(user); */

  ////======BASLANGIC=========
  /* const { id } = useParams();
  console.log("ID: ", id); */
  const editedDate = new Date().toLocaleDateString("de-DE");

  //state ile gönderilen infoyu yakalama
  const location = useLocation();
  const detail = location.state.item;
  const { id, date, email, imageUrl, text, title, username } = detail;
  console.log(detail);
  const [newTitle, setNewTitle] = useState(`${title}`);
  const [newImageUrl, setNewImageUrl] = useState(`${imageUrl}`);
  const [newContent, setNewContent] = useState(`${text}`);
  //FONKSIYONLAR
  useEffect(() => {
    fetch("https://blog-app-bdac3-default-rtdb.firebaseio.com/.json")
      .then((response) => response.json())
      .then((data) => console.log("DATAAAAA : ", data));
  }, []);
  const UpdateClicked = () => {
    UpdateTechnologie(
      id,
      newTitle,
      newImageUrl,
      newContent,
      date,
      email,
      username,
      editedDate,
      navigate
    );
  };
  return (
    <UpdateBlogContainer>
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
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
          </Div>
          <Div className="input-groups">
            <label htmlFor="image-url">Image URL</label>
            <Input
              type="search"
              placeholder="Image URL"
              id="image-url"
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              required
            />
          </Div>
          <Div className="input-groups">
            <label htmlFor="explain">Content</label>
            <textarea
              id="explain"
              className="tech-explain"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
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
