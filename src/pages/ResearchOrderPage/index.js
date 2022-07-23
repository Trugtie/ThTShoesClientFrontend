import "./style.scss";
import { TextField, Button } from "@mui/material";
import DetailHistoryPage from "../DetailHistoryPage";
import { useState, useRef } from "react";
import userApi from "../../api/userApi";
import toast, { Toaster } from "react-hot-toast";
import { toggleBlur } from "../../components/BlurLoading";

export default function ResearchOrderPage() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const inputElement = useRef();
  const handleChange = (e) => {
    setId(e.target.value.toUpperCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleBlur();
    if (id.length > 0) {
      const res = userApi.getHistoryNoneToken(id);
      res
        .then(function (response) {
          toggleBlur();
          setData(response.data.donHang);
          toast.success("Tra cứu thành công !");
        })
        .catch(function (error) {
          toggleBlur();
          toast.error("Tra cứu thất bại !");
        });
    }
    setId("");
    inputElement.current.focus();
  };
  return (
    <div className="orderresearch-container">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            color: "#fff",
            width: "250px",
            height: "50px",
            fontSize: "1.1rem",
          },
          // Default options for specific types
          success: {
            duration: 3000,
            style: {
              background: "rgb(56, 142, 60)",
            },
          },
          error: {
            duration: 3000,
            style: {
              background: "rgb(211, 47, 47)",
            },
          },
        }}
      />
      <section className="research-input-section">
        <div className="container">
          <h1 className="reasearch-title">TRA CỨU ĐƠN HÀNG</h1>
          <hr />
          <h2 className="research-label">Nhập mã khách hàng cần tra cứu: </h2>
          <form>
            <div className="research-content">
              <TextField
                inputRef={inputElement}
                id="outlined-basic"
                label="Mã khách hàng"
                variant="outlined"
                placeholder="Nhập mã khách hàng"
                value={id}
                required
                onChange={handleChange}
                inputProps={{
                  maxLength: 10,
                }}
              />
              <Button variant="text" type="submit" onClick={handleSubmit}>
                Tra cứu
              </Button>
            </div>
          </form>
        </div>
      </section>
      {data && <DetailHistoryPage history={data} />}
    </div>
  );
}
