import React, { useState } from "react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";

import { Contact, Container, Logo, Menu } from "@/styles/components/Header";

import logo from "/public/logo.png";
import Hamburger from "../Hamburger";

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <Container>
      <Logo>
        <Image src={logo} alt="MER Logo" width={80} />
      </Logo>

      <Menu>
        <a href="/">HOME</a>
        <a href="/services">SERVICES</a>
        <a href="/about-us">ABOUT US</a>
        <a href="/reviews">REVIEWS</a>
      </Menu>

      <Contact>
        <a
          href="https://rm-myexclusiveremovals.co.uk/survey.php"
          target={"_blank"}
        >
          Get a free quote!
        </a>
      </Contact>

      <IoMenu size={32} onClick={() => setMenuIsVisible(true)} />
      <Hamburger isVisible={menuIsVisible} setIsVisible={setMenuIsVisible} />
    </Container>
  );
}
