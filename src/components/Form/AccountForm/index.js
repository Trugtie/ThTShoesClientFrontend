import { Grid, TextField, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import userApi from "../../../api/userApi";

export default function AccountForm() {
  const user = JSON.parse(localStorage.getItem("user"));
  const schema = yup
    .object({
      manguoidung: yup.string().default(user.makh),
      oldPassword: yup
        .string()
        .required("Không được bỏ trống")
        .min(6, "Tối thiểu 6 ký tự")
        .max(18, "Tối đa 18 ký tự"),
      newPassword: yup
        .string()
        .required("Không được bỏ trống")
        .min(6, "Tối thiểu 6 ký tự")
        .max(18, "Tối đa 18 ký tự"),
      confirmPassword: yup
        .string()
        .required("Không được bỏ trống")
        .min(6, "Tối thiểu 6 ký tự")
        .max(18, "Tối đa 18 ký tự")
        .oneOf([yup.ref("newPassword"), null], "Mật khẩu không khớp"),
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
    userApi
      .changePass(data)
      .then(function (response) {
        toast.success("Đổi mật khẩu thành công !");
      })
      .catch(function (error) {
        toast.error("Đổi mật khẩu thất bại !");
        reset();
      });
  };

  return (
    <div className="pay-order pay-order--person">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="pay-title pay--left">ĐỔI MẬT KHẨU</h1>
        <hr />
        <Grid sx={{ padding: "1.5rem 0rem" }} container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="filled-basic"
              label="Mã tài khoản"
              fullWidth
              defaultValue={user.makh}
              variant="outlined"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="oldPassword"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="filled-basic"
                  label="Mật khẩu cũ"
                  fullWidth
                  placholder="Nhập mật khẩu cũ"
                  type="password"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          {errors && (
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
              <p>{errors.oldPassword?.message}</p>
            </Grid>
          )}
          <Grid item xs={12}>
            <Controller
              name="newPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  id="filled-basic"
                  label="Mật khẩu mới"
                  fullWidth
                  placeholder="Nhập mật khẩu mới"
                  type="password"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          {errors && (
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
              <p>{errors.newPassword?.message}</p>
            </Grid>
          )}
          <Grid item xs={12}>
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  id="filled-basic"
                  label="Xác nhận mật khẩu mới"
                  fullWidth
                  placeholder="Nhập lại mật khẩu mới"
                  type="password"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          {errors && (
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
              <p>{errors.confirmPassword?.message}</p>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "var(--button-second-color)",
                "&:hover": {
                  backgroundColor: "var(--button-first-color)",
                },
                width: "301px",
                height: "47px",
              }}
            >
              ĐỔI MẬT KHẨU
            </Button>
          </Grid>
        </Grid>
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
      </form>
    </div>
  );
}