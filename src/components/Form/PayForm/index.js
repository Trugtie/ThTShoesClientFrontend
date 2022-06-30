import { Grid, TextField, TextareaAutosize } from "@mui/material";
import { userSelector } from "../../../store/selectors";
import { useSelector } from "react-redux";

export default function PayForm() {
  const user = useSelector(userSelector);
  console.log(user);
  
  return (
    <div className="pay-info">
      <h1 className="pay-title pay-title--left">THÔNG TIN THANH TOÁN</h1>
      <hr />
      <Grid sx={{ padding: "1rem 2rem" }} container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="filled-basic"
            label="Họ"
            fullWidth
            variant="filled"
            placeholder="Nhập họ..."
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="filled-basic"
            label="Tên"
            fullWidth
            variant="filled"
            placeholder="Nhập tên..."
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="filled-basic"
            label="Địa chỉ giao"
            fullWidth
            variant="filled"
            placeholder="Nhập địa chỉ giao hàng..."
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="filled-basic"
            label="Số điện thoại"
            type="number"
            fullWidth
            variant="filled"
            placeholder="Nhập số điện thoại..."
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="filled-basic"
            label="Email"
            fullWidth
            variant="filled"
            placeholder="Nhập email..."
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            maxRows={7}
            minRows={7}
            aria-label="Lời nhắn"
            placeholder="Nhập ghi chú (tùy chọn)..."
            style={{
              width: "100%",
              padding: "1rem",
              fontSize: "1.3rem",
              background: "rgba(0, 0, 0, 0.06)",
              border: "none",
              borderBottom: "1px solid black",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
