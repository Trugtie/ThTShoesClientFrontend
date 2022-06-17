import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GreenCheckIcon from "../../assets/checked.svg";
import CombIcon from "../../assets/comb.svg";
import ThumbGallery from "../../components/ThumbGallery";
import "./detail.scss";

export default function DetailItemPage() {
  let navigate = useNavigate();
  const handleGoback = () => {
    navigate("/homepage");
  };

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="detail-container">
      <section className="detail-section">
        <div className="container detailItem-container">
          <div className="detail-img">
            <ThumbGallery />
          </div>
          <div className="detail-info">
            <div className="detail-info__title">
              <h1 className="title__name">PRODUCT NAME</h1>
              <h2 className="title__price">1,800,000 ₫</h2>
            </div>
            <div className="detail-info__description">
              Product description bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            </div>
            <div className="detail-info__choose">
              <div className="choose__color">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Màu sắc</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={color}
                    label="Màu sắc"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Xanh</MenuItem>
                    <MenuItem value={20}>Đỏ</MenuItem>
                    <MenuItem value={30}>Đen</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="choose__size">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    label="Size"
                    onChange={handleChangeSize}
                  >
                    <MenuItem value={10}>35</MenuItem>
                    <MenuItem value={20}>36</MenuItem>
                    <MenuItem value={30}>37</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="choose__label">
                <div className="label__type">GIÀY ĐÁ BÓNG</div>
                <div className="label__name">ADIDAS</div>
              </div>
            </div>
            <div className="detail-info__more">
              <div className="more-item">
                <img src={GreenCheckIcon} className="item__check" />
                <h4 className="item__text">Trọng lượng: 23g</h4>
              </div>
              <div className="more-item">
                <img src={GreenCheckIcon} className="item__check" />
                <h4 className="item__text">Kiểu dáng: Classic</h4>
              </div>
              <div className="more-item">
                <img src={GreenCheckIcon} className="item__check" />
                <h4 className="item__text">Chất liệu: Cotton</h4>
              </div>
            </div>
            <div className="detail-info__guide">
              <Button
                onClick={handleOpen}
                sx={{
                  color: "black",
                  fontSize: "1rem",
                }}
              >
                <img src={CombIcon} className="comb-ico" />
                Xem biểu đồ kích cỡ
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Modal>
            </div>
            <div className="detail-info__btn">
              <Button
                onClick={handleGoback}
                variant="contained"
                sx={{
                  backgroundColor: "var(--button-third-color)",
                  "&:hover": {
                    backgroundColor: "var(--button-first-color)",
                  },
                  flexBasis:'200px'
                }}
              >
                TRỞ LẠI
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "var(--button-second-color)",
                  "&:hover": {
                    backgroundColor: "var(--button-first-color)",
                  },
                  flexBasis:'400px'
                }}
              >
                THÊM VÀO GIỎ HÀNG
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
