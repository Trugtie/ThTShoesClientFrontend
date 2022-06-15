import AboutImg from "../../assets/aboutImg.png";
import GaoNetAvt from "../../assets/gaonet.png";
import HistoryImg from "../../assets/historyImg.png";
import TrugtieAvt from "../../assets/trugtie.png";
import "./about.scss";

export default function AboutPage() {
  return (
    <div className="aboutpage-container">
      <section className="about-section">
        <div className="container container-about">
          <div className="about-content">
            <h1 className="about-title">Về chúng tôi</h1>
            <p className="about-description">
              ThTShoes là cửa hàng chuyên phân phối giày thể thao các loại cho
              mọi lứa tuổi ở Việt Nam.
            </p>
          </div>
          <div className="about-image">
            <img src={AboutImg} />
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container container-about container-about--reverse">
          <div className="about-content about-content--reverse">
            <h1 className="about-title">Lịch sử hình thành</h1>
            <p className="about-description">
              TThTShoes được thành lập vào năm 2022 bởi 2 nhà sáng lập Trugtie
              và GaoNet với mong muốn mang lại cho khách hàng những chiếc giày
              hiện đại và phong cách nhất
            </p>
          </div>
          <div className="about-image about-image--reverse">
            <img src={HistoryImg} />
          </div>
        </div>
      </section>
      <section className="member-section">
        <div className="container container-about container-about--member">
          <h1 className="about-title">Đội ngũ của chúng tôi</h1>
          <div className="about-member">
            <div className="member">
              <img src={TrugtieAvt} />
              <h2 className="member-name">Trugtie</h2>
              <h3 className="member-description">Nhà sáng lập ThTShoes</h3>
            </div>
            <div className="member">
              <img src={GaoNetAvt} />
              <h2 className="member-name">GaoNet</h2>
              <h3 className="member-description">Nhà sáng lập ThTShoes</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
