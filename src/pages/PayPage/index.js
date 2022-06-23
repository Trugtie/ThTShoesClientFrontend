import { Grid, TextField, TextareaAutosize } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import Button from "@mui/material/Button";
import "./style.scss";

function createData(name, count, price) {
  return { name, count, price };
}

const rows = [
  createData("Frozen yoghurt", 159, 1800000),
  createData("Ice cream sandwich", 237, 1800000),
  createData("Eclair", 262, 1800000),
  createData("Cupcake", 305, 1800000),
  createData("Gingerbread", 356, 1800000),
];

export default function PayPage() {
  const [method, setMethod] = useState("cash");

  const handleMethod = (event) => {
    setMethod(event.target.value);
  };

  return (
    <div className="pay-container">
      <section className="pay-section">
        <div className="container container--pay">
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
          <div className="pay-order">
            <h1 className="pay-title">THÔNG TIN ĐƠN HÀNG</h1>
            <hr />
            <TableContainer sx={{ padding: ".5rem 2rem" }}>
              <Table
                sx={{ width: "100%" }}
                aria-label="simple table"
                className="pay-table"
              >
                <TableHead>
                  <TableRow sx={{ borderBottom: "2px solid #A6A6A6" }}>
                    <TableCell sx={{ paddingBottom: "2px !important" }}>
                      SẢN PHẨM
                    </TableCell>
                    <TableCell
                      sx={{ paddingBottom: "2px !important" }}
                      align="center"
                    >
                      THÀNH TIỀN
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name} x {row.count}
                      </TableCell>
                      <TableCell align="center">
                        {row.price.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow sx={{ borderBottom: "2px solid #A6A6A6" }}>
                    <TableCell sx={{ fontWeight: "bold" }}>TỔNG TIỀN</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="center">
                      1.800.000 ₫
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ borderBottom: "2px solid #A6A6A6" }}>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                      <FormControlLabel
                        value="cash"
                        control={<Radio />}
                        label="Trả tiền sau khi nhận hàng"
                        checked={method === "cash"}
                        onChange={handleMethod}
                      />
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="left">
                      <FormControlLabel
                        value="bank"
                        control={<Radio />}
                        label="Chuyển khoản ngân hàng"
                        checked={method === "bank"}
                        onChange={handleMethod}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ fontWeight: "bold", borderBottom: "0px" }}
                      colSpan={2}
                    >
                      <div className="sale-btn-group">
                        <TextField
                          id="filled-basic"
                          label="Mã khuyễn mãi (nếu có)"
                          fullWidth
                          variant="filled"
                          placeholder="Nhập mã khuyễn mãi..."
                          className="sale-field"
                        />
                        <Button
                          variant="contained"
                          sx={{ background: "#7886FF" }}
                          className="sale-btn"
                        >
                          ÁP DỤNG
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ fontWeight: "bold", borderBottom: "0px" }}
                      colSpan={2}
                      align="center"
                    >
                      <Button
                        variant="contained"
                        sx={{ background: "#FF7878", width: "188px","&:hover":{background:'red'} }}
                        className="sale-btn"
                      >
                        ĐẶT HÀNG
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
