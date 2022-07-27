import { TextField, Divider, Grid, Paper, IconButton } from "@mui/material";
import { useState } from "react";
import moment from "moment";
import "./styles.scss";
import commentApi from "../../api/commentApi";
import { toggleBlur } from "../BlurLoading";
import toast from "react-hot-toast";

export default function Comment({ data, id }) {
  const dataCopy = [...data];
  dataCopy.reverse();
  const [type, setType] = useState("");
  const [comments, setComments] = useState(dataCopy);
  const handleComents = (e) => {
    if (e.key === "Enter") {
      setType("");
      if (type.length > 0) {
        if (localStorage.getItem("access_token") === null) {
          toast.error("Bạn chưa đăng nhập!");
        } else {
          toggleBlur();
          const payload = {
            mota: type,
            masp: id,
          };
          const result = commentApi.postComments(payload);
          result
            .then(function (response) {
              if (id.includes("GA")) {
                const res = commentApi.getAllCommentShoes(id);
                res.then(function (response) {
                  setComments(response.binhluans.reverse());
                });
              } else {
                const res = commentApi.getAllCommentPK(id);
                res.then(function (response) {
                  setComments(response.binhluans.reverse());
                });
              }
              toggleBlur();
            })
            .catch(function (error) {
              toast.error("Bình luận thất bại !");
              toggleBlur();
            });
        }
      }
    }
  };
  const handleCommentBtn = (e) => {
    setType("");
    if (type.length > 0) {
      if (localStorage.getItem("access_token") === null) {
        toast.error("Bạn chưa đăng nhập!");
      } else {
        toggleBlur();
        const payload = {
          mota: type,
          masp: id,
        };
        const result = commentApi.postComments(payload);
        result
          .then(function (response) {
            if (id.includes("GA")) {
              const res = commentApi.getAllCommentShoes(id);
              res.then(function (response) {
                setComments(response.binhluans.reverse());
              });
            } else {
              const res = commentApi.getAllCommentPK(id);
              res.then(function (response) {
                setComments(response.binhluans.reverse());
              });
            }
            toggleBlur();
          })
          .catch(function (error) {
            toast.error("Bình luận thất bại !");
            toggleBlur();
          });
      }
    }
  };

  return (
    <div className="container comment-container">
      <h1 className="comment-title">Bình luận</h1>
      <div className="comment-input">
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
          placeholder="Nhập bình luận..."
          fullWidth
          onKeyPress={handleComents}
          InputProps={{
            endAdornment: (
              <IconButton
                sx={{
                  color: "white",
                  backgroundColor: "hsl(214deg 100% 59%)",
                  borderRadius: ".3rem",
                  transition: "all .3s",
                  fontSize: "1.2rem",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
                onClick={handleCommentBtn}
              >
                Đăng
              </IconButton>
            ),
          }}
        />
      </div>
      <Paper
        style={{
          padding: "40px 20px",
          maxHeight: "600px",
          overflowY: "auto",
        }}
      >
        {comments.map((item) => {
          return (
            <>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <h4 className="user-comment-name">
                    {item.khachHangDomain.ho + " " + item.khachHangDomain.ten}
                  </h4>
                  <p className="user-comment-description">{item.mota}</p>
                  <p className="comment-relative-time">
                    {moment(item.thoigian).fromNow()}
                  </p>
                </Grid>
              </Grid>
              <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
            </>
          );
        })}
      </Paper>
    </div>
  );
}
