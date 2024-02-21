import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <div className="container">
          <div className="App">
<Header/>
            <div className="pt-3">
              <Outlet />
            </div>

          </div>
        </div>
      );
}

export default Layout