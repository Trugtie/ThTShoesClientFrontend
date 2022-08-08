import "./style.scss";
import Logo from "../../assets/logo.svg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function SaleItemLarge({ itemData }) {
  const navigate = useNavigate();
  const startDate = new Date(itemData.ngaybd);
  const endDate = new Date(itemData.ngaykt);
  const handleClick = () => {
    navigate(`/event/detailEvent/${itemData.makm}`);
  };
  return (
    <div
      className="sale-large-container"
      style={{
        background: `url(${itemData.urlanh}) no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      <div className="sale-content">
        <div className="sale-logo-wrap">
          <img src={Logo} className="sale-logo" />
        </div>
        <div className="sale-description">
          {itemData.tieude}{" "}
          <span className="sale-cost">GIẢM {itemData.giatrigiam}%</span> <br />
          <span className="sale-time">
            {startDate.getDate()}/{startDate.getMonth()+1} - {endDate.getDate()}/
            {endDate.getMonth()+1}
          </span>
        </div>
        <div className="sale-button">
          <Button
            onClick={handleClick}
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
