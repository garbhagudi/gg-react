import { ThemeProvider } from "theme-ui";
import theme from "theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "Components/layout";
import Home from "Pages/Home";
import IvfAtHome from "Pages/IvfFromHome";
import SalesIQ from "Components/SalesIQ";
import "app.css";

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
              render={() => (window.location.href = "form.html")}
            />
          </Switch>
          <SalesIQ />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}
