import "./style.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function EventItem() {
  let navigate = useNavigate();
  const handleDetail = () => {
    navigate("/detail");
  };

  return (
    <div className="item-container item-container--event">
      <div
        className="item-image"
        style={{
          backgroundImage: "url(http://placehold.jp/331x210.png)",
        }}
      >
        <div className="event-range">1/6 -<br/> 30/6</div>
      </div>
      <div className="item-description">
        <div className="item-title item-title--event">Chuck Taylor Classic</div>
        <div className="item-price item-price--event">
          Chương trình khuyến mãi cho 50 khách hàng đầu tiên...
        </div>
      </div>
      <div className="item-button-group" style={{ justifyContent: "flex-end" }}>
        <Button
          onClick={handleDetail}
          variant="contained"
          sx={{
            backgroundColor: "var(--button-third-color)",
            marginTop: "1.5rem",
            borderTopLeftRadius: ".5rem",
            "&:hover": {
              backgroundColor: "var(--button-first-color)",
            },
          }}
        >
          Xem thêm
        </Button>
      </div>
    </div>
  );
}
