import { MyUseFetch } from "../helpers/functions";

const Dashboard = () => {
  const { isLoading, contactList } = MyUseFetch();
  const dashboardSubmit = () => {
    console.log(contactList);
  };
  return (
    <div>
      <button onClick={() => dashboardSubmit()}>GET</button>
    </div>
  );
};
export default Dashboard;
