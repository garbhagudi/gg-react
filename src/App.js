import { ThemeProvider, Flex } from "theme-ui";
import theme from "theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "app.css";
import "react-modal-video/css/modal-video.min.css";
import "rc-drawer/assets/index.css";
import loadable from "@loadable/component";
const SalesIQ = loadable(() => import("Components/SalesIQ"));
const Home = loadable(() => import("Pages/Home"));
const IvfAtHome = loadable(() => import("Pages/IvfFromHome"));
const Footer = loadable(() => import("Components/footer/footer"));

export default function App() {
  return (
    <Flex
      sx={{
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <main
        sx={{
          variant: "layout.main",
        }}
      >
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route component={Home} path="/" exact />
              <Route component={IvfAtHome} path="/ivf-from-home" exact />
              <Route
                path="/contact-us"
                render={() => (window.location.href = "contact-us.html")}
              />
            </Switch>
            <SalesIQ />
            <Footer />
          </ThemeProvider>
        </BrowserRouter>
      </main>
    </Flex>
  );
}
