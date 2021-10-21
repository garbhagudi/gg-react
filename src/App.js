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
const MaleInfertility = loadable(() => import("Pages/MaleInfertility"));
const OnlineConsultation = loadable(() => import("Pages/OnlineConsultation"));

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
              <Route path="/male-infertility" component={MaleInfertility} />
              <Route
                path="/online-consultation"
                component={OnlineConsultation}
              />
              <Route
                path="/contact-us"
                render={() => (window.location.href = "contact-us.html")}
              />
              <Route
                path="/ovulation-calculator"
                render={() =>
                  (window.location.href =
                    "ovulation-prediction-calculator.html")
                }
              />
              <Route
                path="/fertility-quotient-calculator"
                render={() =>
                  (window.location.href = "fertility-quotient-calculator.html")
                }
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
