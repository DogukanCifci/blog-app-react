import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

import {
  Button,
  ButtonContainer,
  DetailsContainer,
  Div,
  UpdateButton,
} from "../styles/DetailsStyles";

const Details = () => {
  const { currentUser, user } = useContext(AuthContext);
  console.log("CURRENT USER : ", currentUser);
  //1.YOL USEPARAMSILE IDYI YAKALAYIP SONRA TÜM ELEMANLARIN IDSINI KARSILASTIRIP SADECE ID'SI TUTANIN ÖZELLIKLERINI GÖSTER
  //burdaki id Router'da yazdigimkeyword ile ayni olmak zorunda
  /* const { id } = useParams();
  console.log(id); */
  //contact listi buraya state olarak alip icinde map ile gezinmeliyim.

  //==============

  //2.YOL ==> STATE ILE BLOGCARD'DAN ELEMENTI DIREK GÖNDERIP BURADA USELOCATION ILE YAKALAMAK

  const location = useLocation();
  const item = location.state.element;
  console.log(item);
  const { date, email, id, imageUrl, text, title } = item;
  return (
    <DetailsContainer>
      <Div>
        <img src={imageUrl} alt="" />
        <h1>{title}</h1>
        <Div
          style={{
            backgroundColor: "white",
            padding: "15px",
            width: "100%",
            marginInline: "auto",
            border: "none",
          }}
        >
          <p>{text}</p>
          <p>
            <span style={{ color: "purple" }}>Publish Date :</span> {date}
          </p>
          <p>
            <span style={{ color: "purple" }}>Author :</span> {email}
          </p>
        </Div>
        {user.email === email ? (
          <ButtonContainer>
            <Button>Delete</Button>
            <UpdateButton>Update</UpdateButton>
          </ButtonContainer>
        ) : (
          ""
        )}
      </Div>
    </DetailsContainer>
  );
};
export default Details;
