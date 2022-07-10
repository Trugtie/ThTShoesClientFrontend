import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
import SaleItemLarge from "../SaleItemLarge";
import { useSelector } from "react-redux";
import { eventSelector } from "../../store/selectors";

export default function SaleSlider() {
  const data = useSelector(eventSelector);

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
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index} style={{ padding: "2rem 0rem" }}>
              <SaleItemLarge itemData={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
