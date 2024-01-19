import { useContext, useState } from "react";
import { LuMenu, LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import logo from "../../../assets/logo/logo.png";
import Container from "../../container/Container";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#FFFFFF] py-4 shadow ">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="md:hidden mx-4">
              <button
                onClick={toggleMenu}
                className="text-gray-800  focus:outline-none"
              >
                <LuMenu size={30} className="text-dark_01" />
              </button>
            </div>
            <div className="text-gray-800 font-bold text-xl">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>

            <div
              className={`md:flex gap-6 md:ml-12 list-none ${
                isMenuOpen
                  ? "fixed w-full flex flex-col justify-center items-center z-10 mt-96 text-2xl space-y-2 py-96  text-white  bg-black bg-opacity-95"
                  : "hidden"
              }`}
            >
              {isMenuOpen && (
                <RxCross2
                  onClick={toggleMenu}
                  className="text-3xl cursor-pointer"
                ></RxCross2>
              )}
              <li>
                <NavLink to="/" className="">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/booking" className="">
                  Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" className="">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/Services" className="">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" className="">
                  Contact
                </NavLink>
              </li>
            </div>
          </div>
          <div className="flex items-center ml-4">
            <div className="mr-4">
              {/* Add your search icon component or link here */}
              <span className="text-gray-800">
                <LuSearch />
              </span>
            </div>
            <div>
              {/* Add your login link or button here */}
              {/* <NavLink to="/login" className="text-gray-800">Login</NavLink> */}

              <div className="">
                {user?.email ? (
                  <div className="dropdown dropdown-end">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-2">
                        <div className=" flex flex-col justify-center">
                          <p>{user.displayName}</p>
                        </div>

                        <label
                          tabIndex={0}
                          className="btn btn-ghost btn-circle avatar"
                        >
                          <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                          </div>
                        </label>
                      </div>

                      <div>
                        <button
                          onClick={logOut}
                          className="btn btn-sm  btn-primary bg-[#F4E869] text-black"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52  bg-[#F4E869] pb-[100px] z-20"
                    >
                      <li>
                        <button className="btn btn-sm  btn-ghost">
                          {user.displayName}
                        </button>
                        <button className="btn btn-sm  btn-ghost">
                          {user.email}
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={logOut}
                          className="btn btn-sm btn-primary bg-[#F4E869] text-black"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <Link
                      to="/login"
                      type="button"
                      className="inline-block rounded bg-primary/10 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary/90 transition duration-150 ease-in-out hover:bg-primary/20 focus:bg-primary/30 focus:outline-none focus:ring-0 active:bg-primary/20"
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      type="button"
                      className="mr-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary/95 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary/90 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary/90"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
