import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid";
import Button from "@mui/material/IconButton";
const TopMenu = () => {
  return (
    <div
      style={{
        backgroundColor: "divider",
        padding: "8px",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      }}
    >
      <Grid2 container spacing={0}>
        <Grid2 item xs={11}>
          <Typography
            variant="h5"
            style={{ verticalAlign: "middle", margin: "auto" }}
          >
            Kocham ZTM moje ulubione przedsiębiorstwo fr fr
          </Typography>
        </Grid2>
        <Grid2 item xs={1} sx={{ textAlign: "center" }}>
          <Button aria-label="Admin Panel">
            Admin
          </Button>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default TopMenu;
