import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function ForgotPage() {
  let navigate = useNavigate();

  const handleSend = () => {
    navigate("/login/forgotpass2");
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
              padding: "55px 90px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h1 className="login-title">KHÔI PHỤC MẬT KHẨU</h1>
              </Grid>
              <Grid item xs={12} sx={{margin:'7.5rem 0rem'}}>
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
                <Button fullWidth variant="contained" onClick={handleSend}>
                  GỬI MÃ XÁC MINH
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </section>
    </div>
  );
}
