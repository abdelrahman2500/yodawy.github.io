
import './App.scss';
import { useContext } from 'react';
import { Context } from './context/Context';


function App() {

  const context = useContext(Context)

  return (
    <div className="text-capitalize">
      {context.lang === "en" ?
        <div className="AppEn">
          {/* hello english */}

        </div>
        :
        <div className="AppAr" dir="rtl">
          {/* hello arabic */}
        </div>
      }

    </div>
  );
}

export default App;
