import { Link } from "react-router-dom";
import { BD, CN, ES, JP } from "country-flag-icons/react/3x2";
import logo from "../../../assets/logo.png";

const Navigation = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Offered Courses</a>
                <ul className="p-2">
                  <li>
                    <Link className="flex">
                      <ES title="Spain" className="w-2/12" />{" "}
                      <p>Learn Spanish</p>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex">
                      <BD title="Bangladesh" className="w-2/12" />{" "}
                      <p>Learn Bengali</p>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex">
                      <JP title="Japan" className="w-2/12" />{" "}
                      <p>Learn Japanese</p>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex">
                      <CN title="China" className="w-2/12" />{" "}
                      <p>Learn Chinese</p>
                    </Link>
                  </li>
                </ul>
              </li>
              
            </ul>
          </div>
          <Link className="flex justify-center" to="/">
            <img className="w-2/12 rounded-lg mx-4" src={logo} alt="" />
            <p className="font-bold text-4xl my-auto">Summer Bell</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Offered Courses</summary>
                <ul className="p-2">
                  <li>
                    <Link className="flex">
                      <ES title="Spain" className="w-2/12" />{" "}
                      <p>Learn Spanish</p>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex">
                      <BD title="Bangladesh" className="w-2/12" />{" "}
                      <p>Learn Bengali</p>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex">
                      <JP title="Japan" className="w-2/12" />{" "}
                      <p>Learn Japanese</p>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex">
                      <CN title="China" className="w-2/12" />{" "}
                      <p>Learn Chinese</p>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
