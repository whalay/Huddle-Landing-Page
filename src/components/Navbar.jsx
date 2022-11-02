import logo from "../assets/images/logo.svg";
const Navbar = () => {
  return (
    <section className="flex justify-between items-center p-4 md:p-10">
      <img src={logo} alt="" />

    
        <a href="/" className="p-3 bg-white border rounded-3xl hover:bg-black hover:text-white">Try it for Free</a>
  
    </section>
  );
};

export default Navbar;
