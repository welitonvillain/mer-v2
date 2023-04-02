import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

import { openWhatsapp } from "@/pages/api/Whatsapp";
import { sendEmail } from "@/pages/api/Email";
import { openInstagram } from "@/pages/api/Instagram";
import { openFacebook } from "@/pages/api/Facebook";
import { openMaps } from "@/pages/api/GoogleMaps";

import { Container } from "@/styles/components/Footer";

export default function Footer() {
  return (
    <Container>
      <div className="column-1">
        <div className="header">
          <span className="title">My Exclusive Removals</span>
          <span className="subtitle">
            We’re your friendly, neighbourhood Berkshire movers. Whether you
            need domestic removals, office removals or a house clearance, we can
            help!
          </span>
        </div>

        <div className="social">
          <FaWhatsapp onClick={() => openWhatsapp()} />
          <MdMailOutline onClick={() => sendEmail()} />
          <FaFacebook onClick={() => openFacebook()} />
          <FaInstagram onClick={() => openInstagram()} />
        </div>
      </div>

      <div className="column-2">
        <div className="services">
          <span className="servicesTitle">Services</span>
          <a href="/services">Domestic Removals</a>
          <a href="/services">Business Removals</a>
          <a href="/services">Man and Van services</a>
          <a href="/services">and more...</a>
        </div>

        <div className="contact">
          <span className="contactTitle">Contact Us</span>
          <p onClick={() => openWhatsapp()}>+ 44 7397 873825</p>
          <p onClick={() => sendEmail()}>exclusiveremoval@gmail.com</p>
          <p onClick={() => openMaps()}>75b Lewins Way, Slough SL1 5HF, UK</p>
        </div>
      </div>
    </Container>
  );
}
