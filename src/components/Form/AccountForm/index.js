import { Grid, TextField, Button } from "@mui/material";

export default function AccountForm() {
  return (
    <div className="pay-order pay-order--person">
      <h1 className="pay-title pay--left">ĐỔI MẬT KHẨU</h1>
      <hr />
      <Grid sx={{ padding: "1.5rem 0rem" }} container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="filled-basic"
            label="Mã tài khoản"
            fullWidth
            defaultValue="KH001"
            variant="outlined"
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="filled-basic"
            label="Mật khẩu cũ"
            fullWidth
            placholder="Nhập mật khẩu cũ"
            type="password"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="filled-basic"
            label="Mật khẩu mới"
            fullWidth
            placeholder="Nhập mật khẩu mới"
            type="password"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="filled-basic"
            label="Xác nhận mật khẩu mới"
            fullWidth
            placeholder="Nhập lại mật khẩu mới"
            type="password"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
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
    </div>
  );
}
