import { BrowserRouter as Router, Link } from "react-router-dom";
import mockup from "../assets/images/illustration-mockups.svg";

const Hero = () => {
  return (
    <section className="flex md:flex-row flex-col  justify-between items-center p-4 md:p-10 gap-20 h-full">
      <div className=" md:w-[60rem] text-center md:text-left">
        <h1 className="md:text-4xl text-3xl font-bold py-5 text ">
          Build The Community Your Fans Will Love
        </h1>
        <p className="text-lg font-normal py-5 pb-10 w-auto">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
      
          <Link
            to="/notfound"
            className="bg-Pink text-white font-semibold text-left py-3 px-10 rounded-3xl hover:border-Pink hover:text-Pink hover:bg-white hover:border"
          >
 
            Get Started For Free
          </Link>
    
      </div>
      <div>
        <img src={mockup} alt="" />
      </div>
    </section>
  );
};

export default Hero;
