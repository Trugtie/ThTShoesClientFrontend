import "./item.scss";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useNavigate, useLocation } from "react-router-dom";
import cartSlice from "../../pages/CartPage/cartSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

export default function Item({ id, name, price = 0, img, category }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const handleAddCart = (e) => {
    const item = {
      id: id,
      name: name,
      price: price,
      img: img,
      count: 1,
      priceSum: price,
      category: category,
    };
    dispatch(cartSlice.actions.addCart(item));
    toast.success(`Đã thêm ${name} vào giỏ hàng ! `);
  };
  let navigate = useNavigate();
  const handleDetail = () => {
    if(location.pathname === "/")
    navigate(`homepage/detail/${id}`);
    else
    navigate(`${location.pathname}/detail/${id}`);
  };

  return (
    <div className="item-container">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            color: "#fff",
            width: "300px",
            height: "50px",
            fontSize: "1.1rem",
          },
          // Default options for specific types
          success: {
            duration: 3000,
            style: {
              background: "rgb(56, 142, 60)",
            },
          },
        }}
      />
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
