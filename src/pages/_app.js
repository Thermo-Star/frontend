import { ThemeProvider } from "styled-components";
import "./_app.css";
import { GlobalStyles, theme } from "../utils/ThemeConfig";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* onClick={toggleTheme}>Switch Theme</> */}
      <Component {...pageProps} theme={theme} />
    </ThemeProvider>
  );
}

export default MyApp;
