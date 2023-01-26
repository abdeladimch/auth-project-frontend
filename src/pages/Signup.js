import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUser, signupUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    isMember: false,
  });
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMembership = () => {
    setUserData({ ...userData, isMember: !userData.isMember });
  };

  const onSubmitHandler = (e) => {
    const { name, email, password, isMember } = userData;
    e.preventDefault();
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields!");
      return;
    }
    if (isMember) {
      return dispatch(loginUser({ email, password }));
    }
    dispatch(signupUser({ name, email, password }));
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user, navigate]);

  return (
    <div className="bg-slate-400 min-h-screen flex justify-center items-center">
      <form
        onSubmit={onSubmitHandler}
        className="flex gap-6 flex-col m-0-auto w-80 bg-black px-3 py-7 rounded-md shadow-lg"
      >
        <h1 className="text-center text-[38px] text-white">
          {userData.isMember ? "Login" : "Signup"}
        </h1>
        {!userData.isMember && (
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={onChangeHandler}
              className="outline-none p-1 shadow-md"
            />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={onChangeHandler}
            className="outline-none p-1 shadow-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={onChangeHandler}
            className="outline-none p-1 shadow-md"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-600 text-white px-3 py-2 font-bold hover:scale-105 hover:bg-opacity-75 transition ease-out duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <div className="text-white justify-center flex gap-3">
          <p>{userData.isMember ? "Not a member yet?" : "Already a member?"}</p>
          <button
            type="button"
            onClick={toggleMembership}
            className="text-blue-500"
          >
            {userData.isMember ? "signup" : "login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
