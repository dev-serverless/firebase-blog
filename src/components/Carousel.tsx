import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselContents } from "mock/carousel";

const Carousel = () => {
  const NextArrow = ({ onClick }: any) => {
    return (
      <div className="arrow next" onClick={onClick}>
        {">"}
      </div>
    );
  };

  const PrevArrow = ({ onClick }: any) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        {"<"}
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // 화살표 추가
    dotsClass: "slick-dots custom-class-name",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {CarouselContents.map((carousel) => (
          <img
            className="carousel-img"
            key={carousel.id}
            src={carousel.image}
            alt="img"
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
