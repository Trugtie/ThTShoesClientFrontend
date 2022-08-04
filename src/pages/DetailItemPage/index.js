import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

import Comment from "../../components/Comment";

import LoadingSpiner from "../../components/LoadingSpiner";

import toast, { Toaster } from "react-hot-toast";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import shoesApi from "../../api/shoesApi";

import { accessoryDetailSelector } from "../../store/selectors";

import ThumbGallery from "../../components/ThumbGallery";

import cartSlice from "../CartPage/cartSlice";

import GreenCheckIcon from "../../assets/checked.svg";
import CombIcon from "../../assets/comb.svg";
import "./detail.scss";

export default function DetailItemPage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let { id, pre } = useParams();

  const [shoes, setShoes] = useState(null);
  const [sizeId, setSizeId] = useState("");
  const [size, setSize] = useState("");
  const [listSize, setListSize] = useState([]);
  const [listColorOfSize, setListColorOfSize] = useState([]);
  const [color, setColor] = useState("");
  const [colorId, setColorId] = useState("");
  const [soLuongGiayOfColor, setSoLuongGiayOfColor] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (id.includes("GA")) {
      async function getShoesById() {
        const shoes = await shoesApi.getById(id);
        await setShoes(shoes);

        setListSize(shoes.sizes);
        setSize(shoes.sizes[0]);
        setSizeId(shoes.sizes[0].masize);

        setListColorOfSize(shoes.sizes[0].mausacs);
        setColor(shoes.sizes[0].mausacs[0]);
        setColorId(shoes.sizes[0].mausacs[0].mamau);
        setSoLuongGiayOfColor(shoes.sizes[0].mausacs[0].soluong);
      }

      getShoesById();
    }
  }, []);

  const accessory = useSelector(accessoryDetailSelector(id));

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
          size: size,
          color: color,
        };
    dispatch(cartSlice.actions.addCart(item));
    id.includes("PK")
      ? toast.success(`Đã thêm ${accessory.tenpk} vào giỏ hàng ! `)
      : toast.success(`Đã thêm ${shoes.tengiay} vào giỏ hàng ! `);
  };

  const handleGoback = () => {
    navigate(`/${pre}`);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeSize = (event) => {
    const masize = event.target.value;
    setSizeId(masize);
    listSize.map((value) => {
      if (value.masize === masize) {
        setSize(value);
        return;
      }
    });

    getListColorOfSize(masize);
  };

  const handleChangeColor = (event) => {
    const maColor = event.target.value;
    setColorId(maColor);
    listColorOfSize.map((value) => {
      if (maColor === value.mamau) {
        console.log(value);
        setColor(value);
        setSoLuongGiayOfColor(value.soluong);
        return;
      }
    });
  };

  const getListColorOfSize = (idSize) => {
    listSize.map((value) => {
      if (value.masize === idSize) {
        setListColorOfSize(value.mausacs);
        return;
      }
    });
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
      {returnCompomentToaster()}
      <section className="detail-section">
        {id.includes("GA")
          ? returnCompomentShoes(
              shoes,
              colorId,
              open,
              sizeId,
              style,
              listColorOfSize,
              soLuongGiayOfColor,
              handleGoback,
              handleAddCart,
              handleChangeSize,
              handleOpen,
              handleClose,
              handleChangeColor
            )
          : returnCompomentAccessory(accessory, handleGoback, handleAddCart)}
      </section>
      <section className="comment-section">
        {shoes && <Comment data={shoes.binhluans} id={shoes.magiay} />}
        {accessory && (
          <Comment data={accessory.binhluans} id={accessory.mapk} />
        )}
      </section>
    </div>
  );
}

function returnCompomentToaster() {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      toastOptions={{
        // Define default options
        className: "",
        duration: 3000,
        style: {
          color: "#fff",
          width: "250px",
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
        error: {
          duration: 3000,
          style: {
            background: "rgb(211, 47, 47)",
          },
        },
      }}
    />
  );
}

function returnCompomentAccessory(accessory, handleGoback, handleAddCart) {
  return (
    <div className="container detailItem-container">
      <div className="detail-img">
        <ThumbGallery imgList={accessory.hinhs} urlImg={accessory.urlanh} />
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
  );
}

function returnCompomentShoes(
  shoes,
  colorId,
  open,
  sizeId,
  style,
  listColorOfSize,
  soLuongGiayOfColor,
  handleGoback,
  handleAddCart,
  handleChangeSize,
  handleOpen,
  handleClose,
  handleChangeColor
) {
  return shoes === null ? (
    <LoadingSpiner />
  ) : (
    <div className="container detailItem-container">
      <div className="detail-img">
        <ThumbGallery imgList={shoes.hinhs} urlImg={shoes.urlanh} />
      </div>
      <div className="detail-info">
        <div className="detail-info__title">
          <h1 className="title__name">{shoes.tengiay}</h1>
          <h2 className="title__price">
            {shoes.gia == null
              ? null
              : shoes.gia.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
          </h2>
        </div>
        <div className="detail-info__description">{shoes.mota}</div>
        <div className="detail-info__choose">
          <div className="choose__size">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Size</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sizeId}
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
          <div className="choose__color">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Màu sắc</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={colorId}
                label="Màu sắc"
                onChange={handleChangeColor}
                MenuProps={{
                  disableScrollLock: true,
                }}
              >
                {listColorOfSize.map((mau) => {
                  return (
                    <MenuItem key={mau.mamau} value={mau.mamau}>
                      {mau.tenmau}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <div className="choose__label">
            <div className="label__category">
              GIÀY{" "}
              {shoes.loaigiayHangDanhmuc.danhmuc == null
                ? null
                : shoes.loaigiayHangDanhmuc.danhmuc.tendanhmuc.toUpperCase()}
            </div>
            <div className="label__type">
              {"LOẠI " + shoes.loaigiayHangDanhmuc.loaigiay == null
                ? null
                : shoes.loaigiayHangDanhmuc.loaigiay.tenloai.toUpperCase()}
            </div>
            <div className="label__name">ADIDAS</div>
          </div>
        </div>
        <div className="detail-info__more">
          <div className="more-item">
            <img src={GreenCheckIcon} className="item__check" />
            <h4 className="item__text">Trọng lượng: {shoes.trongluong}g</h4>
          </div>
          <div className="more-item">
            <img src={GreenCheckIcon} className="item__check" />
            <h4 className="item__text">Kiểu dáng: {shoes.kieudang}</h4>
          </div>
          <div className="more-item">
            <img src={GreenCheckIcon} className="item__check" />
            <h4 className="item__text">Chất liệu: {shoes.chatlieu}</h4>
          </div>
          <div className="more-item">
            <img src={GreenCheckIcon} className="item__check" />
            <h4 className="item__text">
              Số Lượng còn lại: {soLuongGiayOfColor}
            </h4>
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
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
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
  );
}
