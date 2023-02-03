import { PhotoCamera } from "@mui/icons-material";
import { Button, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  // we can create custom-styled components, so we can import them as components

  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "aqua",
    },
  });

  return (
    <div>
      {/* Sample Buttons */}
      <Button
        variant="contained"
        color="success"
        size="large"
        onClick={handleClick}
      >
        Count
      </Button>
      {count}

      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <PhotoCamera />
      </IconButton>

      {/* Custom styling in the button component itself */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "purple",
          margin: 5,
          "&:hover": {
            backgroundColor: "aqua",
          },
        }}
      >
        Unique Button
      </Button>

      <Button
        variant="contained"
        disabled
        sx={{
          backgroundColor: "purple",
          margin: 1,
          padding: 1,
          "&:disabled": {
            backgroundColor: "gray",
            color: "white",
          },
        }}
      >
        Disabled Button
      </Button>

      <BlueButton>Blue</BlueButton>
      <BlueButton>Blue</BlueButton>

      <Typography variant="h1" component="p">
        It forwards h1 style on p-tag
      </Typography>
    </div>
  );
}

export default App;
