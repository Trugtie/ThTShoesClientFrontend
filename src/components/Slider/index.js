import Grid from "@mui/material/Grid";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "../Item";
import EventItem from "../EventItem";
import "./style.scss";

export default function Slider({ bg, data, mod }) {
  const slides = [];
  if (data !== undefined) {
    const list = [...data];
    const slideCount = Math.ceil(list.length / 6);
    for (let i = 0; i < slideCount; i++) {
      const items = list.slice(0, 6);
      list.splice(0, items.length);
      slides.push(items);
    }
  }


  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className={bg}
      >
        {slides.length > 0 &&
          slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Grid
                container
                spacing={2}
                sx={{
                  height: "100%",
                }}
              >
                {slide.map((item,index) => (
                  <Grid item xs={4} key={index}>
                    {mod === 1 ? (
                      <Item
                        id={item.magiay}
                        name={item.tengiay}
                        price={item.gia}
                        img={item.urlanh}
                        category={item.loaigiayHangDanhmuc.danhmuc.tendanhmuc}
                      />
                    ) : mod === 2 ? (
                      <Item
                        id={item.mapk}
                        name={item.tenpk}
                        price={item.gia}
                        img={item.urlanh}
                        category="Phụ kiện"
                      />
                    ) : (
                      <EventItem
                        id={item.makm}
                        description={item.mota}
                        cost={item.giatrigiam}
                        img={item.urlanh}
                        startDate={item.ngaybd}
                        endDate={item.ngaykt}
                        title={item.tieude}
                      />
                    )}
                  </Grid>
                ))}
              </Grid>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
