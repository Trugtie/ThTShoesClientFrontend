import "./category.scss";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {Link as RouterLink}  from "react-router-dom";

export default function CategoryItem({ title, link, bg }) {
  return (
    <div className="categories-container">
      <div className="categories-bg" style={{ backgroundImage: `url(${bg})` }}>
        <h1 className="categories-title">{title}</h1>
      </div>
      <div className="categories-btn">
        <Button
          variant="contained"
          sx={{
            width: "192px",
            borderRadius: "20px",
            transition: "all .3s",
            backgroundColor: "var(--button-first-color)",
            "&:hover": {
                backgroundColor: "var(--button-second-color)",
              },
          }}
        >
          <Link component={RouterLink} to={link} underline="none" sx={{ color: "white" }}>XEM NGAY
          </Link>
        </Button>
      </div>
    </div>
  );
}
