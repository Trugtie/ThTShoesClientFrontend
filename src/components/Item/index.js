import "./item.scss";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import cartSlice from "../../pages/CartPage/cartSlice";
import { useDispatch } from "react-redux";

export default function Item({ id, name, price = 0, img }) {
  const dispatch = useDispatch();
  const handleAddCart = (e) => {
    const item = {
      id: id,
      name: name,
      price: price,
      img: img,
      count: 1,
      priceSum: price,
    };
    dispatch(cartSlice.actions.addCart(item));
  };
  let navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="item-container">
      <div
        className="item-image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className="item-description">
        <div className="item-title">{name}</div>
        <div className="item-price">
          {price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </div>
      </div>
      <div className="item-button-group">
        <Button
          onClick={handleDetail}
          variant="contained"
          sx={{
            width: "192px",
            backgroundColor: "var(--button-third-color)",
            "&:hover": {
              backgroundColor: "var(--button-first-color)",
            },
          }}
        >
          Xem chi tiết
        </Button>
        <Button
          onClick={handleAddCart}
          variant="contained"
          sx={{
            width: "120px",
            backgroundColor: "var(--button-second-color)",
            "&:hover": {
              backgroundColor: "var(--button-first-color)",
            },
          }}
        >
          <AddShoppingCartOutlinedIcon />
        </Button>
      </div>
    </div>
  );
}
