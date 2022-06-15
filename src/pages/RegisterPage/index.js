import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";


export default function RegisterPage() {
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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h1 className="login-title">ĐĂNG KÝ</h1>
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
                  fullWidth
                  id="filled-basic"
                  label="Email"
                  placeholder="Nhập email..."
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
              <Grid item xs={12}>
                <TextField
                type='password'
                fullWidth
                  id="filled-basic"
                  label="Xác nhận mật khẩu"
                  placeholder="Nhập lại mật khẩu..."
                  variant="filled"
                  sx={{ background: "white",marginBottom:"5rem" }}
                />
              </Grid>
              <Grid item xs={12}>
              <Button fullWidth variant="contained">ĐĂNG KÝ</Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </section>
    </div>
  );
}
