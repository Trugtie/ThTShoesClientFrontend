import Button from "@mui/material/Button";
import "./home.scss";
import CategoryItem from "../../components/CategoryItem";
import Grid from "@mui/material/Grid";
import MaleImage from "../../assets/male.png";
import FemaleImage from "../../assets/female.png";
import ChildImage from "../../assets/child.png";
import ShowcaseShoesTab from "../../components/ShowcaseShoesTab";
import ShowcaseAccessoriesTab from "../../components/ShowcaseAccessoriesTab";
import Divider from "../../components/Divider";
import SaleSlider from "../../components/SaleSlider";
import { useSelector } from "react-redux";
import {
  giayLatestSelector,
  giayBestSellsSelector,
  phuKienLatestSelector,
} from "../../store/selectors";


export default function HomePage() {
  const shoesLastest = useSelector(giayLatestSelector);
  const shoesBestSells = useSelector(giayBestSellsSelector);
  const phuKienLatest = useSelector(phuKienLatestSelector);
  return (
    <div className="homepage-container">
      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <h1
            className="hero-title"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Chào mừng đến với ngôi nhà <br />
            ThTShoes
          </h1>
          <h2
            className="hero-description"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            Nơi thỏa mãn niềm đam mê giày thể thao của các bạn, trẻ trung -
            phong cách - hiện đại là phương châm của chúng tôi.
            <br />
            Hãy chọn cho mình đôi giày xịn xò nhất nào (^.^)
          </h2>
          <div
            className="hero-btn"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                width: "13rem",
                transition: "all .3s",
                "&:hover": {
                  backgroundColor: "red",
                  borderColor: "black",
                },
              }}
            >
              Xem ngay
            </Button>
          </div>
        </div>
      </section>
      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <h1
            className="categories-header-title"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            DANH MỤC
          </h1>
          <Grid container spacing={2} sx={{ marginBottom: "160px" }}>
            <Grid
              item
              xs={4}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <CategoryItem title="GIÀY NAM" link="male" bg={MaleImage} />
            </Grid>
            <Grid
              item
              xs={4}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <CategoryItem title="GIÀY NỮ" link="female" bg={FemaleImage} />
            </Grid>
            <Grid
              item
              xs={4}
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <CategoryItem title="GIÀY TRẺ EM" link="child" bg={ChildImage} />
            </Grid>
          </Grid>
        </div>
      </section>
      {/* Shoes Showcase */}
      <section className="shoes-section section--gray">
        <div
          className="container"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <ShowcaseShoesTab
            shoesLatest={shoesLastest}
            shoesBestSells={shoesBestSells}
          />
        </div>
      </section>
      {/* Divider Section */}
      <Divider yellowWords="ThT" whiteWords="Shoes" height="406px" />
      <section className="shoes-section section--main">
        <div
          className="container"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <ShowcaseAccessoriesTab phuKienLatest={phuKienLatest} />
        </div>
      </section>
      {/* Sale */}
      <section className="sale-section section--gray">
        <div
          className="container sale-flex"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <SaleSlider />
        </div>
      </section>
    </div>
  );
}
