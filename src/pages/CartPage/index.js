import Divider from "../../components/Divider";
import "./style.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 1800000, 6.0, 1800000, 4.0),
  createData("Ice cream sandwich", 1800000, 5, 1800000, 4.3),
  createData("Eclair", 1800000, 16.0, 1800000, 6.0),
  createData("Cupcake", 1800000, 3.7, 1800000, 4.3),
];

export default function CartPage() {
  let navigate = useNavigate();

  const handlePay = () => {
    navigate("/pay");
  };

  const handleHome = () => {
    navigate("/homepage");
  };

  return (
    <div className="cart-container">
      <Divider yellowWords="GIỎ HÀNG " whiteWords="CỦA BẠN" height="227px" />
      <section className="cart-section">
        <div className="container">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="cart-table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>SẢN PHẨM</TableCell>
                  <TableCell align="center">GIÁ</TableCell>
                  <TableCell align="center">SỐ LƯỢNG</TableCell>
                  <TableCell align="center">THÀNH TIỀN  </TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: "0" } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/169c6c9c-4c9e-49d2-b5ac-2214f5568369/air-presto-hello-kitty-shoes-Nm5Dd5.png"
                        className="cart-img"
                      />
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      {row.calories.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </TableCell>
                    <TableCell align="center">
                      <div className="table-cell-count">
                        <IconButton
                          sx={{
                            background: "#DCDCDC",
                            borderRadius: "0%",
                            "&:hover": { background: "black", color: "white" },
                          }}
                        >
                          +
                        </IconButton>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          type="number"
                          InputProps={{
                            readOnly: true,
                          }}
                          defaultValue={row.fat}
                          sx={{
                            width: "70px",
                            boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25)",
                          }}
                        />
                        <IconButton
                          sx={{
                            background: "#DCDCDC",
                            borderRadius: "0%",
                            "&:hover": { background: "black", color: "white" },
                          }}
                        >
                          -
                        </IconButton>
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      {row.carbs.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton aria-label="delete">
                        <DeleteIcon sx={{ color: "#3F51B5" }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="cart-sum">
            <span className="sum-title">TỔNG TIỀN:</span> 13,800,000 ₫
          </div>
          <div className="cart-button-group">
            <Button
              onClick={handleHome}
              variant="contained"
              sx={{
                maxWidth: "220px",
                marginRight: "1rem",
                backgroundColor: "white",
                color: "red",
                fontWeight: "bold",
                border: "1px solid red",
                "&:hover": {
                  backgroundColor: "var(--button-first-color)",
                  color: "white",
                  border: "1px solid black",
                },
              }}
            >
              QUAY VỀ TRANG CHỦ
            </Button>
            <Button
              onClick={handlePay}
              variant="contained"
              sx={{
                fontWeight: "bold",
                maxWidth: "220px",
                marginRight: "2rem",
                backgroundColor: "red",
                "&:hover": {
                  backgroundColor: "var(--button-first-color)",
                },
              }}
            >
              TIẾN HÀNH THANH TOÁN
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
