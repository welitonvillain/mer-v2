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
  Container,
  ImageContainer,
  Main,
  Presentation,
  Action,
  Content,
  Why,
  ReviewContainer,
  ReviewAction,
  ActionTitle,
} from "@/styles/pages/Reviews";

import reviewsImage from "/public/reviews.jpg";
import ReviewsSlider from "@/components/ReviewsSlider";

export default function Reviews() {
  return (
    <>
      <Container>
        <Header />
        <ImageContainer>
          <div className="gradient" />
          <Image
            src={reviewsImage}
            width={1024}
            alt="Services background image"
          ></Image>
        </ImageContainer>
        <Main>
          <Presentation>
            <h1>Reviews</h1>
            <span>See what our customers are saying about us.</span>

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
      <Content>
        <span className="title">Learn more about our services</span>

        <Why>
          <span className="whyTitle">Why Us</span>
          <span className="whyDescription">
            We offer a comprehensive range of moving services to meet your
            specific needs. Whether you're moving homes or offices, we have a
            team of experienced professionals who can help make your move easier
            and more efficient.
            <br />
            <br />
            In addition, we provide high-quality storage services to help you
            safeguard your valuable belongings during the moving process. And to
            ensure that your new home or office is ready for you to move in, we
            also offer property cleaning services.
            <br />
            <br />
            With a personalised approach to each project and a dedicated team of
            experts, you can be sure that our moving services are efficient,
            safe, and reliable. Choose our services and make your move with
            peace of mind and without any hassle.
          </span>
          <div className="separator" />
        </Why>

        <span className="title">See what our customers say about us</span>

        <ReviewContainer>
          <span className="reviewTitle">Reviews</span>

          <ReviewsSlider></ReviewsSlider>
        </ReviewContainer>

        <ActionTitle>Make a quote or call us for a conversation</ActionTitle>

        <ReviewAction>
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
        </ReviewAction>
      </Content>
    </>
  );
}
