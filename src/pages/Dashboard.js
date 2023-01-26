import { useDispatch } from "react-redux";
import { logout } from "../features/user/userSlice";
import dashbaordImg from "../images/dashboard.svg";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div className=" bg-slate-400 min-h-screen flex flex-col justify-center items-center gap-5">
      <img
        src={dashbaordImg}
        alt="dashboard"
        className=" h-[300px] md:h-[400px] mb-12"
      />
      <button
        type="button"
        className="bg-black px-3 py-2 font-bold text-white"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
      ;
    </div>
  );
};

export default Dashboard;
