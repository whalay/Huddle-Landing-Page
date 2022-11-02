import React from "react";

import Hero from './Hero';
import Navbar from './Navbar';

const Header = () => {
  return (
    <section className="bg-heroM md:bg-heroD bg-cover bg-pale_Cyan h-full">
      <Navbar />
      <Hero />
    </section>
  );
};

export default Header;
