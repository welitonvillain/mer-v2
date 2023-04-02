import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container } from "@/styles/components/ReviewsSlider";

import { getReviews } from "../../pages/api/Reviews";

function makeStars(quantity: number): JSX.Element[] {
  const stars = [];
  for (let i = 0; i < quantity; i++) {
    stars.push(<AiFillStar key={i} />);
  }

  return stars;
}

export default function ReviewsSlider() {
  return (
    <Slider {...settings}>
      {getReviews().map((r) => (
        <Container key={r.id}>
          <div className="contentContainer">
            <span className="content">{r.message}</span>

            <div className="footer">
              <div className="stars">{makeStars(r.stars)}</div>

              <span className="author">{r.author}</span>
            </div>
          </div>
        </Container>
      ))}
    </Slider>
  );
}

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};
