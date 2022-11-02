import React from "react";

import grow from "../assets/images/illustration-grow-together.svg";
import flowing from "../assets/images/illustration-flowing-conversation.svg";
import user from "../assets/images/illustration-your-users.svg";

const Section = () => {
  return (
    <section className=" flex flex-col  m-10 mt-20 md:mx-20 h-full">
      <div className=" flex justify-between items-center flex-col-reverse md:flex-row gap-10 p-10 border shadow-2xl rounded-xl">
        <div className=" md:m-10 text-center md:text-left">
          <h1 className="text-4xl font-bold px-10 pb-5">Grow Together</h1>
          <p className="text-lg px-10 ">
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
        <div className=" md:m-10 text-center md:text-left">
          <h1 className="text-4xl font-bold px-10 pb-5">
            Flowing Conversations
          </h1>
          <p className="text-lg px-10 ">
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
        <div className=" md:m-10 text-center md:text-left">
          <h1 className="text-4xl font-bold px-10 pb-5">Your Users</h1>
          <p className="text-lg px-10 ">
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
        <div>
          <img src={user} alt="" />
        </div>
      </div>

      <div className="m-auto p-10  border shadow-2xl rounded-xl relative top-28 z-50 bg-white">
        <h3 className="text-2xl md:text-3xl font-bold py-5">
        
          Ready To Build Your Community?
        </h3>
        <div className="m-auto text-center py-5">
          <a
            href="/"
            className="bg-Pink text-white text-left font-semibold border py-3 px-10 rounded-3xl hover:border-Pink hover:text-Pink hover:bg-white "
          >
            Get Started For Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section;
