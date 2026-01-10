import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();
    const message = isSignIn
      ? checkValidData("", email.current.value, password.current.value)
      : checkValidData(
          name.current.value,
          email.current.value,
          password.current.value
        );
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/125880059?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="h-screen bg-cover bg-center bg-[linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.3),rgba(0,0,0,0.85)),url('https://assets.nflxext.com/ffe/siteui/vlv3/c81956f1-5750-454c-9b3c-7a4d990d3d06/web/IN-en-20251208-TRIFECTA-perspective_d69f5f82-9a35-45d7-a7b6-9af6e0643bf5_small.jpg')]">
        <form
          onSubmit={handleForm}
          className="bg-black/65 w-[95%] md:w-4/12 p-12 absolute  mx-auto my-23 right-0 left-0 text-white rounded-lg"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              className="p-4 my-2 w-full bg-transparent border rounded-[5px]"
              placeholder="Full Name"
              required
            />
          )}
          <input
            ref={email}
            type="text"
            className="p-4 my-2 w-full bg-transparent border rounded-[5px]"
            placeholder="Email"
            required
          />
          <input
            ref={password}
            type="password"
            className="p-4 my-2 w-full bg-transparent border rounded-[5px]"
            placeholder="Password"
            required
          />
          <p className="text-red-500 font-bold">{errorMessage}</p>
          <button
            className="p-2 font-bold my-4 bg-red-700 w-full rounded-[5px] cursor-pointer"
            type="submit"
          >
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
