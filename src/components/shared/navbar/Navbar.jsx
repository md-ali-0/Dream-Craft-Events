import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#FFFFFF] p-4 shadow flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-gray-800 font-bold text-xl">
          <span className='text-blue-600 font-bold text-2xl'>C</span>vent
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4H3C2.44772 4 2 3.55228 2 3ZM22 9C22 8.44772 21.5523 8 21 8H3C2.44772 8 2 8.44772 2 9C2 9.55228 2.44772 10 3 10H21C21.5523 10 22 9.55228 22 9ZM21 14H3C2.44772 14 2 14.4477 2 15C2 15.5523 2.44772 16 3 16H21C21.5523 16 22 15.5523 22 15C22 14.4477 21.5523 14 21 14ZM21 20H3C2.44772 20 2 20.4477 2 21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4C22 4.55228 21.5523 5 21 5H3C2.44772 5 2 4.55228 2 4ZM2 10C2 9.44772 2.44772 9 3 9H21C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H3C2.44772 11 2 10.5523 2 10ZM2 16C2 15.4477 2.44772 15 3 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H3C2.44772 17 2 16.5523 2 16ZM3 21C2.44772 21 2 20.5523 2 20C2 19.4477 2.44772 19 3 19H21C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H3Z"
                />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:flex space-x-4 list-none ml-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li>
            <NavLink to="/" className="text-gray-800">Home</NavLink>
          </li>
          <li>
            <NavLink to="/booking" className="text-gray-800">Booking</NavLink>
          </li>
          <li>
            <NavLink to="/About" className="text-gray-800">About</NavLink>
          </li>
          <li>
            <NavLink to="/Services" className="text-gray-800">Services</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className="text-gray-800">Contact</NavLink>
          </li>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          {/* Add your search icon component or link here */}
          <span className="text-gray-800">🔍</span>
        </div>
        <div>
          {/* Add your login link or button here */}
          {/* <NavLink to="/login" className="text-gray-800">Login</NavLink> */}

          <div className="">

            {
              user?.email ? <div className="dropdown dropdown-end">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className=" flex flex-col justify-center">
                      <p>{user.displayName}</p>

                    </div>

                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                      <div className="w-10 rounded-full">
                        <img src={user.photoURL} />
                      </div>
                    </label>
                  </div>

                  <div>

                    <button
                      onClick={logOut}
                      className="btn btn-sm  btn-primary bg-[#F4E869] text-black">Logout</button>

                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  bg-[#F4E869] pb-[100px] z-20">
                  <li>
                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>
                    <button className="btn btn-sm  btn-ghost">{user.email}</button>

                  </li>
                  <li>
                    <button
                      onClick={logOut}
                      className="btn btn-sm btn-primary bg-[#F4E869] text-black">Logout</button>

                  </li>
                </ul>
              </div>
                :
                <div>
                  <Link to='/login'>
                    <button className="btn btn-sm  btn-primary bg-[#F4E869] text-black">Login</button>
                  </Link>
                  /
                  <Link to='/register'>
                    <button className="btn btn-sm text-black btn-primary bg-[#F4E869]">Register</button>
                  </Link>

                </div>




            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;