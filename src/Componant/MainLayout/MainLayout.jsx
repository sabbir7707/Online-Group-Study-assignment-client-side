import { prototype } from "postcss/lib/previous-map";



import Navbar from "../Navbar";
import Saider from "../Saider";


const MainLayout = ({ children }) => {
 
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
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-60 min-h-full bg-base-200">
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