import "./App.scss";
import { useContext } from "react";
import { Context } from "./context/Context";
import Home from "./pages/home/Home";
import HomeAr from "./pages/home/HomeAr";

function App() {
  const context = useContext(Context);

  return (
    <div className="text-capitalize">
      {context.lang === "en" ? (
        <div className="AppEn">
          {/* hello english */}
          <Home />
        </div>
      ) : (
        <div className="AppAr" dir="rtl">
          {/* hello arabic */}
          <HomeAr />
        </div>
      )}
    </div>
  );
}

export default App;
