import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Divider from "../../components/Divider";
import LoadingSpinner from "../../components/LoadingSpiner";
import { fetchHistory } from "../../components/Nav/userSlice";
import { userHistorySelector } from "../../store/selectors";
import "./style.scss";

export default function HistoryOrderPage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const data = useSelector(userHistorySelector);
  useEffect(() => {
    dispatch(fetchHistory())
      .unwrap()
      .then((originalPromiseResult) => {
        setIsLoading(false);
      });
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: "1.3rem",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: "1.2rem",
      height: "5rem",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
    "&:hover": {
      transition: "all .3s",
      backgroundColor: "rgba(0, 0, 0, .2)",
    },
  }));

  return (
    <div className="cart-container">
      <Divider
        yellowWords="LỊCH SỬ MUA HÀNG "
        whiteWords="CỦA BẠN"
        height="227px"
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className="cart-section">
          <div
            className="container"
            data-aos="fade"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Mã đơn</StyledTableCell>
                    <StyledTableCell align="center">Ngày tạo</StyledTableCell>
                    <StyledTableCell align="center">Người nhận</StyledTableCell>
                    <StyledTableCell align="center">Số lượng</StyledTableCell>
                    <StyledTableCell align="center">Tình trạng</StyledTableCell>
                    <StyledTableCell align="center">Tổng giá</StyledTableCell>
                    <StyledTableCell align="center">
                      Mã khuyến mãi
                    </StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => {
                    const dateCreate = new Date(row.ngaytao);
                    const link = `/detailHistory/${row.madon}`;
                    const makm =
                      row.makhuyenmai === null ? "Không có" : row.makhuyenmai;
                    const status =
                      row.tinhtrang === "DAGIAO"
                        ? "Đã giao"
                        : row.tinhtrang === "CHODUYET"
                        ? "Chờ duyệt"
                        : row.tinhtrang === "DADUYET"
                        ? "Đã duyệt"
                        : row.tinhtrang === "HUY"
                        ? "Đã hủy"
                        : "Từ chối";
                    return (
                      <StyledTableRow key={row.madon}>
                        <StyledTableCell component="th" scope="row">
                          {row.madon}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {dateCreate.getDate()}/{dateCreate.getMonth() + 1}/
                          {dateCreate.getFullYear()}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.nguoinhan}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.soluong} sản phẩm
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {status}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.tonggia.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </StyledTableCell>
                        <StyledTableCell align="center">{makm}</StyledTableCell>
                        <StyledTableCell align="center">
                          <Link to={link}>Xem chi tiết</Link>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </section>
      )}
    </div>
  );
}
