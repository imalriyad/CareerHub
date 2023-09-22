import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <div className="md:flex gap-8 text-[#757575]">
        <NavLink to='/'>
          <li>Home</li>
        </NavLink>
        <NavLink to='/appliedJobs'>
          <li>Applied Jobs</li>
        </NavLink>

        <NavLink to='/blog'>
          <li>Blog</li>
        </NavLink>
      </div>
    </>
  );
  return (
    <div className="bg-purple-50">
      <div className="navbar max-w-screen-2xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="normal-case text-xl md:text-3xl font-bold">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-lg font-medium menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={'/'}>
          <a className="md:px-4 px-2 md:text-base text-xs py-2 font-bold text-white bg-[#6c5ce7] rounded-md cursor-pointer">
            Star Applying
          </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
