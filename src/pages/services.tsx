import React, { useState, SetStateAction, Dispatch } from "react";
import Image from "next/image";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";

import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";

import {
  Action,
  Container,
  ImageContainer,
  Main,
  Presentation,
  Content,
} from "@/styles/pages/Services";

import { cards, Card } from "@/pages/api/ServiceCards";
import { openWhatsapp } from "@/pages/api/Whatsapp";
import { sendEmail } from "@/pages/api/Email";
import { openInstagram } from "@/pages/api/Instagram";
import { openFacebook } from "@/pages/api/Facebook";

import servicesImage from "/public/services.jpg";
import Modal from "@/components/Modal";

export default function Services() {
  const [serviceCards, setServiceCards]: [
    Card[],
    Dispatch<SetStateAction<Card[]>>
  ] = useState(cards());

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Container>
        <Header formRef={null} />
        <ImageContainer>
          <div className="gradient" />
          <Image
            src={servicesImage}
            width={1024}
            alt="Services background image"
          ></Image>
        </ImageContainer>
        <Main>
          <Presentation>
            <h1>Services</h1>
            <span>
              Domestic Removals, Business Removals, Man-and-Van Services and
              more.
            </span>

            <Action>
              <button onClick={() => setOpenModal(true)} className="quote">
                Get a quote
                <HiArrowLongRight />
              </button>
              <a onClick={() => openWhatsapp()} className="whats">
                <FaWhatsapp />
              </a>
              <a onClick={() => sendEmail()} className="mail">
                <MdMailOutline />
              </a>
            </Action>
          </Presentation>

          <div className="social">
            <FaFacebook onClick={() => openFacebook()} />
            <FaInstagram onClick={() => openInstagram()} />
          </div>
        </Main>

        <div className="socialText">
          <a
            href="https://www.facebook.com/profile.php?id=100063697292866"
            target={"_blank"}
          >
            Facebook
          </a>
          |
          <a
            href="https://www.instagram.com/myexclusiveremovals/"
            target={"_blank"}
          >
            Instagram
          </a>
        </div>
      </Container>

      {/* Content page */}

      <Content>
        <span className="title">Services we can help you with</span>

        {serviceCards.map((card) => (
          <>
            <div key={card.title} className="separator" />
            <ServiceCard
              key={card.id}
              title={card.title}
              image={card.image}
              content={card.content}
              setShowModal={setOpenModal}
            />
          </>
        ))}
      </Content>
      <Modal showModal={openModal} setShowModal={setOpenModal} />
    </>
  );
}
