import "./App.scss";
import { useContext } from "react";
import { Context } from "./context/Context";
import Home from "./pages/home/Home";
import HomeAr from "./pages/home/HomeAr";
import { Redirect, Route, Switch } from "react-router-dom";
import ForInsurers from "./pages/insurers/insurers";
import AboutUs from "./pages/about-us/AboutUs";
import ForPharmacies from "./pages/pharmacies/ForPharmacies";
import ForDoctors from "./pages/doctors/Doctors";
import Contact from "./pages/contact/Contact";
import ContactAr from "./pages/contact/ContactAr";
import Shop from "./pages/shop/Shop";
import ShopAr from "./pages/shop/ShopAr";
import Blog from './pages/blog/Blog';
import BlogAr from './pages/blog/BlogsAr';
import ForPharmaciesAr from "./pages/pharmacies/ForPharmaciesAr";
import ForInsurersAr from "./pages/insurers/insurersAr";
import ForDoctorsAr from "./pages/doctors/DoctorsAr";
import AboutUsAr from "./pages/about-us/AboutUsAr";
import Cart from './pages/crat/Cart';
import CartAr from './pages/crat/CartAr';
import Login from './pages/login/Login';
import LoginAr from './pages/login/LoginAr';
import AddProduct from './pages/addProducr/AddProduct';
import AddProductAr from './pages/addProducr/AddProductAr';
import NotFound from './components/notFound/NotFound';
import NotFoundAr from './components/notFound/NotFoundAr';

function App() {
  const context = useContext(Context);

  return (
    <div className="text-capitalize">
      {context.lang === "en" ? (
        <div className="AppEn">
          {/* hello english */}
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/shop" >
              <Shop />
            </Route>
            <Route path="/pharamcies" exact>
              <ForPharmacies />
            </Route>
            <Route path="/insurers" exact>
              <ForInsurers />
            </Route>
            <Route path="/doctors" exact>
              <ForDoctors />
            </Route>
            <Route path="/about" exact>
              <AboutUs />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/addproduct" exact>
              <AddProduct />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      ) : (
        <div className="AppAr" dir="rtl">
          {/* hello arabic */}
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" exact>
              <HomeAr />
            </Route>
            <Route path="/shop" >
              <ShopAr />
            </Route>
            <Route path="/pharamcies" exact>
              <ForPharmaciesAr />
            </Route>
            <Route path="/insurers" exact>
              <ForInsurersAr />
            </Route>
            <Route path="/doctors" exact>
              <ForDoctorsAr />
            </Route>
            <Route path="/about" exact>
              <AboutUsAr />
            </Route>
            <Route path="/blog" exact>
              <BlogAr />
            </Route>
            <Route path="/contact" exact>
              <ContactAr />
            </Route>
            <Route path="/cart" exact>
              <CartAr />
            </Route>
            <Route path="/login" exact>
              <LoginAr />
            </Route>
            <Route path="/addproduct" exact>
              <AddProductAr />
            </Route>
            <Route path="*">
              <NotFoundAr />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
