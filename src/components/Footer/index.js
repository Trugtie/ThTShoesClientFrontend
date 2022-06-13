import Logo from "../../assets/logolarge.svg";
import LocateIcon from "../../assets/locate.svg";
import MailIcon from "../../assets/mail.svg";
import PhoneIcon from "../../assets/phone.svg";
import FaceBookIcon from "../../assets/facebook.svg";
import YoutubeIcon from "../../assets/youtube.svg";
import InstagramIcon from "../../assets/insta.svg";
import TwitterIcon from "../../assets/twitter.svg";
import PinterestIcon from "../../assets/pinterest.svg";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="content-contact">
            <div className="contact-logo">
              <img src={Logo} />
            </div>
            <div className="contact-info">
              <div className="info-wraper">
                <div className="info-item">
                  <img src={LocateIcon} /> 125 Minh Phụng, Phường 2, Quận 11,
                  Tp.HCM
                </div>
                <div className="info-item">
                  <img src={MailIcon} />
                  thtshoes@gmail.com
                </div>
                <div className="info-item">
                  <img src={PhoneIcon} /> 076 932 1191
                </div>
              </div>
            </div>
          </div>
          <div className="content-slogan">
            Ngôi nhà của những tín đồ yêu giày thể thao.<br/>
            Không ngừng phát triển và lớn mạnh theo từng ngày.
          </div>
          <div className="content-social-media">
            <img src={FaceBookIcon} />
            <img src={YoutubeIcon} />
            <img src={InstagramIcon} />
            <img src={TwitterIcon} />
            <img src={PinterestIcon} />
          </div>
        </div>
        <div className="footer-map">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="407"
                height="314"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=125%20Minh%20Ph%E1%BB%A5ng,%20Ph%C6%B0%E1%BB%9Dng%202,%20Qu%E1%BA%ADn%2011,%20Tp.HCM&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
              <a href="https://putlocker-is.org"></a>
              <br />
              <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        © Copyright 2022 www.ththshoes.com. All rights reserved.
      </div>
    </footer>
  );
}
