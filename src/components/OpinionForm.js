import * as React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Grid2";
import Divider from "@mui/material/Divider";
const OpinionForm = () => {
  const [postText, setPostText] = React.useState("");
  const [nicknameText, setNicknameText] = React.useState("Anonim");

  const onPostTextChange = (e) => setPostText(e.target.value);
  const onNicknameTextChange = (e) => setNicknameText(e.target.value);
  const dialogboxstyle = {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
    top: "50%",
    left: "50%",
    textAlign: "center",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box sx={dialogboxstyle}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Tutaj możesz napisać coś od siebie
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Pamiętaj żeby zachować szacunek, wszystkie wpisy będą zatwierdzane przed
        opublikowaniem
      </Typography>
      <Divider sx={{ marginTop: "10px", marginBottom: "15px" }} />
      <Grid2 spacing={1}>
        <Grid2 size={12}>
          <TextField
            id="nickname-field"
            label="Twój pseudonim"
            variant="outlined"
            onChange={(e) => setNicknameText(e.target.value)}
            value={nicknameText}
          />

          <TextField
            id="post-field"
            label="Twój wpis"
            multiline
            maxRows={8}
            variant="outlined"
            onChange={(e) => setPostText(e.target.value)}
            value={postText}
          />
        </Grid2>
        <Grid2 size={12}>
          <Button
            variant="contained"
            sx={{ marginTop: "10px" }}
            onClick={() => {
              console.log(nicknameText, postText);
            }}
          >
            Dodaj wpis
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};
export default OpinionForm;
