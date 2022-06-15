import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "../Slider"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography
          sx={{
            height:'823px'
          }}
          >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ShowcaseShoesTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{
            "& .MuiTab-root": {
              color: "black",
              fontSize:'20px',
              fontWeight:'700'
            },
            "& .MuiTab-root.Mui-selected": {
              color: "white",
              fontWeight: "700",
              backgroundColor:'black',
              transition:'all .3s',
            },
            "& .MuiTabs-indicator": {
              display:'none',
            },
          }}
        >
          <Tab label="SẢN PHẨM MỚI" {...a11yProps(0)} />
          <Tab label="SẢN PHẨM BÁN CHẠY" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Slider bg='myswiper--main'/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Slider bg='myswiper--main'/>
      </TabPanel>
    </Box>
  );
}
