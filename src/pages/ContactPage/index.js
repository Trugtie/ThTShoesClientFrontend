import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import LocateIcon from "../../assets/locate.svg";
import Logo from "../../assets/logolarge.svg";
import MailIcon from "../../assets/mail.svg";
import PhoneIcon from "../../assets/phone.svg";

import "./contact.scss";

export default function ContactPage() {
  return (
    <div className="contactpage-container">
      <section className="contact-section">
        <div className="container contact-container">
          <h1
            className="contact-title"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            THÔNG TIN LIÊN HỆ
          </h1>
          <div className="contact-flex">
            <div className="contact-content">
              <div className="info-wraper">
                <div
                  className="info-item"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <img src={LocateIcon} /> 125 Minh Phụng, Phường 2, Quận 11,
                  Tp.HCM
                </div>
                <div
                  className="info-item"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                >
                  <img src={MailIcon} />
                  thtshoes@gmail.com
                </div>
                <div
                  className="info-item"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="1500"
                >
                  <img src={PhoneIcon} /> 076 932 1191
                </div>
              </div>
              <div
                className="contact-logo"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="2000"
              >
                <img src={Logo} />
              </div>
            </div>
            <div
              className="contact-form"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="filled-basic"
                    label="Họ tên"
                    placeholder="Nhập họ tên..."
                    variant="filled"
                    sx={{ background: "white" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="filled-basic"
                    label="Email"
                    placeholder="Nhập email..."
                    variant="filled"
                    sx={{ background: "white" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="filled-basic"
                    label="Số điện thoại"
                    placeholder="Nhập số điện thoại..."
                    variant="filled"
                    type="number"
                    sx={{ background: "white" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="filled-basic"
                    label="Địa chỉ"
                    placeholder="Nhập địa chỉ..."
                    variant="filled"
                    sx={{ background: "white" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextareaAutosize
                    maxRows={7}
                    minRows={7}
                    aria-label="Lời nhắn"
                    placeholder="Lời nhắn..."
                    style={{
                      width: "100%",
                      padding: "1rem",
                      fontSize: "1.3rem",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "20rem",
                      backgroundColor: "red",
                      "&:hover": {
                        backgroundColor: "#ff0000d9",
                      },
                    }}
                  >
                    GỬI
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </section>
      <section className="map-section">
        <div
          className="container map-container"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="100%"
                height="287"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=125%20Minh%20Ph%E1%BB%A5ng,%20Ph%C6%B0%E1%BB%9Dng%202,%20Qu%E1%BA%ADn%2011,%20Tp.HCM&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
