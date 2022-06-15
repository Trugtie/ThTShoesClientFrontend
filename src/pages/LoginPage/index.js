import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "./login.scss";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import GoogleBtn from "../../assets/googleBtn.svg";
import FacebookBtn from "../../assets/faceboodBtn.svg";


export default function LoginPage() {
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
              padding:'55px 95px',
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h1 className="login-title">ĐĂNG NHẬP</h1>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Tài khoản"
                  placeholder="Nhập tên tài khoản..."
                  variant="filled"
                  sx={{ background: "white" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                type='password'
                fullWidth
                  id="filled-basic"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu..."
                  variant="filled"
                  sx={{ background: "white" }}
                />
              </Grid>
              <Grid item xs={6} sx={{textAlign:'left'}}>
                <Link className='login-link' to='register'>ĐĂNG KÝ</Link>
              </Grid>
              <Grid item xs={6} sx={{textAlign:'right'}}>
              <Link className='login-link' to='forgotpass'>QUÊN MẬT KHẨU ?</Link>
              </Grid>
              <Grid item xs={12}>
              <Button fullWidth variant="contained">ĐĂNG NHẬP</Button>
              </Grid>
              <Grid item xs={12}>
              <h2 className="login-description">Hoặc đăng nhập bằng</h2>
              </Grid>
              <Grid item xs={12}>
                <img className='circle-btn circle-btn--1' src={FacebookBtn}/>
                <img className='circle-btn' src={GoogleBtn}/>
              </Grid>
            </Grid>
          </Box>
        </div>
      </section>
    </div>
  );
}
