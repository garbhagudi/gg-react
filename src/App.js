import { ThemeProvider } from "theme-ui";
import theme from "theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "app.css";
import SalesIQ from "Components/SalesIQ";
import loadable from "@loadable/component";
const Layout = loadable(() => import("Components/layout"));
const Home = loadable(() => import("Pages/Home"));
const IvfAtHome = loadable(() => import("Pages/IvfFromHome"));

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={IvfAtHome} path="/ivf-from-home" />
            <Route
              path="/contact-us"
              render={() => (window.location.href = "contact-us.html")}
            />
          </Switch>
          <SalesIQ />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}
