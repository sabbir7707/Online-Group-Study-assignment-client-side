import { prototype } from "postcss/lib/previous-map";
import { NavLink } from "react-router-dom";
import logo2 from "../../assets/images/logo3.webp"
import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import Navbar from "../Navbar";
import Saider from "../Saider";


const MainLayout = ({ children }) => {
    const { userr, logout } = useContext(AuthContext)
    return (
        <div>

                            

<div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-200">


          <Navbar />



        </div>
        {/* Page content here */}
        {children}

      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}


          <Saider />


        </div>
      </div>
    </div>


</div>






    );
};
MainLayout.prototype = {
    children: prototype.node,
};

export default MainLayout;