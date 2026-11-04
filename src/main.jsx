import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const theme = createTheme({
  primaryColor: "red",
  colors: {
    red: [
      "#ffe5e0", "#ffb8ad", "#ff8a7a", "#ff5c47", "#F42902",
      "#d12400", "#b01e00", "#8e1800", "#6c1200", "#4a0c00",
    ],
  },
  fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
  fontFamilyMonospace: "JetBrains Mono, ui-monospace, monospace",
  headings: {
    fontFamily: "Luckiest Guy, Inter, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="light">
      <App />
    </MantineProvider>
  </React.StrictMode>
);
