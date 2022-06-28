import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./style.scss";
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ThumbGallery({ imgList }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="thumb-gallery">
      <Swiper
        spaceBetween={0}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {imgList.map((img) => {
          return (
            <SwiperSlide key={img.mahinh}>
              <img src={img.duongdan} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
         {imgList.map((img) => {
          return (
            <SwiperSlide key={img.mahinh}>
              <img src={img.duongdan} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
