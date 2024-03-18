import { ThemeProvider } from "styled-components";
import Box from "./components/box";

function App() {
  const theme = {
    fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    colors: {
      blue: "#07c",
      red: "#e10",
    },
    radius: {
      normal: 8,
      full: 0,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box bg="blue" color="white">
        Emre
      </Box>
    </ThemeProvider>
  );
}

export default App;
