
import './App.scss';
import { useContext} from 'react';
import { Context } from './context/Context';
import { Switch } from 'react-router-dom';

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
        <Switch>
          {/* to use it .. replace any "a" with <Link to="/pathName" /> and use it anywhere not here .. ok? not here again */}
          {/*
            <Route path="/pathName">
              Component here
            </Route>
          */}
        </Switch>
      </div>
  );
}

export default App;
