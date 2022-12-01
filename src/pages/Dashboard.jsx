import { useContext } from "react";
import BlogCard from "../components/BlogCard";
import { AuthContext } from "../context/AuthContextProvider";
import { MyUseFetch } from "../helpers/functions";
import { DashboardContainer, DashboardDiv } from "../styles/DashboardStyles";

const Dashboard = () => {
  const { isLoading, contactList } = MyUseFetch();
  const { setCurrentUser, currentUser } = useContext(AuthContext);
  console.log(contactList);
  //Bu alttaki yöntem de kullanilabilir
  /* useEffect(() => {
    console.log(contactList);
  }, [contactList]); */
  setCurrentUser(contactList);
  console.log("newinfos : ", currentUser);
  return (
    <DashboardDiv>
      <DashboardContainer contactList={contactList}>
        {contactList ? (
          contactList.map((element, idx) => {
            return (
              <BlogCard key={idx} element={element} isLoading={isLoading} />
            );
          })
        ) : (
          <div className="loading-gif">
            <img src="https://media.tenor.com/6gHLhmwO87sAAAAi/gg.gif" alt="" />
          </div>
        )}
      </DashboardContainer>
    </DashboardDiv>
  );
};
export default Dashboard;
