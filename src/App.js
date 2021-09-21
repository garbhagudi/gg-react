import { ThemeProvider } from "theme-ui";
import theme from "theme";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from "Components/layout";
import Home from "Pages/Home";
import IvfAtHome from "Pages/IvfAtHome";
import SalesIQ from "Components/SalesIQ";


export default function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={IvfAtHome} path="/ivf-at-home"/>
        </Switch> 
        <SalesIQ />
      </Layout>
    </ThemeProvider>
    </BrowserRouter>
  );
}
