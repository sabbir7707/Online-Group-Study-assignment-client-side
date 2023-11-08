import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";


const Saider = () => {
  const { userr, logout } = useContext(AuthContext)
    return (
      <div className="flex flex-col gap-2">

         



            {/* Navbar menu content here */}
            <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            }
          >
            Home
          </NavLink>




          <NavLink
            to="/create_assignment"
            className={({ isActive }) =>
              isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            }
          >
             Create Assignment
          </NavLink>


          <NavLink
            to="/all_assignment"
            className={({ isActive }) =>
              isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            }
          >
            ALL Assignment
          </NavLink>




          {/* <NavLink
            to="/update_assignment"
            className={({ isActive }) =>
              isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
            }
          >
          update_assignment
          </NavLink> */}


          {userr?.email ? (
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="cursor-pointer">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                  
                    <img   src=  {userr?.photoURL?  userr?.photoURL :   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  }   />
                   

                  </div>

                  
                  {/* <h1 className="font-extrabold pr-2"> {userr?.displayName}</h1> */}
                </div>
              </label>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >


                <NavLink to="/submitted_assignment"
                  className="px-4 py-2 hover:bg-base-300 rounded-lg" >
                  Submitted Assignment
                </NavLink>

                <NavLink to="/my_assignment" className="px-4 py-2 hover:bg-base-300 rounded-lg" >
                         My assignment
                </NavLink>


                <div
                  onClick={logout}
                  className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Logout
                </div>
              </div>
            </div>
          ) : (

            <div className="flex flex-col gap-2">

              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                }
              >
                Register
              </NavLink>



            </div>


          )}


        
                      
        
      </div>
    );
};

export default Saider;