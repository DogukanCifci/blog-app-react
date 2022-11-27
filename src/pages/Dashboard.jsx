import BlogCard from "../components/BlogCard";
import { MyUseFetch } from "../helpers/functions";
import { DashboardContainer } from "../styles/DashboardStyles";

const Dashboard = () => {
  const { isLoading, contactList } = MyUseFetch();
  console.log(contactList);
  //Bu alttaki yöntem de kullanilabilir
  /* useEffect(() => {
    console.log(contactList);
  }, [contactList]); */

  return (
    <DashboardContainer>
      {contactList?.map((element, idx) => {
        return <BlogCard key={idx} element={element} isLoading={isLoading} />;
      })}
    </DashboardContainer>
  );
};
export default Dashboard;
