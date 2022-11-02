import React from "react";
import { Link } from "react-router-dom";

import grow from "../assets/images/illustration-grow-together.svg";
import flowing from "../assets/images/illustration-flowing-conversation.svg";
import user from "../assets/images/illustration-your-users.svg";

const Section = () => {
  return (
    <section className=" flex flex-col  m-6  mt-20 md:mx-20 h-full">
      <div className=" flex justify-between items-center flex-col-reverse md:flex-row gap-10 p-10 border shadow-2xl rounded-xl">
        <div className=" md:m-10 text-center md:text-left px-1 md:px-10">
          <h1 className="md:text-4xl text-2xl font-bold   pb-5">
            Grow Together
          </h1>
          <p className="text-lg">
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
        <div>
          <img src={grow} alt="" />
        </div>
      </div>

      <div className=" flex justify-between items-center flex-col-reverse md:flex-row-reverse gap-10 p-10 border shadow-2xl rounded-xl">
        <div className=" md:m-10 text-center md:text-left px-1 md:px-10">
          <h1 className="md:text-4xl text-2xl font-bold  pb-5">
            Flowing Conversations
          </h1>
          <p className="text-lg">
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
        <div>
          <img src={flowing} alt="" />
        </div>
      </div>

      <div className=" flex justify-between items-center flex-col-reverse md:flex-row gap-10 p-10 border shadow-2xl rounded-xl">
        <div className=" md:m-10 text-center md:text-left px-1 md:px-10">
          <h1 className="md:text-4xl text-2xl font-bold  pb-5">Your Users</h1>
          <p className="text-lg">
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
        <div>
          <img src={user} alt="" />
        </div>
      </div>

      <div className="m-auto md:p-10 p-2 border shadow-2xl rounded-xl relative top-28 z-50 bg-white">
        <h3 className="text-2xl text-center md:text-3xl font-bold py-5">
          Ready To Build Your Community?
        </h3>
        <div className="m-auto text-center py-5">
          <Link
            to="/notfound"
            className="bg-Pink text-white text-left font-semibold border py-3 px-2 md:px-10 rounded-3xl hover:border-Pink hover:text-Pink hover:bg-white "
          >
            Get Started For Free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section;
