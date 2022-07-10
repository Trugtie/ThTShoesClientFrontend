import SearchIcon from "@mui/icons-material/Search";
import Slider from "../../components/Slider";
import "./style.scss";
import { useSelector } from "react-redux";
import { eventSelector } from "../../store/selectors";
export default function EventPage() {
  const data = useSelector(eventSelector);
  return (
    <div className="event-page-container">
      <section className="search-section">
        <div className="container event-container">
          <SearchIcon className="search-icon" />
          <input className="search-input" placeholder="Bạn muốn tìm gì"></input>
        </div>
      </section>
      <section className="event-section">
        <div className="container">
          <h1 className="event-title">SỰ KIỆN</h1>
          <div className="event-slider">
            <Slider bg="myswiper--second" data={data} mod={3} />
          </div>
        </div>
      </section>
    </div>
  );
}
