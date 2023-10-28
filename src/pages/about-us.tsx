import Image from "next/image";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";

import Header from "@/components/Header";

import { openWhatsapp } from "@/pages/api/Whatsapp";
import { sendEmail } from "@/pages/api/Email";
import { openInstagram } from "@/pages/api/Instagram";
import { openFacebook } from "@/pages/api/Facebook";

import {
  About,
  Container,
  ImageContainer,
  Main,
  Presentation,
  Action,
  Content,
  Fact,
  Info,
  Mission,
} from "@/styles/pages/AboutUs";

import aboutUsImage from "/public/about-us.jpg";
import familyImage from "/public/family.jpg";
import businessImage from "/public/business.jpg";
import satisfiedImage from "/public/satisfied.jpg";
import noStressImage from "/public/no-stress.jpg";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function Services() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Container>
        <Header formRef={null} />
        <ImageContainer>
          <div className="gradient" />
          <Image
            src={aboutUsImage}
            width={1024}
            alt="About Us background image"
          ></Image>
        </ImageContainer>
        <Main>
          <Presentation>
            <h1>About Us</h1>
            <span>Berkshire Movers Who Genuinely Care About Their Clients</span>

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
      <Content>
        <span className="title">
          Know a little more about us and our history
        </span>

        <About>
          <div className="content">
            <span>About Us</span>
            <p>
              We are a family-owned domestic and business removals company that
              takes pride in delivering a professional and reliable service.
              <br />
              <br /> We stand out from other removals services in Berkshire
              because we take the time to develop relationships with our
              clients.
            </p>
            <div className="separator"></div>
          </div>
          <div className="first-image">
            <Image
              src={familyImage}
              width={560}
              alt="About Us background image"
            />
          </div>
          <div className="second-image">
            <Image
              src={businessImage}
              width={560}
              alt="About Us background image"
            />
          </div>
          <div className="third-image">
            <Image
              src={satisfiedImage}
              width={560}
              alt="About Us background image"
            />
          </div>
        </About>

        <Fact>
          <span className="factTitle">Our fun fact</span>

          <div className="fact">
            <span className="plus">+</span>
            <span className="number">3</span>
            <span className="desc">years of experience</span>
          </div>

          <div className="fact">
            <span className="plus">+</span>
            <span className="number">1K</span>
            <span className="desc">satisfied customers</span>
          </div>
        </Fact>

        <Info>
          <div className="separator"></div>
          <span>
            We are motivated by helping people to enjoy the experience of moving
            to a new home.
            <br />
            We are motivated by helping businesses to expand their operations in
            new premises.
            <br />
            Most of all, we are motivated by delivering exceptional customer
            service and exceeding our customers’ expectations.
            <br />
            <br />
            We can turn our hands to anything. Whether you have a large home to
            pack up and move or you need someone to remove old furniture from
            your property, we can help. We’re both a removal service and a
            so-called man & van service. But whatever we do, we do it with
            professionalism, respect and attention to detail.
            <br />
            <br />
            That’s why we’re one of the fastest-growing removal services in
            Berkshire!
          </span>
          <div className="separator"></div>
        </Info>

        <span className="title">We have a Mission</span>

        <Mission>
          <div className="image">
            <Image
              src={noStressImage}
              width={560}
              alt="About Us background image"
            />
          </div>
          <div className="content">
            <span>Our Mission</span>
            <p>
              We’re on a mission to make moving home and relocating businesses
              stress-free and minimally disruptive. That’s why we’re always
              fine-tuning our processes and looking for ways to make our removal
              projects even more effective.
              <br />
              <br />
              We believe that moving home should be a joyous occasion in
              anyone’s life. But all too often, moving day becomes fraught with
              tension and stress. We’re here to take those burdens away from our
              clients.
              <br />
              <br />
              Let us worry about the logistics of moving home or relocating a
              business — while you enjoy what should be a momentous occasion in
              your life.
            </p>
            <div className="separator"></div>
          </div>
        </Mission>
      </Content>
      <Modal showModal={openModal} setShowModal={setOpenModal} />
    </>
  );
}
