import Logo from "../../assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import "./nav.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function LinkTab(props) {
  return (
    <Tab
      {...props}
    />
  );
}

export default function Nav() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header>
      <div className="nav-container">
        <nav className="nav-flex">
          <div className="nav-header">
            <div className="nav-button">
              <MenuIcon />
            </div>
            <div className="nav-logo">
              <img src={Logo} />
            </div>
            <div className="nav-icon">
              <SearchIcon />
              <ShoppingCartIcon />
              <PersonIcon />
            </div>
          </div>
          <div className="nav-list">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
              sx={{
                "& .MuiTab-root": {
                  color: "black",
                },
                "& .MuiTab-root.Mui-selected": {
                  color: "black",
                  fontWeight: "700",
                },
                "& .MuiTabs-indicator": {
                  bgcolor: "black",
                },
              }}
            >
              <LinkTab label="TRANG CHỦ" component={Link} to="/homepage" />
              <LinkTab label="NAM" component={Link} to="/male" />
              <LinkTab label="NỮ" component={Link} to="/female" />
              <LinkTab label="TRẺ EM" component={Link} to="/child" />
              <LinkTab label="PHỤ KIỆN" component={Link} to="/accessory" />
              <LinkTab label="SỰ KIỆN" component={Link} to="/event" />
              <LinkTab label="LIÊN HỆ" component={Link} to="/contact" />
              <LinkTab label="ABOUT US" component={Link} to="/about" />
            </Tabs>
          </div>
        </nav>
      </div>
    </header>
  );
}
