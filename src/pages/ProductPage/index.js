import "./style.scss";
import SearchIcon from "@mui/icons-material/Search";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState, useLayoutEffect  } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import Item from "../../components/Item";

export default function ProductPage({ categorySelect }) {
  const [category, setCategory] = useState(categorySelect);
  const [types, setTypes] = useState([]);
  const [price, setPrice] = useState([800000, 6000000]);

  useLayoutEffect (() => {
    setCategory(categorySelect);
  }, [categorySelect]);

  console.log(categorySelect);
  console.log(category);

  const handleChangeCategory = (event, category) => {
    setCategory(category);
  };

  const handleChangeTypes = (event) => {
    const index = types.indexOf(event.target.value);
    if (index === -1) {
      setTypes([...types, event.target.value]);
    } else {
      setTypes(types.filter((type) => type !== event.target.value));
    }
  };

  const handlePrice = (event, newPrice) => {
    setPrice(newPrice);
  };

  return (
    <div className="products-container">
      <section className="search-section">
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input className="search-input" placeholder="Bạn muốn tìm gì"></input>
        </div>
      </section>
      <div className="section-flex">
        <section className="filter-section">
          <h1 className="filter-title">Danh mục</h1>
          <div className="filter-categories">
            <ToggleButtonGroup
              color="primary"
              value={category}
              exclusive
              onChange={handleChangeCategory}
              sx={{
                display: "grid",
                gridTemplateColumns: "120px 120px",
                gap: "5px",
              }}
            >
              <ToggleButton value="male">NAM</ToggleButton>
              <ToggleButton value="female">NỮ</ToggleButton>
              <ToggleButton value="child">TRẺ EM</ToggleButton>
              <ToggleButton value="accessory">PHỤ KIỆN</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <h1 className="filter-title">Loại giày</h1>
          <div className="filter-type">
            <FormGroup>
              <FormControlLabel
                labelPlacement="start"
                control={
                  <Checkbox
                    value="Bóng đá"
                    checked={types.includes("Bóng đá")}
                    onChange={handleChangeTypes}
                  />
                }
                label="Bóng đá"
                sx={{ justifyContent: "space-between", margin: "0" }}
              />
              <FormControlLabel
                labelPlacement="start"
                control={
                  <Checkbox
                    value="Bóng rổ"
                    checked={types.includes("Bóng rổ")}
                    onChange={handleChangeTypes}
                  />
                }
                label="Bóng rổ"
                sx={{ justifyContent: "space-between", margin: "0" }}
              />
              <FormControlLabel
                labelPlacement="start"
                control={
                  <Checkbox
                    value="Chạy bộ"
                    checked={types.includes("Chạy bộ")}
                    onChange={handleChangeTypes}
                  />
                }
                label="Chạy bộ"
                sx={{ justifyContent: "space-between", margin: "0" }}
              />
              <FormControlLabel
                labelPlacement="start"
                control={
                  <Checkbox
                    value="Quần vợt"
                    checked={types.includes("Quần vợt")}
                    onChange={handleChangeTypes}
                  />
                }
                label="Quần vợt"
                sx={{ justifyContent: "space-between", margin: "0" }}
              />
              <FormControlLabel
                labelPlacement="start"
                control={
                  <Checkbox
                    value="Cầu lông"
                    checked={types.includes("Cầu lông")}
                    onChange={handleChangeTypes}
                  />
                }
                label="Cầu lông"
                sx={{ justifyContent: "space-between", margin: "0" }}
              />
            </FormGroup>
          </div>
          <h1 className="filter-title">Mức giá</h1>
          <div className="filter-price">
            <div className="price-show">
              {price[0].toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}{" "}
              -{" "}
              {price[1].toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </div>
            <Slider
              value={price}
              min={800000}
              max={6000000}
              onChange={handlePrice}
              valueLabelDisplay="off"
              sx={{
                "&.MuiSlider-root": {
                  color: "black",
                },
              }}
            />
          </div>
        </section>
        <section className="list-section">
          <Grid
            className="list-container"
            container
            spacing={2}
            sx={{ padding: "2rem" }}
          >
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Item />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Item />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Item />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Item />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Item />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Item />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Item />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Item />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Item />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Item />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Item />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Item />
            </Grid>
          </Grid>
        </section>
      </div>
    </div>
  );
}
