import "./App.scss";
import { useContext } from "react";
import { Context } from "./context/Context";
import Home from "./pages/home/Home";
import HomeAr from "./pages/home/HomeAr";
import { Route, Switch } from "react-router-dom";
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

function App() {
  const context = useContext(Context);

  return (
    <div className="text-capitalize">
      {context.lang === "en" ? (
        <div className="AppEn">
          {/* hello english */}
          <Switch>
            <Route path="/" exact>
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
          </Switch>
        </div>
      ) : (
        <div className="AppAr" dir="rtl">
          {/* hello arabic */}
          <Switch>
            <Route path="/" exact>
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
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
