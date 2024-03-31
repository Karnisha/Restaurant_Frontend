import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./Menu/Menu";


import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Booking from "./pages/Booking";
import RestaurantDetails from "./pages/RestaurantDetails";
import AdminHome from "./Admin/AdminHome";
import AdminCreate from "./Admin/AdminCreate";
import AdminView from "./Admin/AdminView";
import AdminRead from "./Admin/AdminRead";
import Card from "./Menu/Card";
import RestaurantList from "./RestaurantDetails/RestaurantList";
import RestaurantMenu from "./RestaurantDetails/RestaurantMenu";
import CustomerView from "./Admin/CustomerView";
import CustomerRestaurant from "./Customer/CustomerRestaurant";
import CustomerMenu from "./Customer/CustomerMenu";
import Header from "./components/Layout/Header";
import EmailForm from "./RestaurantDetails/Email";
import BookingView from "./RestaurantDetails/BookingView";
import Updatedisplay from "./RestaurantDetails/Updatedisplay";
import RestaurantownerHome from "./RestaurantOwner/RestaurantownerHome";
import Homepage from "./HomePage/Homepage"


function App() {
  return (
    <div>
    
           <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path='/home' element={<Home/>}/>
          
          <Route path='header' element={<Header/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
        
          {/* <Route path="*" element={<Pagenotfound />} /> */}
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/restaurantDetails" element={<RestaurantDetails/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/adminhome" element={<AdminHome/>}/>
          <Route path="/admincreate" element={<AdminCreate/>}/>
          <Route path="/adminview" element={<AdminView/>}/>
          <Route path="/adminread" element={<AdminRead/>}/>
         
           <Route path="/card" element={<Card/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/restaurantmenu" element={<RestaurantMenu/>}/>
          <Route path="/restaurantlist/:restaurant_Id" element={<RestaurantList/>}/>
          <Route path="/customerview" element={<CustomerView/>}/>
          <Route path="/customerrestaurant" element={<CustomerRestaurant/>}/>
          <Route path="/customermenu" element={<CustomerMenu/>}/>
          <Route path="/emailforn" element={<EmailForm/>}/>
          <Route path="/bookingview" element={<BookingView/>}/>
          <Route path="/updatedisplay" element={<Updatedisplay/>}/>
          <Route path="/restaurantownerhome" element={<RestaurantownerHome/>}/>
        </Routes>
      </BrowserRouter>    
      

    
      
      
     


      
      
    </div>
  );
}

export default App;
