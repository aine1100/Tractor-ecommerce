import Image from "next/image";
import Login from "./pages/option/page";
import SignUp from "./pages/singup/page";
import LoginPage from "./pages/login/page";
import ForgotPassword from "./pages/forgotPassword/page";
import ConfirmationEmail from "./pages/confirmEmail/page";
import NewPassword from "./pages/newPassword/page";
import UserPage from "./pages/userPage/page";
import Card from "./components/singleCard";
import UserMessage from "./components/message";
import SingleProduct from "./pages/singleProduct/page";
import UserProducts from "./pages/products/page";
import Delivery from "./pages/Delivery/page";
import Cart from "./pages/products/page";
import sellerDashboard from "./pages/Dashboard/page";
import Seller from "./pages/Dashboard/page";
import Admin from "./pages/Admin/page";
export default function Home() {
  return (
    <div className="bg-white">
    {/* <Login/> */}
    {/* <SignUp/> */}
    {/* <LoginPage/> */}
    {/* <ForgotPassword/> */}
    {/* <ConfirmationEmail/> */}
    {/* <NewPassword/> */}
    {/* <UserPage/> */}
    {/* <UserMessage/> */}
    {/* <SingleProduct/> */}
    {/* <UserProducts/> */}
    {/* <Delivery/> */}
    {/* <Seller/> */}
    <Admin/>
    

    </div>
  );
}
