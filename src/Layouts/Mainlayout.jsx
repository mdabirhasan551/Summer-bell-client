import { Outlet } from "react-router-dom";
import Navigation from "../Pages/Home/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";

const Mainlayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Mainlayout;
