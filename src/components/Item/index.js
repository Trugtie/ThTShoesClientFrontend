import "./item.scss";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

export default function Item() {
  let navigate = useNavigate();
  const handleDetail = () => {
    navigate("/detail");
  };

  return (
    <div className="item-container">
      <div
        className="item-image"
        style={{
          backgroundImage: "url(http://placehold.jp/331x210.png)",
        }}
      ></div>
      <div className="item-description">
        <div className="item-title">Chuck Taylor Classic</div>
        <div className="item-price">1,250,000 đ</div>
      </div>
      <div className="item-button-group">
        <Button onClick={handleDetail}
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
