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
  Action,
  Container,
  ImageContainer,
  Main,
  Presentation,
} from "@/styles/pages/Removals";

import homeImage from "/public/home.jpg";

export default function Removals() {
  return (
    <Container>
      <Header />
      <ImageContainer>
        <div className="gradient" />
        <Image src={homeImage} width={1024} alt="Home background image"></Image>
      </ImageContainer>
      <Main>
        <Presentation>
          <h1>
            Professional
            <br />
            Removal
            <br />
            Services
          </h1>
          <span>
            Whether you're looking for professional movers or a man & van
            service, we have the experience and equipment needed to deliver.
          </span>

          <Action>
            <a
              href="https://rm-myexclusiveremovals.co.uk/survey.php"
              target={"_blank"}
              className="quote"
            >
              Get a quote
              <HiArrowLongRight />
            </a>
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
  );
}
