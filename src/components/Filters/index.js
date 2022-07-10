import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Slider from "@mui/material/Slider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useLayoutEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./filters.scss";
import filtersSlice from "./filtersSlice";

export default function Filters({ categorySelect }) {
  const currentLocate = useLocation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [category, setCategory] = useState(categorySelect);
  const [types, setTypes] = useState([]);
  const [price, setPrice] = useState([0, 6000000]);
  useLayoutEffect(() => {
    setCategory(categorySelect);
    dispatch(filtersSlice.actions.categoryFilterChange(categorySelect));
  }, [categorySelect]);

  const handleChangeCategory = (event, category) => {
    setCategory(category);
    dispatch(filtersSlice.actions.categoryFilterChange(category));
    let locate = "";
    if (category == "Nữ") locate = "/female";
    else if (category == "Nam") locate = "/male";
    else if (category == "Trẻ em") locate = "/child";
    else if (category == "Phụ kiện") locate = "/accessory";
    else locate = currentLocate.pathname;
    navigate(`${locate}`);
  };

  const handlePrice = (event, newPrice) => {
    setPrice(newPrice);
    dispatch(filtersSlice.actions.priceFilterChange(newPrice));
  };

  const handleChangeTypes = (event) => {
    const index = types.indexOf(event.target.value);
    if (index === -1) {
      setTypes([...types, event.target.value]);
      dispatch(
        filtersSlice.actions.typeFilterChange([...types, event.target.value])
      );
    } else {
      setTypes(types.filter((type) => type !== event.target.value));
      dispatch(
        filtersSlice.actions.typeFilterChange(
          types.filter((type) => type !== event.target.value)
        )
      );
    }
  };

  return (
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
          <ToggleButton value="Nam">NAM</ToggleButton>
          <ToggleButton value="Nữ">NỮ</ToggleButton>
          <ToggleButton value="Trẻ em">TRẺ EM</ToggleButton>
          <ToggleButton value="Phụ kiện">PHỤ KIỆN</ToggleButton>
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
          min={0}
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
  );
}
