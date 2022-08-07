import "./style.scss";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";


export default function EventItem({id, description, cost, img, startDate, endDate,title}) {
  let navigate = useNavigate();
  const location = useLocation();

 const handleDetail = () => {
    if(location.pathname === "/")
    navigate(`homepage/detailEvent/${id}`);
    else
    navigate(`${location.pathname}/detailEvent/${id}`);
  };
  
  const start = new Date(startDate);
  const end = new Date(endDate);

  return (
    <div className="item-container item-container--event">
      <div
        className="item-image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="event-range">{start.getDate()}/{start.getMonth()+1} -<br/> {end.getDate()}/{end.getMonth()+1}</div>
      </div>
      <div className="item-description">
        <div className="item-title item-title--event">{title}</div>
        <div className="item-price item-price--event">
          {description} - Giảm {cost}%
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
