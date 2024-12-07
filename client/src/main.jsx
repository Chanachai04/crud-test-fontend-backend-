import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import {store} from "./store/store";
import {Provider} from "react-redux";
import App from "./App.jsx";
import "./index.css";
const theme = createTheme({
    typography: {
        fontFamily: "Prompt",
    },
});
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </StrictMode>
);
