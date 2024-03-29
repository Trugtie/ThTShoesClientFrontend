import "./item.scss";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useNavigate, useLocation } from "react-router-dom";
import cartSlice from "../../pages/CartPage/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

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
    toast.success(`Đã thêm ${id} vào giỏ hàng ! `);
  };
  let navigate = useNavigate();
  const handleDetail = () => {
    if (location.pathname === "/") navigate(`homepage/detail/${id}`);
    else navigate(`${location.pathname}/detail/${id}`);
  };

  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.05 }}
      className="item-container"
    >
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
        {category === "Phụ kiện" && (
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
        )}
      </div>
    </motion.div>
  );
}
