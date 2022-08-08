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

import StepTwo from "../../assets/steptwo.jpg";
import StepThree from "../../assets/stepthree.jpg";
import StepFour from "../../assets/stepfourjpg.jpg";
import MaleSize from "../../assets/malesize.jpg";
import FemaleSize from "../../assets/femailsize.jpg";

export default function DetailItemPage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let { id, pre } = useParams();

  const [shoes, setShoes] = useState(null);
  const [sizeId, setSizeId] = useState("");
  const [size, setSize] = useState("");
  // const [listSize, setListSize] = useState([]);
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

        // setListSize(shoes.sizes);
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

  const handleChangeSize = (e) => {
    const masize = e.target.value;
    setSizeId(masize);
    const size = shoes.sizes.find((item) => {
      return item.masize === masize;
    });
    setSize(size);
    setColor(size.mausacs[0]);
    setColorId(size.mausacs[0].mamau);
    setSoLuongGiayOfColor(size.mausacs[0].soluong);
    setListColorOfSize(size.mausacs);
  };

  const handleChangeColor = (e) => {
    const colorId = e.target.value;
    setColorId(colorId);
    const color = listColorOfSize.find((item) => {
      return item.mamau === colorId;
    });
    setColor(color);
    setSoLuongGiayOfColor(color.soluong);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    width: "70vw",
    height: "80vh",
    overflowY: "auto",
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
      <div
        className="detail-img"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <ThumbGallery imgList={accessory.hinhs} urlImg={accessory.urlanh} />
      </div>
      <div
        className="detail-info"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay="100"
      >
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
      <div
        className="detail-img"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <ThumbGallery imgList={shoes.hinhs} urlImg={shoes.urlanh} />
      </div>
      <div
        className="detail-info"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay="100"
      >
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
              <Typography
                id="modal-modal-title"
                variant="h4"
                component="h2"
                align="center"
                sx={{ marginBottom: "1rem" }}
              >
                Hướng dẫn chọn size giày chuẩn
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Bước 1. Chuẩn bị những vật dụng sau để đo kích thước chân:
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ padding: "1rem 2rem" }}
              >
                <ul>
                  <li>Một tờ giấy (to hơn chân)</li>
                  <li>Một cây thước</li>
                  <li>Một cây bút (viết)</li>
                  <li>
                    Mang tất/đi vớ nào mà bạn định sẽ đi cùng với đôi giày mình
                    cần mua
                  </li>
                </ul>
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Bước 2. Các bước tiến hành đo size chân:
              </Typography>
              <img src={StepTwo} className="modal-guide-img" />
              <Typography
                id="modal-modal-description"
                sx={{ padding: "1rem 2rem" }}
              >
                Sau khi đi tất, bạn giậm chân thật mạnh lên tờ giấy và giữ thật
                chắc để chân khỏi dịch chuyển khiến kích thước sau khi đo sẽ bị
                sai. Sau đó dùng bút vẽ theo khung bàn chân của bạn lên tờ giấy.
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Bước 3. Đo chiều dài cho chân:
              </Typography>
              <img src={StepThree} className="modal-guide-img" />
              <Typography
                id="modal-modal-description"
                sx={{ padding: "1rem 2rem" }}
              >
                Đánh dấu 4 điểm bao gồm 2 điểm đầu ngón chân và 2 điểm cuối của
                gót chân bằng bút. Sau đó dùng thước kẻ để đo lại chiều dài của
                hai điểm này.
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Bước 4. Đo chiều rộng cho bàn chân:
              </Typography>
              <img src={StepFour} className="modal-guide-img" />
              <Typography
                id="modal-modal-description"
                sx={{ padding: "1rem 2rem" }}
              >
                Ngoài chiều dài, thì bạn cần đo chiều rộng của bàn chân. Bạn chỉ
                cần dùng thước hay sợi dây đo sau đó chọn vị trí gần đầu mũi
                chân có bề ngang hoặc mu bàn chân dài nhất (bạn thấy chỗ nào là
                rộng nhất của chân thì lấy chỗ đó) để tiến hành đo, khi đo bạn
                nên ở tư thế ngồi hoặc đứng thẳng 2 chân.
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Bước 5. Tính kết quả để chọn size giày:
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ padding: "1rem 2rem" }}
              >
                Sau khi đo xong bàn chân, bạn hãy lấy chiều dài nhất của chân và
                chiều rộng nhất và tính theo công thức sau:{" "}
                <h3 className="guide-cal">
                  Cỡ giày = N = L (chiều dài bàn chân) + 1.5cm{" "}
                </h3>
                Sau khi có kết quả, bạn có thể dùng kết quả đó để đối chiếu theo
                bảng quy đổi size giày dưới đây. Chắc chắn với cách này, bạn sẽ
                lựa chọn được đôi giày phù hợp nhất với kích thước chân của
                mình. Ví dụ: Bạn đo được chiều dài của bàn chân mình là 22.5cm
                thì cỡ giày của bạn sẽ cộng thêm 1.5cm nữa kết quả là 24cm. Sau
                đó các bạn so sánh với cột cm ở bảng quy đổi size giày bên dưới
                sẽ tìm ra được cỡ giày của bạn là 38 - 39 đối với size Việt Nam,
                còn size UK là 6, và size US là 8.
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Bảng quy đổi size giày cho nam
              </Typography>
              <img src={MaleSize} className="modal-guide-img" />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Bảng quy đổi size giày cho nữ
              </Typography>
              <img src={FemaleSize} className="modal-guide-img" />
              <div className="guide-flex">
                <a
                  className="modal-link"
                  href="https://quantrimang.com/cuoc-song/huong-dan-chon-size-giay-chuan-voi-moi-doi-chan-165577#:~:text=C%E1%BB%A1%20gi%C3%A0y%20%3D%20N%20%3D%20L%20(,d%C3%A0i%20b%C3%A0n%20ch%C3%A2n)%20%2B%201.5cm&text=Ch%E1%BA%AFc%20ch%E1%BA%AFn%20v%E1%BB%9Bi%20c%C3%A1ch%20n%C3%A0y,n%E1%BB%AFa%20k%E1%BA%BFt%20qu%E1%BA%A3%20l%C3%A0%2024cm."
                >
                  Tham khảo thêm
                </a>
              </div>
              <Button
                fullWidth
                onClick={handleClose}
                variant="contained"
                sx={{
                  backgroundColor: "var(--button-second-color)",
                  "&:hover": {
                    backgroundColor: "var(--button-first-color)",
                  },
                  flexBasis: "400px",
                }}
              >
                Thoát
              </Button>
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
