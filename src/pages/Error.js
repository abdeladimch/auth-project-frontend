import { Link } from "react-router-dom";
import notFoundImg from "../images/notFound.svg";

const Error = () => {
  return (
    <div className=" bg-slate-400 min-h-screen flex flex-col justify-center items-center gap-5">
      <img
        src={notFoundImg}
        alt="not found"
        className=" h-[300px] md:h-[400px] mb-12"
      />
      <Link to="/">
        <button
          type="button"
          className="bg-black px-3 py-2 font-bold text-white"
        >
          Back Home
        </button>
      </Link>
      ;
    </div>
  );
};

export default Error;
