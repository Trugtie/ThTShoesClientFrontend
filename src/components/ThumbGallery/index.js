import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./style.scss";
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ThumbGallery() {
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
        <SwiperSlide>
          <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1-600x384.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1-1-600x384.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1-3-600x384.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1-4-600x384.jpg" />
        </SwiperSlide>
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
        <SwiperSlide>
          <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1-600x384.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1-1-600x384.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1-3-600x384.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-1-4-600x384.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
