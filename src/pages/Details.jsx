import { useLocation, useParams } from "react-router-dom";

const Details = () => {
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
  return <div>DETAILS</div>;
};
export default Details;
