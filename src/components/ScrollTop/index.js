import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function ScrollTop() {
  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Fab
          size="small"
          aria-label="scroll back to top"
          sx={{
            borderRadius: "0%",
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "#181818",
            },
          }}
        >
          <KeyboardArrowUpIcon sx={{ color: "white" }} />
        </Fab>
      </Box>
    </Fade>
  );
}

export default ScrollTop;
