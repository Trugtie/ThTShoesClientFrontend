import { yupResolver } from "@hookform/resolvers/yup";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import userApi from "../../api/userApi";
import { toggleBlur } from "../../components/BlurLoading";
import "./style.scss";

export default function RegisterPage() {
  let navigate = useNavigate();
  const [error, setError] = useState("");
  console.log(error);
  const schema = yup
    .object({
      taiKhoan: yup.object({
        email: yup
          .string()
          .required("Không được bỏ trống")
          .email("Email không hợp lệ"),
        username: yup
          .string()
          .required("Không được bỏ trống")
          .max(18, "Tối đa 18 ký tự"),
        password: yup
          .string()
          .required("Không được bỏ trống")
          .min(6, "Tối thiểu 6 ký tự")
          .max(18, "Tối đa 18 ký tự"),
        confirmPassword: yup
          .string()
          .required("Không được bỏ trống")
          .min(6, "Tối thiểu 6 ký tự")
          .max(18, "Tối đa 18 ký tự")
          .oneOf([yup.ref("password"), null], "Mật khẩu không khớp"),
      }),
      khachHang: yup.object({
        diachi: yup.string().required("Không được bỏ trống"),
        ho: yup.string().required("Không được bỏ trống"),
        sdt: yup
          .string()
          .required("Không được bỏ trống")
          .length(10, "Số điện thoại không hợp lệ"),
        ten: yup.string().required("Không được bỏ trống"),
      }),
    })
    .required();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    toggleBlur();
    const message = userApi.register(data);
    message
      .then(function (response) {
        console.log("Success: ", response.data);
        toggleBlur();
        navigate("/alert/register");
      })
      .catch(function (error) {
        toggleBlur();
        setError(error.response.data);
      });
  };

  return (
    <div className="login-container">
      <section className="login-section">
        <div className="container login-container">
          <Box
            sx={{
              width: 519,
              height: 850,
              background: "rgba(4, 0, 0, 0.47)",
              border: "1px solid #FFFFFF",
              borderRadius: "26px",
              padding: "30px 95px",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <h1 className="login-title login-title--register">ĐĂNG KÝ</h1>
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="khachHang.ho"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id="filled-basic"
                        label="Họ"
                        placeholder="Nhập họ..."
                        variant="filled"
                        sx={{ background: "white" }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="khachHang.ten"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id="filled-basic"
                        label="Tên"
                        placeholder="Nhập tên..."
                        variant="filled"
                        sx={{ background: "white" }}
                      />
                    )}
                  />
                </Grid>
                <Grid container sx={{ paddingLeft: "16px" }}>
                  {errors.khachHang && (
                    <Grid
                      item
                      xs={6}
                      sx={{
                        paddingTop: "5px !important",
                        color: "red",
                        textAlign: "left",
                        fontSize: "1rem",
                        textIndent: ".5rem",
                      }}
                    >
                      <p>{errors.khachHang.ho?.message}</p>
                    </Grid>
                  )}
                  {errors.khachHang && (
                    <Grid
                      item
                      xs={6}
                      sx={{
                        paddingTop: "5px !important",
                        color: "red",
                        textAlign: "left",
                        fontSize: "1rem",
                        textIndent: ".5rem",
                      }}
                    >
                      <p>{errors.khachHang.ten?.message}</p>
                    </Grid>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <Controller
                    name="khachHang.sdt"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id="filled-basic"
                        label="Số điện thoại"
                        placeholder="Nhập số điện thoại..."
                        variant="filled"
                        type="tel"
                        inputProps={{ maxLength: 10 }}
                        sx={{ background: "white" }}
                      />
                    )}
                  />
                </Grid>
                {errors.khachHang && (
                  <Grid
                    item
                    xs={12}
                    sx={{
                      paddingTop: "5px !important",
                      color: "red",
                      textAlign: "left",
                      fontSize: "1rem",
                      textIndent: ".5rem",
                    }}
                  >
                    <p>{errors.khachHang.sdt?.message}</p>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Controller
                    name="khachHang.diachi"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id="filled-basic"
                        label="Địa chỉ"
                        placeholder="Nhập địa chỉ..."
                        variant="filled"
                        sx={{ background: "white" }}
                      />
                    )}
                  />
                </Grid>
                {errors.khachHang && (
                  <Grid
                    item
                    xs={12}
                    sx={{
                      paddingTop: "5px !important",
                      color: "red",
                      textAlign: "left",
                      fontSize: "1rem",
                      textIndent: ".5rem",
                    }}
                  >
                    <p>{errors.khachHang.diachi?.message}</p>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Controller
                    name="taiKhoan.username"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id="filled-basic"
                        label="Tài khoản"
                        placeholder="Nhập tên tài khoản..."
                        variant="filled"
                        sx={{ background: "white" }}
                      />
                    )}
                  />
                </Grid>
                {errors.taiKhoan && (
                  <Grid
                    item
                    xs={12}
                    sx={{
                      paddingTop: "5px !important",
                      color: "red",
                      textAlign: "left",
                      fontSize: "1rem",
                      textIndent: ".5rem",
                    }}
                  >
                    <p>{errors.taiKhoan.username?.message}</p>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Controller
                    name="taiKhoan.email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id="filled-basic"
                        label="Email"
                        placeholder="Nhập email..."
                        variant="filled"
                        sx={{ background: "white" }}
                      />
                    )}
                  />
                </Grid>
                {errors.taiKhoan && (
                  <Grid
                    item
                    xs={12}
                    sx={{
                      paddingTop: "5px !important",
                      color: "red",
                      textAlign: "left",
                      fontSize: "1rem",
                      textIndent: ".5rem",
                    }}
                  >
                    <p>{errors.taiKhoan.email?.message}</p>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Controller
                    name="taiKhoan.password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type="password"
                        fullWidth
                        id="filled-basic"
                        label="Mật khẩu"
                        placeholder="Nhập mật khẩu..."
                        variant="filled"
                        sx={{ background: "white" }}
                      />
                    )}
                  />
                </Grid>
                {errors.taiKhoan && (
                  <Grid
                    item
                    xs={12}
                    sx={{
                      paddingTop: "5px !important",
                      color: "red",
                      textAlign: "left",
                      fontSize: "1rem",
                      textIndent: ".5rem",
                    }}
                  >
                    <p>{errors.taiKhoan.password?.message}</p>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Controller
                    name="taiKhoan.confirmPassword"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type="password"
                        fullWidth
                        id="filled-basic"
                        label="Xác nhận mật khẩu"
                        placeholder="Nhập lại mật khẩu..."
                        variant="filled"
                        sx={{ background: "white", marginBottom: "1rem" }}
                      />
                    )}
                  />
                </Grid>
                {errors.taiKhoan && (
                  <Grid
                    item
                    xs={12}
                    sx={{
                      paddingTop: "5px !important",
                      color: "red",
                      textAlign: "left",
                      fontSize: "1rem",
                      textIndent: ".5rem",
                    }}
                  >
                    <p>{errors.taiKhoan.confirmPassword?.message}</p>
                  </Grid>
                )}
                {error && (
                  <Grid item xs={12} sx={{ textAlign: "left" }}>
                    <Alert variant="filled" severity="error">
                      {error}
                    </Alert>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Button fullWidth variant="contained" type="submit">
                    ĐĂNG KÝ
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </div>
      </section>
    </div>
  );
}
