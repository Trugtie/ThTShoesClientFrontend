import Grid from "@mui/material/Grid";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "../Item";
import "./style.scss";

export default function Slider() {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Grid
            container
            spacing={2}
            sx={{
              height: "100%",
            }}
          >
            <Grid item xs={4}>
              <Item />
            </Grid>
            <Grid item xs={4}>
              <Item />
            </Grid>
            <Grid item xs={4}>
              <Item />
            </Grid>
            <Grid item xs={4}>
              <Item />
            </Grid>
            <Grid item xs={4}>
              <Item />
            </Grid>
            <Grid item xs={4}>
              <Item />
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid
            container
            spacing={2}
            sx={{
              height: "100%",
            }}
          >
            <Grid item xs={4}>
              <Item />
            </Grid>
          </Grid>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
