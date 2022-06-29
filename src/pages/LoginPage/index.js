import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "./login.scss";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import GoogleBtn from "../../assets/googleBtn.svg";
import FacebookBtn from "../../assets/faceboodBtn.svg";
import { useForm, Controller } from "react-hook-form";
import { login, getMyInfo } from "../../components/Nav/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { userStatusSelector } from "../../store/selectors";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function LoginPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const status = useSelector(userStatusSelector);

  if (status == "success") {
    navigate("/");
  }

  const getID = () =>
    JSON.parse(localStorage.getItem("access_token_decode")).manguoidung;

  const schema = yup
    .object({
      username: yup
        .string()
        .required("Không được bỏ trống")
        .max(18, "Tối đa 18 ký tự"),
      password: yup
        .string()
        .required("Không được bỏ trống")
        .min(6, "Tối thiểu 6 ký tự")
        .max(18, "Tối đa 18 ký tự"),
    })
    .required();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const signInResult = await dispatch(login(data));
    const userID = await getID();
    const getMeResult = await dispatch(getMyInfo(userID));
  };

  return (
    <div className="login-container">
      <section className="login-section">
        <div className="container login-container">
          <Box
            sx={{
              width: 519,
              height: 639,
              background: "rgba(4, 0, 0, 0.47)",
              border: "1px solid #FFFFFF",
              borderRadius: "26px",
              padding: "55px 95px",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <h1 className="login-title">ĐĂNG NHẬP</h1>
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="username"
                    control={control}
                    rules={{ required: true, maxLength: 20 }}
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
                {errors.username && (
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
                    <p>{errors.username?.message}</p>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Controller
                    name="password"
                    control={control}
                    rules={{ required: true, maxLength: 20 }}
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
                {errors.password && (
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
                    <p>{errors.password?.message}</p>
                  </Grid>
                )}
                {status === "error" && (
                  <Grid item xs={12} sx={{ textAlign: "left" }}>
                    <Alert variant="filled" severity="error">
                      Sai tài khoản hoặc mật khẩu
                    </Alert>
                  </Grid>
                )}
                <Grid item xs={6} sx={{ textAlign: "left" }}>
                  <Link className="login-link" to="register">
                    ĐĂNG KÝ
                  </Link>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <Link className="login-link" to="forgotpass">
                    QUÊN MẬT KHẨU ?
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant="contained" type="submit">
                    ĐĂNG NHẬP
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <h2 className="login-description">Hoặc đăng nhập bằng</h2>
                </Grid>
                <Grid item xs={12}>
                  <img className="circle-btn circle-btn--1" src={FacebookBtn} />
                  <img className="circle-btn" src={GoogleBtn} />
                </Grid>
              </Grid>
            </form>
          </Box>
        </div>
      </section>
    </div>
  );
}
