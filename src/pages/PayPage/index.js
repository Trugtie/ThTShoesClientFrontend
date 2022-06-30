import { TextField } from "@mui/material";
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
import { useSelector } from "react-redux";
import { totalCartSelector, cartSelector } from "../../store/selectors";
import PayForm from "../../components/Form/PayForm";
import "./style.scss";

export default function PayPage() {
  const totalCart = useSelector(totalCartSelector);
  const cartList = useSelector(cartSelector);

  const [method, setMethod] = useState("cash");

  const handleMethod = (event) => {
    setMethod(event.target.value);
  };

  return (
    <div className="pay-container">
      <section className="pay-section">
        <div className="container container--pay">
          <PayForm />
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
                  {cartList.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name} x {row.count}
                      </TableCell>
                      <TableCell align="center">
                        {row.priceSum.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow sx={{ borderBottom: "2px solid #A6A6A6" }}>
                    <TableCell sx={{ fontWeight: "bold" }}>TỔNG TIỀN</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="center">
                      {totalCart.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
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
                        sx={{
                          background: "#FF7878",
                          width: "188px",
                          "&:hover": { background: "red" },
                        }}
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
