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
import { useSelector } from "react-redux";
import { cartSelector } from "../../store/selectors";
import cartSlice from "./cartSlice";
import { useDispatch } from "react-redux";

export default function CartPage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const listItems = useSelector(cartSelector);
  const totalPrice = listItems.reduce((total, item) => {
    return total + item.priceSum;
  }, 0);

  const handlePay = () => {
    dispatch(cartSlice.actions.updateTotalCart(totalPrice));
    navigate("/pay");
  };

  const handleHome = () => {
    navigate("/homepage");
  };

  return (
    <div className="cart-container">
      <Divider yellowWords="GIỎ HÀNG " whiteWords="CỦA BẠN" height="227px" />
      <section className="cart-section">
        <div
          className="container"
          data-aos="zoom-out"
          data-aos-duration="800"
          data-aos-delay="200"
        >
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
                  <TableCell align="center">SIZE</TableCell>
                  <TableCell align="center">MÀU SẮC</TableCell>
                  <TableCell align="center">SỐ LƯỢNG</TableCell>
                  <TableCell align="center">THÀNH TIỀN </TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listItems.map((item) => (
                  <TableRow
                    key={
                      item.id.includes("GA")
                        ? item.id + item.size.masize + item.color.mamau
                        : item.id
                    }
                    sx={{ "&:last-child td, &:last-child th": { border: "0" } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <img src={item.img} className="cart-img" />
                      {item.name}
                    </TableCell>
                    <TableCell align="center">
                      {item.price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </TableCell>
                    {item.id.includes("GA") ? (
                      <>
                        <TableCell align="center">
                          {item.size.tensize}
                        </TableCell>
                        <TableCell align="center">
                          {item.color.tenmau}
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell align="center">Không có</TableCell>
                        <TableCell align="center">Không có</TableCell>
                      </>
                    )}

                    <TableCell align="center">
                      <div className="table-cell-count">
                        <IconButton
                          sx={{
                            background: "#DCDCDC",
                            borderRadius: "0%",
                            "&:hover": { background: "black", color: "white" },
                          }}
                          onClick={() =>
                            dispatch(cartSlice.actions.inCreaseCart(item))
                          }
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
                          value={item.count}
                          sx={{
                            width: "70px",
                            boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25)",
                          }}
                        />
                        <IconButton
                          onClick={() =>
                            dispatch(cartSlice.actions.deCreaseCart(item))
                          }
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
                      {item.priceSum.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        aria-label="delete"
                        onClick={() =>
                          dispatch(cartSlice.actions.removeCart(item))
                        }
                      >
                        <DeleteIcon sx={{ color: "#3F51B5" }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="cart-sum">
            <span className="sum-title">TỔNG TIỀN:</span>
            {totalPrice.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
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
