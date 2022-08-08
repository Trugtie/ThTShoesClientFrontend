import "./style.scss";
import { useSelector } from "react-redux";
import { eventDetailSelector } from "../../store/selectors";
import { useParams, Link } from "react-router-dom";
import SaleIcon from "../../assets/saleicon.png";

export default function DetailEventPage() {
  const { id } = useParams();
  const data = useSelector(eventDetailSelector(id));
  const user = localStorage.getItem("user");
  const endDate = new Date(data.ngaykt);
  const startDate = new Date(data.ngaybd);
  return (
    <div
      className="detail-container"
      data-aos="fade"
      data-aos-duration="800"
      data-aos-delay="100"
    >
      <section className="detail-section">
        <div className="container detailItem-container detailItem-container--event">
          <div
            className="event-img"
            style={{
              background: `url(${data.urlanh}) no-repeat center`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="event-article">
            <h1 className="event-title">
              {" "}
              <img src={SaleIcon} className="sale-icon"></img> Chương trình{" "}
              {data.tieude.toLowerCase()}
            </h1>
            <hr />
            <p className="event-description">{data.mota}</p>
            <div className="event-time">
              <span className="time-bold">Áp dụng từ ngày: </span>
              {startDate.getDate()}-{startDate.getMonth() + 1}-
              {startDate.getFullYear()}
            </div>
            <div className="event-time">
              <span className="time-bold">Đến ngày: </span> {endDate.getDate()}-
              {endDate.getMonth() + 1}-{endDate.getFullYear()}
            </div>
            <hr />
            <div className="event-code">
              <span className="time-bold">Mã khuyến mãi: </span>
              <span className="code-box">{data.makm}</span>
            </div>
            <div className="event-notice">
              <span className="note-red">Lưu ý: </span> Khuyến mãi chỉ áp dụng
              cho thành viên của cửa hàng &nbsp;
              {user === null && (
                <>
                  <Link to="/register" className="event-link">
                    Đăng ký làm thành viên ngay
                  </Link>
                  / &nbsp;
                  <Link to="/login" className="event-link">
                    Đăng nhập để có thể sử dụng mã
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
