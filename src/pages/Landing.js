import { Link } from "react-router-dom";
import landingImg from "../images/landing.svg";

const Landing = () => {
  return (
    <div className="bg-slate-400">
      <div className="container min-h-screen flex flex-col lg:flex-row justify-center items-center gap-12 py-5">
        <img
          src={landingImg}
          alt="landing page"
          className=" w-[400px] md:w-[490px] lg:w-[475px]"
        />
        <div className="flex flex-col justify-center gap-3 text-center lg:text-start ">
          <h1 className="text-2xl text-white font-bold">
            Welcome to Auth Project!
          </h1>
          <p className="text-md w-[400px] md:w-[500px]">
            It's just a simple project that I created using React and styled it
            with Tailwindcss. My goal from this project was to practise some
            advanced React concepts and their implementation, such as of
            authentication, local storage, redirection, routes, protected
            resources and more!
          </p>
          <Link to="/register">
            <button type="button" className="bg-black px-3 py-2  text-white">
              Login/Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
