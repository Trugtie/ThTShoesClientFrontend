import "./style.scss";
import Logo from "../../assets/logo.svg";
import Button from "@mui/material/Button";

export default function SaleItemLarge() {
  return (
    <div
      className="sale-large-container"
      style={{
        background:
          'url("https://images.alphacoders.com/241/241133.jpg") no-repeat center',
        backgroundSize:'cover'
      }}
    >
      <div className="sale-content">
        <div className="sale-logo-wrap">
          <img src={Logo} className="sale-logo" />
        </div>
        <div className="sale-description">
          KHUYẾN MÃI CHO NGƯỜI MỚI <span className="sale-cost">GIẢM 50%</span>{" "}
          <br />
          <span className="sale-time">6/6 - 6/7</span>
        </div>
        <div className="sale-button">
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
    </div>
  );
}
