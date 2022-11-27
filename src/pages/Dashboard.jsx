import BlogCard from "../components/BlogCard";
import { MyUseFetch } from "../helpers/functions";
import { DashboardContainer, DashboardDiv } from "../styles/DashboardStyles";

const Dashboard = () => {
  const { isLoading, contactList } = MyUseFetch();
  console.log(contactList);
  //Bu alttaki yöntem de kullanilabilir
  /* useEffect(() => {
    console.log(contactList);
  }, [contactList]); */

  return (
    <DashboardDiv>
      <h1>---------- DASHBOARD ----------</h1>
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
