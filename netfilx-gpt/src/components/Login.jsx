import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="h-screen bg-cover bg-center bg-[linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.3),rgba(0,0,0,0.85)),url('https://assets.nflxext.com/ffe/siteui/vlv3/c81956f1-5750-454c-9b3c-7a4d990d3d06/web/IN-en-20251208-TRIFECTA-perspective_d69f5f82-9a35-45d7-a7b6-9af6e0643bf5_small.jpg')]">
        <form className="bg-black/65 w-4/12 p-12 absolute mx-auto my-26 right-0 left-0 text-white rounded-lg">
          <h1 className="font-bold text-3xl py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              className="p-4 my-2 w-full bg-transparent border rounded-[5px]"
              placeholder="Full Name"
            />
          )}
          <input
            type="text"
            className="p-4 my-2 w-full bg-transparent border rounded-[5px]"
            placeholder="Email or mobile number"
          />
          <input
            type="text"
            className="p-4 my-2 w-full bg-transparent border rounded-[5px]"
            placeholder="Password"
          />
          <button className="p-2 font-bold my-4 bg-red-700 w-full rounded-[5px]">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="cursor-pointer" onClick={toggleSignInForm}>
            {isSignIn
              ? "New to Netfilx? Sign Up now"
              : "Already Registered? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
