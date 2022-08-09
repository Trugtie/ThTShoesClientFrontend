import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { updateInfo } from "../../Nav/userSlice";
import { toggleBlur } from "../../BlurLoading";

export default function PersonForm() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const schema = yup
    .object({
      makh: yup.string().default(user.makh),
      diachi: yup.string().required("Không được bỏ trống"),
      ho: yup.string().required("Không được bỏ trống"),
      sdt: yup
        .string()
        .required("Không được bỏ trống")
        .length(10, "Số điện thoại không hợp lệ"),
      ten: yup.string().required("Không được bỏ trống"),
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
    dispatch(updateInfo(data))
      .unwrap()
      .then((originalPromiseResult) => {
        toggleBlur();
        toast.success("Cập nhật thành công !");
      })
      .catch((rejectedValueOrSerializedError) => {
        toggleBlur();
        toast.error("Cập nhật thất bại !");
      });
  };

  return (
    <div
      className="pay-info pay-info--person"
      data-aos="fade"
      data-aos-duration="800"
      data-aos-delay="100"
    >
      <h1 className="pay-title pay--left">THÔNG TIN CÁ NHÂN</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid sx={{ padding: "1.5rem 0rem" }} container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="ho"
              control={control}
              defaultValue={user.ho}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="filled-basic"
                  label="Họ"
                  fullWidth
                  variant="outlined"
                  placeholder="Nhập họ..."
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="ten"
              control={control}
              defaultValue={user.ten}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="filled-basic"
                  label="Tên"
                  fullWidth
                  variant="outlined"
                  placeholder="Nhập tên..."
                />
              )}
            />
          </Grid>
          <Grid container sx={{ paddingLeft: "16px" }}>
            {errors && (
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
                <p>{errors.ho?.message}</p>
              </Grid>
            )}
            {errors && (
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
                <p>{errors.ten?.message}</p>
              </Grid>
            )}
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="diachi"
              control={control}
              defaultValue={user.diachi}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="filled-basic"
                  label="Địa chỉ giao"
                  fullWidth
                  variant="outlined"
                  placeholder="Nhập địa chỉ giao hàng..."
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
              <p>{errors.diachi?.message}</p>
            </Grid>
          )}
          <Grid item xs={12}>
            <Controller
              name="sdt"
              control={control}
              defaultValue={user.sdt}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="filled-basic"
                  label="Số điện thoại"
                  type="tel"
                  inputProps={{ maxLength: 10 }}
                  fullWidth
                  variant="outlined"
                  placeholder="Nhập số điện thoại..."
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
              <p>{errors.sdt?.message}</p>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "var(--button-third-color)",
                "&:hover": {
                  backgroundColor: "var(--button-first-color)",
                },
                width: "190px",
                height: "47px",
              }}
            >
              CẬP NHẬT
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
