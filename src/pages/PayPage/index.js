import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  FormControlLabel,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import payApi from "../../api/payApi";
import { toggleBlur } from "../../components/BlurLoading";
import PayForm from "../../components/Form/PayForm";
import {
  cartSelector,
  totalCartSelector,
  userSelector,
} from "../../store/selectors";
import cartSlice from "../CartPage/cartSlice";
import "./style.scss";

export default function PayPage() {
  const schema = yup
    .object({
      diachi: yup.string().required("Không được bỏ trống"),
      ho: yup.string().required("Không được bỏ trống"),
      sdt: yup
        .string()
        .required("Không được bỏ trống")
        .length(10, "Số điện thoại không hợp lệ"),
      ten: yup.string().required("Không được bỏ trống"),
      note: yup.string(),
      voucher: yup.string().max(5, "Mã khuyến mãi không hợp lệ"),
      email: yup.string().email("Email không hợp lệ"),
    })
    .required();
  const schemaVoucher = yup
    .object({
      voucher: yup
        .string()
        .max(5, "Quá 5 ký tự !")
        .required("Bạn chưa nhập mã !"),
    })
    .required();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalCart = useSelector(totalCartSelector);
  const user = useSelector(userSelector);
  const [totalVoucher, setTotalVoucher] = useState(totalCart);
  const [voucher, setVoucher] = useState("");
  const cartList = useSelector(cartSelector);
  const [method, setMethod] = useState("PTTT1");

  const handleMethod = (event) => {
    setMethod(event.target.value);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    control: control2,
    handleSubmit: handleSubmitVoucher,
    formState: { errors: errorsVoucher },
    reset: reset2,
  } = useForm({
    resolver: yupResolver(schemaVoucher),
  });

  const onSubmit = (data) => {
    toggleBlur();
    const giays = cartList.filter((item) => {
      return item.category !== "Phụ kiện";
    });
    const phukiens = cartList.filter((item) => {
      return item.category === "Phụ kiện";
    });
    const giaysObject = giays.map((value) => {
      return {
        magiay: value.id,
        masize: value.size.masize,
        mamau: value.color.mamau,
        soluong: value.count,
      };
    });
    console.log(giaysObject);
    const phukiensObject = phukiens.reduce(
      (a, v) => ({ ...a, [v.id]: v.count }),
      {}
    );
    console.log(phukiensObject);

    if (Object.keys(user).length > 0) {
      const payload = {
        nguoinhan: data.ho + " " + data.ten,
        diachi: data.diachi,
        ghichu: data.note,
        maloaithanhtoan: method,
        maKhuyenMai: voucher,
        giays: giaysObject,
        phukiens: phukiensObject,
      };
      payApi
        .payOrderToken(payload)
        .then(function (response) {
          toast.success("Đặt hàng thành công");
          dispatch(cartSlice.actions.resetCart());
          setTimeout(() => {
            toggleBlur();
            navigate("/");
          }, 3000);
        })
        .catch(function (error) {
          toast.error(
            `Đặt hàng thất bại ! \n Sản phẩm vượt quá số lượng: \n ${error.response.data}`
          );
          setTimeout(() => {
            toggleBlur();
          }, 3000);
        });
    } else {
      const payload = {
        ho: data.ho,
        ten: data.ten,
        sdt: data.sdt,
        diachi: data.diachi,
        email: data.email,
        ghichu: data.note,
        maloaithanhtoan: method,
        maKhuyenMai: voucher,
        giays: giaysObject,
        phukiens: phukiensObject,
      };
      payApi
        .payOrderNonToken(payload)
        .then(function (response) {
          toast.success("Đặt hàng thành công");
          dispatch(cartSlice.actions.resetCart());
          const res = response.data;
          setTimeout(() => {
            toggleBlur();
            navigate(`/alert/visitorOrder/${res}`);
          }, 3000);
        })
        .catch(function (error) {
          toast.error(
            `Đặt hàng thất bại ! \n Sản phẩm vượt quá số lượng: \n ${error.response.data}`
          );
          setTimeout(() => {
            toggleBlur();
          }, 3000);
        });
    }
  };
  const onSubmitVoucher = (data) => {
    toggleBlur();
    if (Object.keys(user).length > 0) {
      const results = payApi.getVoucher(data.voucher);
      results
        .then(function (response) {
          toggleBlur();
          const data = response.data;
          const dateEnd = new Date(data.ngaykt);
          const dateStart = new Date(data.ngaybd);
          const dateNow = new Date();
          if (dateNow > dateEnd) {
            toast.error("Mã KM đã hết hạn !");
            reset2();
          } 
          else if(dateNow < dateStart){
            toast.error("Mã KM chưa tới hạn sử dụng !");
            reset2();
          }
          else {
            setVoucher(response.data.makm);
            setTotalVoucher(
              totalCart - totalCart * (response.data.giatrigiam / 100)
            );
            toast.success("Mã KM hợp lệ");
          }
        })
        .catch(function (error) {
          toggleBlur();
          reset2();
          toast.error("Mã KM không hợp lệ !");
        });
    } else {
      toggleBlur();
      reset2();
      toast.error("Bạn chưa đăng nhập !");
    }
  };

  return (
    <div className="pay-container">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            textAlign: "left",
            color: "#fff",
            width: "250px",
            height: "auto",
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
      <section className="pay-section">
        <form key={1} onSubmit={handleSubmit(onSubmit)}>
          <div className="container container--pay">
            <PayForm control={control} errors={errors} />
            <div
              className="pay-order"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <h1 className="pay-title">THÔNG TIN ĐƠN HÀNG</h1>
              <hr />
              <TableContainer sx={{ padding: ".5rem 2rem" }}>
                <Table
                  sx={{ width: "100%" }}
                  aria-label="simple table"
                  className="pay-table"
                >
                  <TableHead>
                    <TableRow sx={{ borderBottom: "2px solid #A6A6A6" }}>
                      <TableCell sx={{ paddingBottom: "2px !important" }}>
                        SẢN PHẨM
                      </TableCell>
                      <TableCell
                        sx={{ paddingBottom: "2px !important" }}
                        align="center"
                      >
                        THÀNH TIỀN
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartList.map((row) => (
                      <TableRow
                        key={
                          row.id.includes("GA")
                            ? row.id + row.color.mamau + row.size.masize
                            : row.id
                        }
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.id.includes("GA")
                            ? `${row.name} x Size ${row.size.tensize} x ${
                                row.color.tenmau
                              } x ${row.count} ${
                                row.id.includes("PK") ? "cái" : "đôi"
                              }`
                            : `${row.name} x ${row.count} ${
                                row.id.includes("PK") ? "cái" : "đôi"
                              }`}
                        </TableCell>
                        <TableCell align="center">
                          {row.priceSum.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow sx={{ borderBottom: "2px solid #A6A6A6" }}>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        TỔNG TIỀN
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }} align="center">
                        {totalVoucher.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ borderBottom: "2px solid #A6A6A6" }}>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                        <FormControlLabel
                          value="PTTT1"
                          control={<Radio />}
                          label="Trả tiền sau khi nhận hàng"
                          checked={method === "PTTT1"}
                          onChange={handleMethod}
                        />
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }} align="left">
                        <FormControlLabel
                          value="PTTT2"
                          control={<Radio />}
                          label="Chuyển khoản ngân hàng"
                          checked={method === "PTTT2"}
                          onChange={handleMethod}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{ fontWeight: "bold", borderBottom: "0px" }}
                        colSpan={2}
                      >
                        <div className="sale-btn-group">
                          <Controller
                            name="voucher"
                            control={control2}
                            defaultValue=""
                            render={({ field }) => (
                              <TextField
                                {...field}
                                id="filled-basic"
                                label="Mã khuyễn mãi (nếu có)"
                                fullWidth
                                variant="filled"
                                placeholder="Nhập mã khuyễn mãi..."
                                className="sale-field"
                              />
                            )}
                          />

                          <Button
                            variant="contained"
                            sx={{ background: "#7886FF" }}
                            className="sale-btn"
                            onClick={handleSubmitVoucher(onSubmitVoucher)}
                          >
                            ÁP DỤNG
                          </Button>
                        </div>
                        {errors && (
                          <div>
                            <p className="voucher-error">
                              {errorsVoucher.voucher?.message}
                            </p>
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        sx={{ fontWeight: "bold", borderBottom: "0px" }}
                        colSpan={2}
                        align="center"
                      >
                        <Button
                          variant="contained"
                          type="submit"
                          sx={{
                            background: "#FF7878",
                            width: "188px",
                            "&:hover": { background: "red" },
                          }}
                          className="sale-btn"
                        >
                          ĐẶT HÀNG
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
