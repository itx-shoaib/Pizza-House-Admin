import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LiveOrders from "./components/LiveOrders";
import Orders from "./components/Orders";
import Customers from "./components/Customers";
import ChangePassword from "./components/ChangePassword";
import Share from "./components/Share";
import BulkSMS from "./components/BulkSMS";
import Coupons from "./components/Coupons";
import AddCoupon from "./components/AddCoupon";
import Menu from "./components/Menu";
import ItemManagement from "./components/ItemManagement";
import OrderDetail from "./components/OrderDetail";
import SigninPage from "./components/SigninPage";
import RegisterPage from "./components/RegisterPage";
import Settings from "./components/Settings";
import Resturants from "./components/Resturants";
import AddResturant from "./components/AddResturant";
import Pages from "./components/Pages";
import AddPage from "./components/AddPage";
import Report from "./components/Report";
import MyProfile from "./components/MyProfile";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Translations from "./components/Translations";
import Languages from "./components/Languages";
import AddLanguage from "./components/AddLanguage";
import AddTranslation from "./components/AddTranslation";
import Ranks from "./components/Ranks";
import AddRank from "./components/AddRank";
import EditRank from "./components/EditRank";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SigninPage />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/resetpassword/:email" element={<ResetPassword />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/resturant" element={<Resturants />}></Route>
        <Route path="/addresturant" element={<AddResturant />}></Route>
        <Route path="/home" element={<Dashboard />}></Route>
        <Route path="/liveorders" element={<LiveOrders />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/order-detail/:id/:cid" element={<OrderDetail />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/item-management/:itemid/:categoryid" element={<ItemManagement />}></Route>
        <Route path="/addpage/:ID" element={<AddPage />}></Route>
        <Route path="/setting/:id" element={<Settings/>}></Route>
        <Route path="/editrestuurant/:id" element={<Settings/>}></Route>
        <Route path="/coupon" element={<Coupons />}></Route>
        <Route path="/coupon/create" element={<AddCoupon />}></Route>
        <Route path="/bulksms" element={<BulkSMS />}></Route>
        <Route path="/share" element={<Share />}></Route>
        <Route path="/change-password" element={<ChangePassword />}></Route>
        <Route path="/pages" element={<Pages />}></Route>
        <Route path="/addpage" element={<AddPage />}></Route>
        <Route path="/report" element={<Report />}></Route>
        <Route path="/translations" element={<Translations />}></Route>
        <Route path="/languages" element={<Languages />}></Route>
        <Route path="/addlanguage" element={<AddLanguage />}></Route>
        <Route path="/addtranslation" element={<AddTranslation />}></Route>
        <Route path="/profile" element={<MyProfile />}></Route>
        <Route path="/ranks" element={<Ranks />}></Route>
        <Route path="/addrank" element={<AddRank />}></Route>
        <Route path="/editrank/:id" element={<EditRank />}></Route>
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        ></Route>{" "}
      </Routes>
    </>
  );
}

export default App;
