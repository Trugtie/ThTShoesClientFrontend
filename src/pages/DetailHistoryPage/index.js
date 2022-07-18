import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { historyDetailSelector } from "../../store/selectors";
import "./style.scss";

export default function DetailHistoryPage({ history }) {
  const { id } = useParams();
  let data = useSelector(historyDetailSelector(id));
  if (history !== undefined) {
    data = history;
  }
  console.log(history);
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

  const dateCreate = new Date(data.ngaytao);
  const makm = data.makhuyenmai === null ? "Không có" : data.makhuyenmai;
  const status =
    data.tinhtrang === "DAGIAO"
      ? "Đã giao"
      : data.tinhtrang === "CHODUYET"
      ? "Chờ duyệt"
      : data.tinhtrang === "DADUYET"
      ? "Đã duyệt"
      : "Từ chối";

  return (
    <div className="history-container">
      <section className="history-section">
        <div className="container container-history">
          <h1 className="history-title">Thông tin đơn hàng</h1>
          <hr className="history-divider" />
          <div className="history-info">
            <div className="history-text">
              <span className="history-text--bold">Mã đơn:</span>
              {data.madon}
            </div>
            <div className="history-text">
              <span className="history-text--bold">Ngày tạo:</span>
              {dateCreate.getDate()}/{dateCreate.getMonth()}/
              {dateCreate.getFullYear()}
            </div>
            <div className="history-text">
              <span className="history-text--bold">Số lượng:</span>
              {data.soluong} sản phẩm
            </div>
            <div className="history-text">
              <span className="history-text--bold">Tình trạng:</span> {status}
            </div>
            <div className="history-text">
              <span className="history-text--bold">Tổng giá:</span>
              {data.tonggia.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </div>
            <div className="history-text">
              <span className="history-text--bold">Mã khuyến mãi:</span> {makm}
            </div>
          </div>
          <h1 className="history-title">Chi tiết đơn hàng</h1>
          <hr className="history-divider" />
          <div className="history-detail">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Mã sản phẩm</StyledTableCell>
                    <StyledTableCell align="center">
                      Tên sản phẩm
                    </StyledTableCell>
                    <StyledTableCell align="center">Size</StyledTableCell>
                    <StyledTableCell align="center">Màu sắc</StyledTableCell>
                    <StyledTableCell align="center">Số lượng</StyledTableCell>
                    <StyledTableCell align="center">Tổng giá</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.giayDonhangs.map((row) => {
                    return (
                      <StyledTableRow key={row.magiay}>
                        <StyledTableCell component="th" scope="row">
                          {row.magiay}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.tengiay}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.size.tensize}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.mauSac.tenmau}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.soluong} sản phẩm
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.tonggia.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                  {data.phukienDonhangs.map((row) => {
                    return (
                      <StyledTableRow key={row.maphukien}>
                        <StyledTableCell component="th" scope="row">
                          {row.maphukien}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.tenphukien}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Không có
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Không có
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.soluong} sản phẩm
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.tonggia.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
