import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
const Navbar = () => {
  return (
    <section className="flex justify-between items-center p-4 md:p-10">
      <Link to="/">
        <img src={logo} alt="" className="w-48 md:w-auto" />
      </Link>
      <Link
        to="/notfound"
        className="p-3 text-lg bg-white border rounded-3xl hover:bg-black hover:text-white"
      >
        Try it for Free
      </Link>
    </section>
  );
};

export default Navbar;
