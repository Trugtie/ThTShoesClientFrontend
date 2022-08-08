import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Slider from "@mui/material/Slider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useLayoutEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  shoesTypesSelector,
  accessoriesTypesSelector,
  shoesListSelector,
  accessoriesSelector,
} from "../../store/selectors";
import "./filters.scss";
import filtersSlice from "./filtersSlice";

export default function Filters({ categorySelect }) {
  const shoesTypes = useSelector(shoesTypesSelector);
  const shoesList = useSelector(shoesListSelector);
  const accessoriesList = useSelector(accessoriesSelector);
  const accessoriesTypes = useSelector(accessoriesTypesSelector);
  const currentLocate = useLocation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [category, setCategory] = useState(categorySelect);
  const [types, setTypes] = useState([]);

  //Set Max Price
  const maxPriceShoes = findMaxPrice(shoesList);
  const maxPriceAccessories = findMaxPrice(accessoriesList);
  const maxPrice =
    maxPriceShoes > maxPriceAccessories ? maxPriceShoes : maxPriceAccessories;

  const [price, setPrice] = useState([0, maxPrice]);
  dispatch(filtersSlice.actions.priceFilterChange(price));

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
          {currentLocate.pathname !== "/accessory" ? (
            <>
              {shoesTypes.map((type) => (
                <FormControlLabel
                  key={type.maloaigiay}
                  labelPlacement="start"
                  control={
                    <Checkbox
                      value={type.tenloai}
                      checked={types.includes(type.tenloai)}
                      onChange={handleChangeTypes}
                    />
                  }
                  label={type.tenloai}
                  sx={{ justifyContent: "space-between", margin: "0" }}
                />
              ))}
            </>
          ) : (
            <>
              {accessoriesTypes.map((type) => (
                <FormControlLabel
                  key={type.maLoaiPhuKien}
                  labelPlacement="start"
                  control={
                    <Checkbox
                      value={type.tenLoaiPhuKien}
                      checked={types.includes(type.tenLoaiPhuKien)}
                      onChange={handleChangeTypes}
                    />
                  }
                  label={type.tenLoaiPhuKien}
                  sx={{ justifyContent: "space-between", margin: "0" }}
                />
              ))}
            </>
          )}
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
          max={maxPrice}
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

function findMaxPrice(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len].gia > max) {
      max = arr[len].gia;
    }
  }
  return max;
}
