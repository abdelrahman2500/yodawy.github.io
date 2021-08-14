import "./App.scss";
import { useContext } from "react";
import { Context } from "./context/Context";
import Home from "./pages/home/Home";
import HomeAr from "./pages/home/HomeAr";
import { Route, Switch } from "react-router-dom";
import ForPharmacies from './pages/pharmacies/ForPharmacies';
import ForDoctors from './pages/doctors/Doctors';
import ForInsurers from "./pages/insurers/insurers";
import AboutUs from "./pages/about-us/AboutUs";

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
              <Home />
            </Route>
            <Route path="/contact" exact>
              <Home />
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
            <Route path="/pharamcies" exact>
              <ForPharmacies />
            </Route>
            <Route path="/insurers" exact>
              <HomeAr />
            </Route>
            <Route path="/doctors" exact>
              <HomeAr />
            </Route>
            <Route path="/about" exact>
              <HomeAr />
            </Route>
            <Route path="/blog" exact>
              <HomeAr />
            </Route>
            <Route path="/contact" exact>
              <HomeAr />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
