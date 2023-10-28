import React, { MutableRefObject, useState } from "react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";

import { Contact, Container, Logo, Menu } from "@/styles/components/Header";

import logo from "/public/logo.png";
import Hamburger from "../Hamburger";
import Modal from "../Modal";

type HeaderType = {
  formRef: MutableRefObject<HTMLDivElement | null> | null;
};

const Header = ({ formRef }: HeaderType) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const executeScroll = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    formRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

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

      <Contact
        onClick={
          formRef === null ? (e) => showModal() : (e) => executeScroll(e)
        }
      >
        <h1>Get a free quote!</h1>
      </Contact>

      <IoMenu size={32} onClick={() => setMenuIsVisible(true)} />
      <Hamburger isVisible={menuIsVisible} setIsVisible={setMenuIsVisible} />

      <Modal showModal={openModal} setShowModal={setOpenModal} />
    </Container>
  );
};

export default Header;
