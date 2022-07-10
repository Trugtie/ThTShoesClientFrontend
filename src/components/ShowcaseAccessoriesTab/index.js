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

export default function ShowcaseAccessoriesTab({ phuKienLatest }) {
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
              fontWeight:'700',
              padding:'0px',
              justifyContent: 'flex-end',
            },
            "& .MuiTab-root.Mui-selected": {
              color: "black",
              fontWeight: "700",
              transition:'all .3s',
            },
            "& .MuiTab-root:hover": {
                cursor:'default',
            }
            ,
            "& .MuiTabs-indicator": {
              display:'none',
            },
          }}
        >
          <Tab label="PHỤ KIỆN" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Slider bg='myswiper--second' data={phuKienLatest} mod={2}/>
      </TabPanel>
    </Box>
  );
}
