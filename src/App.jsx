import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.scss";
import "animate.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Partner from "./components/Partner/Partner";
import ApplyPartner from "./components/Partner/ApplyPartner";
import Rider from "./components/Rider/Rider";
import PartnerPanel from "./components/Partner/PartnerPanel/PartnerPanel";
import Admin from "./components/Admin/admin";
import PageNotFound from "./Page/404-page";
import Sidebar from "./components/Admin/sidebar/sidebar";
import Users from "./components/Admin/Users/users";
import Profile from "./components/Profile/Profile";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";
import Checkout from "./components/Checkout/Checkout";
import HomePage from "./Page/HomePage";
import RestaurantPage from "./Page/RestaurantPage";
import Thanks from "./Page/ThanksPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Rider" element={<Rider />} />
        <Route path="/Partner" element={<Partner />} />
        <Route path="/Restaurants" element={<RestaurantPage />} />
        <Route path="/RestaurantMenu" element={<RestaurantDetails />} />
        <Route path="/ApplyPartner" element={<ApplyPartner />} />
        <Route path="/PartnerPanel" element={<PartnerPanel />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/done" element={<Thanks />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
