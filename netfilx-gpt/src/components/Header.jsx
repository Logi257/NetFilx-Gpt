import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LANGUAGE_PREFERENCE, LOGO, PHOTO_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between absolute w-full px-8 py-2 z-10 bg-linear-to-b from-black">
      <img src={LOGO} alt="logo" className="w-25 md:w-44 cursor-pointer" />

      {user && (
        <div className="flex p-2 items-center gap-5">
          <h5 className="font-bold text-white">{user?.displayName}</h5>

          <div className="flex gap-1 cursor-pointer">
            <img
              className="hidden md:block w-5 h-5 md:w-10 md:h-10 rounded-lg"
              src={PHOTO_URL}
              alt=""
            />
            <button
              className="font-bold text-white cursor-pointer text-[13px] md:text-[18px]"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
