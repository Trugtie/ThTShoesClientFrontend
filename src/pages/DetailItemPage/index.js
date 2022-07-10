import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GreenCheckIcon from "../../assets/checked.svg";
import CombIcon from "../../assets/comb.svg";
import ThumbGallery from "../../components/ThumbGallery";
import "./detail.scss";
import { useSelector } from "react-redux";
import {
  shoesDetailSelector,
  accessoryDetailSelector,
} from "../../store/selectors";
import { useDispatch } from "react-redux";
import cartSlice from "../CartPage/cartSlice";
import toast, { Toaster } from "react-hot-toast";

export default function DetailItemPage() {
  let { id, pre } = useParams();
  let navigate = useNavigate();
  const shoes = useSelector(shoesDetailSelector(id));
  const accessory = useSelector(accessoryDetailSelector(id));
  console.log(shoes);
  console.log(accessory);
  const dispatch = useDispatch();
  const handleAddCart = (e) => {
    const item = id.includes("PK")
      ? {
          id: accessory.mapk,
          name: accessory.tenpk,
          price: accessory.gia,
          img: accessory.urlanh,
          count: 1,
          priceSum: accessory.gia,
          category: "Phụ kiện",
        }
      : {
          id: shoes.magiay,
          name: shoes.tengiay,
          price: shoes.gia,
          img: shoes.urlanh,
          count: 1,
          priceSum: shoes.gia,
          category: shoes.loaigiayHangDanhmuc.danhmuc.tendanhmuc,
        };
    dispatch(cartSlice.actions.addCart(item));

    id.includes("PK")
      ? toast.success(`Đã thêm ${accessory.tenpk} vào giỏ hàng ! `)
      : toast.success(`Đã thêm ${shoes.tengiay} vào giỏ hàng ! `);
  };

  const handleGoback = () => {
    navigate(`/${pre}`);
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
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            color: "#fff",
            width: "300px",
            height: "50px",
            fontSize: "1.1rem",
          },
          // Default options for specific types
          success: {
            duration: 3000,
            style: {
              background: "rgb(56, 142, 60)",
            },
          },
        }}
      />
      <section className="detail-section">
        {id.includes("PK") ? (
          <div className="container detailItem-container">
            <div className="detail-img">
              <ThumbGallery
                imgList={accessory.hinhs}
                urlImg={accessory.urlanh}
              />
            </div>
            <div className="detail-info">
              <div className="detail-info__title">
                <h1 className="title__name">{accessory.tenpk}</h1>
                <h2 className="title__price">
                  {accessory.gia.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </h2>
              </div>
              <div className="detail-info__description">{accessory.mota}</div>
              <div className="detail-info__choose">
                <div className="choose__label">
                  <div className="label__category">PHỤ KIỆN</div>
                  <div className="label__type">
                    {accessory.loaiPhuKien.tenLoaiPhuKien.toUpperCase()}
                  </div>
                </div>
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
                    flexBasis: "200px",
                  }}
                >
                  TRỞ LẠI
                </Button>
                <Button
                  onClick={handleAddCart}
                  variant="contained"
                  sx={{
                    backgroundColor: "var(--button-second-color)",
                    "&:hover": {
                      backgroundColor: "var(--button-first-color)",
                    },
                    flexBasis: "400px",
                  }}
                >
                  THÊM VÀO GIỎ HÀNG
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="container detailItem-container">
            <div className="detail-img">
              <ThumbGallery imgList={shoes.hinhs} urlImg={shoes.urlanh} />
            </div>
            <div className="detail-info">
              <div className="detail-info__title">
                <h1 className="title__name">{shoes.tengiay}</h1>
                <h2 className="title__price">
                  {shoes.gia.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </h2>
              </div>
              <div className="detail-info__description">{shoes.mota}</div>
              <div className="detail-info__choose">
                <div className="choose__color">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Màu sắc
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={color}
                      label="Màu sắc"
                      onChange={handleChange}
                      MenuProps={{
                        disableScrollLock: true,
                      }}
                    >
                      {shoes.mausacs.map((mau) => {
                        return (
                          <MenuItem key={mau.mamau} value={mau.mamau}>
                            {mau.tenmau}
                          </MenuItem>
                        );
                      })}
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
                      MenuProps={{
                        disableScrollLock: true,
                      }}
                    >
                      {shoes.sizes.map((size) => {
                        return (
                          <MenuItem key={size.masize} value={size.masize}>
                            {size.tensize}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
                <div className="choose__label">
                  <div className="label__category">
                    {" "}
                    GIÀY{" "}
                    {shoes.loaigiayHangDanhmuc.danhmuc.tendanhmuc.toUpperCase()}
                  </div>
                  <div className="label__type">
                    {"LOẠI " +
                      shoes.loaigiayHangDanhmuc.loaigiay.tenloai.toUpperCase()}
                  </div>
                  <div className="label__name">ADIDAS</div>
                </div>
              </div>
              <div className="detail-info__more">
                <div className="more-item">
                  <img src={GreenCheckIcon} className="item__check" />
                  <h4 className="item__text">
                    Trọng lượng: {shoes.trongluong}g
                  </h4>
                </div>
                <div className="more-item">
                  <img src={GreenCheckIcon} className="item__check" />
                  <h4 className="item__text">Kiểu dáng: {shoes.kieudang}</h4>
                </div>
                <div className="more-item">
                  <img src={GreenCheckIcon} className="item__check" />
                  <h4 className="item__text">Chất liệu: {shoes.chatlieu}</h4>
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
                    flexBasis: "200px",
                  }}
                >
                  TRỞ LẠI
                </Button>
                <Button
                  onClick={handleAddCart}
                  variant="contained"
                  sx={{
                    backgroundColor: "var(--button-second-color)",
                    "&:hover": {
                      backgroundColor: "var(--button-first-color)",
                    },
                    flexBasis: "400px",
                  }}
                >
                  THÊM VÀO GIỎ HÀNG
                </Button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
