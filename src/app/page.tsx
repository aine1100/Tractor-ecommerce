import Image from "next/image";
import Login from "./pages/option/page";
import SignUp from "./pages/singup/page";
import LoginPage from "./pages/login/page";
import ForgotPassword from "./pages/forgotPassword/page";
import ConfirmationEmail from "./pages/confirmEmail/page";
import NewPassword from "./pages/newPassword/page";
import UserPage from "./pages/userPage/page";
export default function Home() {
  return (
    <div className="bg-white">
    {/* <Login/> */}
    {/* <SignUp/> */}
    {/* <LoginPage/> */}
    {/* <ForgotPassword/> */}
    {/* <ConfirmationEmail/> */}
    {/* <NewPassword/> */}
    <UserPage/>
    </div>
  );
}
