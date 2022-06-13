import Button from "@mui/material/Button";
import "./home.scss";
import CategoryItem from "../../components/CategoryItem";
import Grid from "@mui/material/Grid";
import MaleImage from "../../assets/male.png";
import FemaleImage from "../../assets/female.png";
import ChildImage from "../../assets/child.png";
import ShowcaseTab from "../../components/ShowcaseTab";

export default function HomePage() {
  return (
    <div className="homepage-container">
        {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Chào mừng đến với ngôi nhà <br />
            ThTShoes
          </h1>
          <h2 className="hero-description">
            Nơi thỏa mãn niềm đam mê giày thể thao của các bạn, trẻ trung -
            phong cách - hiện đại là phương châm của chúng tôi.
            <br />
            Hãy chọn cho mình đôi giày xịn xò nhất nào (^.^)
          </h2>
          <div className="hero-btn">
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
          <h1 className="categories-header-title">DANH MỤC</h1>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <CategoryItem title="GIÀY NAM" link="#" bg={MaleImage} />
            </Grid>
            <Grid item xs={4}>
              <CategoryItem title="GIÀY NỮ" link="#" bg={FemaleImage} />
            </Grid>
            <Grid item xs={4}>
              <CategoryItem title="GIÀY TRẺ EM" link="#" bg={ChildImage} />
            </Grid>
          </Grid>
        </div>
      </section>
      {/* Shoes Showcase */}
      <section className="shoes-section">
        <div className="container">
          <ShowcaseTab />
        </div>
      </section>
    </div>
  );
}
