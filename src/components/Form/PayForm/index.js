import { Grid, TextField, TextareaAutosize } from "@mui/material";
import { userSelector } from "../../../store/selectors";
import { useSelector } from "react-redux";
import { Controller } from "react-hook-form";

export default function PayForm({ control, errors }) {
  const user = useSelector(userSelector);

  return (
    <div
      className="pay-info"
      data-aos="fade-right"
      data-aos-duration="800"
      data-aos-delay="100"
    >
      <h1 className="pay-title pay-title--left">THÔNG TIN THANH TOÁN</h1>
      <hr />
      <Grid sx={{ padding: "1rem 2rem" }} container spacing={2}>
        <Grid item xs={6}>
          <Controller
            name="ho"
            control={control}
            defaultValue={user.ho}
            render={({ field }) => (
              <TextField
                {...field}
                id="filled-basic"
                label="Họ"
                fullWidth
                variant="filled"
                placeholder="Nhập họ..."
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="ten"
            control={control}
            defaultValue={user.ten}
            render={({ field }) => (
              <TextField
                {...field}
                id="filled-basic"
                label="Tên"
                fullWidth
                variant="filled"
                placeholder="Nhập tên..."
              />
            )}
          />
        </Grid>
        <Grid container sx={{ paddingLeft: "16px" }}>
          {errors && (
            <Grid
              item
              xs={6}
              sx={{
                paddingTop: "5px !important",
                color: "red",
                textAlign: "left",
                fontSize: "1rem",
                textIndent: ".5rem",
              }}
            >
              <p>{errors.ho?.message}</p>
            </Grid>
          )}
          {errors && (
            <Grid
              item
              xs={6}
              sx={{
                paddingTop: "5px !important",
                color: "red",
                textAlign: "left",
                fontSize: "1rem",
                textIndent: ".5rem",
              }}
            >
              <p>{errors.ten?.message}</p>
            </Grid>
          )}
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="diachi"
            control={control}
            defaultValue={user.diachi}
            render={({ field }) => (
              <TextField
                {...field}
                id="filled-basic"
                label="Địa chỉ giao"
                fullWidth
                variant="filled"
                placeholder="Nhập địa chỉ giao hàng..."
              />
            )}
          />
        </Grid>
        {errors && (
          <Grid
            item
            xs={12}
            sx={{
              paddingTop: "5px !important",
              color: "red",
              textAlign: "left",
              fontSize: "1rem",
              textIndent: ".5rem",
            }}
          >
            <p>{errors.diachi?.message}</p>
          </Grid>
        )}
        {Object.keys(user).length === 0 ? (
          <>
            <Grid item xs={6}>
              <Controller
                name="sdt"
                control={control}
                defaultValue={user.sdt}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="filled-basic"
                    label="Số điện thoại"
                    type="tel"
                    inputProps={{ maxLength: 10 }}
                    fullWidth
                    variant="filled"
                    placeholder="Nhập số điện thoại..."
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    id="filled-basic"
                    label="Email"
                    placeholder="Nhập email..."
                    variant="filled"
                    sx={{ background: "white" }}
                  />
                )}
              />
            </Grid>
            <Grid container sx={{ paddingLeft: "16px" }}>
              {errors && (
                <Grid
                  item
                  xs={6}
                  sx={{
                    paddingTop: "5px !important",
                    color: "red",
                    textAlign: "left",
                    fontSize: "1rem",
                    textIndent: ".5rem",
                  }}
                >
                  <p>{errors.sdt?.message}</p>
                </Grid>
              )}
              {errors && (
                <Grid
                  item
                  xs={6}
                  sx={{
                    paddingTop: "5px !important",
                    color: "red",
                    textAlign: "left",
                    fontSize: "1rem",
                    textIndent: ".5rem",
                  }}
                >
                  <p>{errors.email?.message}</p>
                </Grid>
              )}
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <Controller
                name="sdt"
                control={control}
                defaultValue={user.sdt}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="filled-basic"
                    label="Số điện thoại"
                    type="tel"
                    inputProps={{ maxLength: 10 }}
                    fullWidth
                    variant="filled"
                    placeholder="Nhập số điện thoại..."
                  />
                )}
              />
            </Grid>
            {errors && (
              <Grid
                item
                xs={12}
                sx={{
                  paddingTop: "5px !important",
                  color: "red",
                  textAlign: "left",
                  fontSize: "1rem",
                  textIndent: ".5rem",
                }}
              >
                <p>{errors.sdt?.message}</p>
              </Grid>
            )}
          </>
        )}

        <Grid item xs={12}>
          <Controller
            name="note"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextareaAutosize
                {...field}
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
            )}
          />
        </Grid>
        {errors && (
          <Grid
            item
            xs={12}
            sx={{
              paddingTop: "5px !important",
              color: "red",
              textAlign: "left",
              fontSize: "1rem",
              textIndent: ".5rem",
            }}
          >
            <p>{errors.note?.message}</p>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
