import { NavLink } from "react-router-dom";


const Saider = () => {
    return (
        <div className="flex flex-col gap-2">
        {/* Navbar menu content here */}
        
        <NavLink
          to="/create_assignment"
          className={({ isActive }) =>
            isActive ? 'btn btn-primary ' : 'btn btn-ghost '
          }
        >
         Create Assignment
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'btn btn-primary ' : 'btn btn-ghost '
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? 'btn btn-primary ' : 'btn btn-ghost '
          }
        >
          Login
        </NavLink>
      </div>
    );
};

export default Saider;