import { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";

import { Container } from "../../styles/components/Hamburger";

type HamburguerType = {
  isVisible: Boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export default function Hamburger({ isVisible, setIsVisible }: HamburguerType) {
  return (
    <Container isVisible={isVisible.valueOf()}>
      <IoClose size={32} onClick={() => setIsVisible(false)} />
      <nav>
        <a href="/">HOME</a>
        <a href="/services">SERVICES</a>
        <a href="/about-us">ABOUT US</a>
        <a href="/reviews">REVIEWS</a>
      </nav>
    </Container>
  );
}
