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
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function LinkTab(props) {
  return <Tab {...props} />;
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
              <Link className="cart-menu" to="cart">
                <ShoppingCartIcon />
                <div className="cart-count">1</div>
              </Link>
              {/* <div className="person-menu">
                <PersonIcon className="person-icon" />
                <div className="person-menu-dropdown person-menu-dropdown--icon">
                  <ListItemButton
                    className="person-btn"
                    component={Link}
                    to="/login"
                    sx={{
                      "&.MuiListItemButton-root": {
                        borderBottom: "1px solid #959595",
                      },
                    }}
                  >
                    <ListItemText primary="ĐĂNG NHẬP" />
                  </ListItemButton>
                  <ListItemButton
                    className="person-btn"
                    component={Link}
                    to="/register"
                  >
                    <ListItemText primary="ĐĂNG KÝ" />
                  </ListItemButton>
                </div>
              </div> */}
              <div className="person-menu person-menu--user">
                Welcome
                <br />
                Trugtie
                <div className="person-menu-dropdown">
                  <ListItemButton
                    className="person-btn"
                    component={Link}
                    to="/personInfo"
                    sx={{
                      "&.MuiListItemButton-root": {
                        borderBottom: "1px solid #959595",
                      },
                    }}
                  >
                    <ListItemText
                      className="dropdown-text"
                      primary="THÔNG TIN CÁ NHÂN"
                    />
                  </ListItemButton>
                  <ListItemButton
                    className="person-btn"
                    component={Link}
                    to="/history"
                    sx={{
                      "&.MuiListItemButton-root": {
                        borderBottom: "1px solid #959595",
                      },
                    }}
                  >
                    <ListItemText
                      className="dropdown-text"
                      primary="LỊCH SỬ MUA HÀNG"
                    />
                  </ListItemButton>
                  <ListItemButton
                    className="person-btn"
                    component={Link}
                    to="/exit"
                  >
                    <ListItemText className="dropdown-text" primary="THOÁT" />
                  </ListItemButton>
                </div>
              </div>
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
