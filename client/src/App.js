import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, React, useReducer } from "react";
import "./App.css";

import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Domestic from "./Components/domestic/Domestic.jsx";
import International from "./Components/international/International.jsx";
import Blog1 from "./Components/Single-Blog-pages/Blog1";
import Blog2 from "./Components/Single-Blog-pages/Blog2";
import Blog3 from "./Components/Single-Blog-pages/Blog3";
import Blog4 from "./Components/Single-Blog-pages/Blog4";
import Blogs from "./Components/Blog/Blogs";

import Ladakh from "./Components/domesticPackages/Ladakh";
import Goa from "./Components/domesticPackages/Goa";
import Kerala from "./Components/domesticPackages/Kerala";
import Guwahati from "./Components/domesticPackages/Guwahati";
import Andaman from "./Components/domesticPackages/Andaman";
import Hyderabad from "./Components/domesticPackages/Hyderabad";
import Kashmir from "./Components/domesticPackages/Kashmir";
import Rajasthan from "./Components/domesticPackages/Rajasthan";
import Shimla from "./Components/domesticPackages/Shimla";
import Sikkim from "./Components/domesticPackages/Sikkim";
import ArunachalPradesh from "./Components/domesticPackages/ArunachalPradesh";
import Uttarakhand from "./Components/domesticPackages/Uttarakhand";
import TamilNadu from "./Components/domesticPackages/TamilNadu";
import Bangalore from "./Components/domesticPackages/Bangalore";
import Darjeeling from "./Components/domesticPackages/Darjeeling";
import HimachalPradesh from "./Components/domesticPackages/HimachalPradesh";
import Punjab from "./Components/domesticPackages/Punjab";

import Australia from "./Components/internationalPackages/Australia";
import Bali from "./Components/internationalPackages/Bali";
import Colombo from "./Components/internationalPackages/Colombo";
import Dubai from "./Components/internationalPackages/Dubai";
import Japan from "./Components/internationalPackages/Japan";
import Malaysia from "./Components/internationalPackages/Malaysia";
import Maldives from "./Components/internationalPackages/Maldives";
import Mauritius from "./Components/internationalPackages/Mauritius";
import Singapore from "./Components/internationalPackages/Singapore";
import SouthAfrica from "./Components/internationalPackages/SouthAfrica";
import Amsterdam from "./Components/internationalPackages/Amsterdam";
import Hawaii from "./Components/internationalPackages/Hawaii";
import Nepal from "./Components/internationalPackages/Nepal";
import Santorini from "./Components/internationalPackages/Santorini";
import Turkey from "./Components/internationalPackages/Turkey";

import Form from "./Components/Form/Form";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Users from "./Components/Admin/Users/Users";
import ViewPackages from "./Components/Admin/Packages/ViewPackages/ViewPackages";
import AddPackage from "./Components/Admin/Packages/AddPackage/AddPackage";
import AdminBlogs from "./Components/Admin/AdminBlogs/AdminBlogs";
import Bookings from "./Components/Admin/Bookings/Bookings";
import Support from "./Components/Admin/Support/Support";
import AdminLogin from "./Components/Admin/AdminLogin/AdminLogin";

import { reducer, initialState } from "./reducer/useReducer.js";
export const UserContext = createContext();
export const adminn=()=>false;

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (

    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/domestic" element={<Domestic />}></Route>
            <Route exact path="/international" element={<International />}></Route>
            <Route exact path="/login" element={state ? <Home /> : <LogIn />}></Route>
            <Route exact path="/signup" element={state ? <Home /> : < SignUp />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/about" element={<About />}></Route>

            {/* links of blogs */}
            <Route exact path="/blogs" element={<Blogs />}></Route>
            <Route exact path="/blog1" element={<Blog1 />}></Route>
            <Route exact path="/blog2" element={<Blog2 />}></Route>
            <Route exact path="/blog3" element={<Blog3 />}></Route>
            <Route exact path="/blog4" element={<Blog4 />}></Route>

            {/* links of domestic packages */}
            <Route exact path="/ladakh" element={<Ladakh />}></Route>
            <Route exact path="/goa" element={<Goa />}></Route>
            <Route exact path="/kerala" element={<Kerala />}></Route>
            <Route exact path="/guwahati" element={<Guwahati />}></Route>
            <Route exact path="/andaman" element={<Andaman />}></Route>
            <Route exact path="/hyderabad" element={<Hyderabad />}></Route>
            <Route exact path="/kashmir" element={<Kashmir />}></Route>
            <Route exact path="/rajasthan" element={<Rajasthan />}></Route>
            <Route exact path="/shimla" element={<Shimla />}></Route>
            <Route exact path="/sikkim" element={<Sikkim />}></Route>
            <Route exact path="/arunachalpradesh" element={<ArunachalPradesh />}></Route>
            <Route exact path="/uttarakhand" element={<Uttarakhand />}></Route>
            <Route exact path="/tamilnadu" element={<TamilNadu />}></Route>
            <Route exact path="/bangalore" element={<Bangalore />}></Route>
            <Route exact path="/darjeeling" element={<Darjeeling />}></Route>
            <Route exact path="/himachalpradesh" element={<HimachalPradesh />}></Route>
            <Route exact path="/punjab" element={<Punjab />}></Route>

            {/* links of international packages */}
            <Route exact path="/amsterdam" element={<Amsterdam />}></Route>
            <Route exact path="/australia" element={<Australia />}></Route>
            <Route exact path="/bali" element={<Bali />}></Route>
            <Route exact path="/colombo" element={<Colombo />}></Route>
            <Route exact path="/dubai" element={<Dubai />}></Route>
            <Route exact path="/japan" element={<Japan />}></Route>
            <Route exact path="/malaysia" element={<Malaysia />}></Route>
            <Route exact path="/maldives" element={<Maldives />}></Route>
            <Route exact path="/mauritius" element={<Mauritius />}></Route>
            <Route exact path="/singapore" element={<Singapore />}></Route>
            <Route exact path="/southafrica" element={<SouthAfrica />}></Route>
            <Route exact path="/hawaii" element={<Hawaii />}></Route>
            <Route exact path="/nepal" element={<Nepal />}></Route>
            <Route exact path="/santorini" element={<Santorini />}></Route>
            <Route exact path="/turkey" element={<Turkey />}></Route>

            {/* Links of Admin pages */}
            <Route exact path="/adminlogin" element={<AdminLogin />}></Route>
            <Route exact path="/adminhome" element={adminn ? <Dashboard /> : <AdminLogin />}></Route>
            <Route exact path="/users" element={adminn ? <Users /> : <AdminLogin />}></Route>
            <Route exact path="/viewpackages" element={adminn ? <ViewPackages /> : <AdminLogin />}></Route>
            <Route exact path="/addpackage" element={adminn ? <AddPackage /> : <AdminLogin />}></Route>
            <Route exact path="/adminblogs" element={adminn ? <AdminBlogs /> : <AdminLogin />}></Route>
            <Route exact path="/bookings" element={adminn ? <Bookings /> : <AdminLogin />}></Route>
            <Route exact path="/support" element={adminn ? <Support /> : <AdminLogin />}></Route>

            <Route exact path="/form" element={state ? <Form /> : <LogIn />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
