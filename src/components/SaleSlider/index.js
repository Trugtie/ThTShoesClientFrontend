import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
import SaleItemLarge from '../SaleItemLarge';

export default function SaleSlider() {
  return (
    <>
      <Swiper
        className="sale-slider"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
      >
        <SwiperSlide style={{padding:'2rem 0rem'}}>
          <SaleItemLarge/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
