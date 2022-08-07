import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import userApi from "../../api/userApi";
import { toggleBlur } from "../../components/BlurLoading";
import toast, { Toaster } from "react-hot-toast";

export default function ForgotPage() {
  let navigate = useNavigate();
  const schema = yup
    .object({
      email: yup
        .string()
        .required("Không được bỏ trống")
        .email("Email không hợp lệ"),
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
    const message = userApi.resetPass(data.email);
    message
      .then(function (response) {
        toggleBlur();
        navigate("/forgotpass2");
      })
      .catch(function (error) {
        toggleBlur();
        toast.error("Khôi phục thất bại!");
      });
  };

  return (
    <div className="login-container">
      <section className="login-section">
        <div className="container login-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                width: 519,
                height: 639,
                background: "rgba(4, 0, 0, 0.47)",
                border: "1px solid #FFFFFF",
                borderRadius: "26px",
                padding: "55px 90px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <h1 className="login-title">KHÔI PHỤC MẬT KHẨU</h1>
                </Grid>
                <Grid item xs={12} sx={{ margin: "5rem 0rem 0rem 0rem" }}>
                  <Controller
                    name="email"
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
                    <p>{errors.email?.message}</p>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Button type="submit" fullWidth variant="contained">
                    KHÔI PHỤC MẬT KHẨU
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
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
        </div>
      </section>
    </div>
  );
}
