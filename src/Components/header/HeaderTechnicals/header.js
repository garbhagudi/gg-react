/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from "theme-ui";
import Sticky from "react-stickynode";
import Logo from "Components/logo";
import { DrawerProvider } from "contexts/drawer/drawer-provider";
import NavbarDrawer from "Components/header/HeaderTechnicals/navbar-drawer";
import menuItems from "./header.data";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <DrawerProvider>
      <Box sx={styles.headerWrapper}>
        <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={100}>
          <Box as="header" sx={styles.header}>
            <Container>
              <Box sx={styles.headerInner}>
                <Logo sx={styles.logo} />
                <Box as="nav" sx={styles.navbar} className="navbar">
                  <Box as="ul" sx={styles.navList}>
                    {menuItems.map(({ path, label }, i) => (
                      <li key={i}>
                        <Link to={path}> {label} </Link>
                      </li>
                    ))}
                  </Box>
                  <Button variant="text" sx={styles.getStartedDesktop}>
                    <Link to="/contact-us">Book An Appointment</Link>
                  </Button>
                </Box>
                <Button variant="primaryMd" sx={styles.getStartedMobile}>
                  <Link to="/contact-us">Book Now</Link>
                </Button>
                <NavbarDrawer />
              </Box>
            </Container>
          </Box>
        </Sticky>
      </Box>
    </DrawerProvider>
  );
}

const styles = {
  headerWrapper: {
    backgroundColor: "transparent",
    ".is-sticky": {
      header: {
        backgroundColor: "white",
        boxShadow: "0 6px 13px rgba(38,78,118,0.1)",
        paddingTop: "15px",
        paddingBottom: "15px",
      },
    },
  },
  header: {
    position: "fixed",
    left: 0,
    right: 0,
    py: 4,
    transition: "all 0.3s ease-in-out 0s",
    "&.is-mobile-menu": {
      backgroundColor: "white",
    },
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    mr: [null, null, null, null, 1, 1],
    pr: [null, null, null, null, -12, -14],
  },
  navbar: {
    display: ["none", null, null, null, "flex"],
    alignItems: "center",
    flexGrow: 1,
    color: "text",
    justifyContent: "center",
  },
  navList: {
    display: ["none", "none", "none", "none", "none", "flex"],
    listStyle: "none",
    textAlign: "center",
    fontSize: [3, null, null, null, null, 13.2, 13.2],
    fontFamily: "body",
    fontWeight: "bold",
    p: 0,
    "li:last-child": {
      ml: ["auto"],
    },
    a: {
      textDecoration: "none",
      color: "heading",
      ml: "25px",
    },
    ".nav-item": {
      cursor: "pointer",
      fontWeight: 400,
      padding: 0,
      margin: [0, 0, 0, 0, "0 20px"],
    },
    ".active": {
      color: "secondary",
    },
  },
  getStartedDesktop: {
    color: "secondary",
    mr: "-20px",
    display: ["none", "none", "none", "none", "none", "none", "flex"],
    a: {
      textDecoration: "none",
      color: "secondary",
    },
  },
  getStartedMobile: {
    color: "secondary",
    fontSize: [1],
    minHeight: 30,
    m: ["0 15px 0 auto"],
    padding: "0 11px",
    display: ["flex", null, null, null, "flex", "flex", "none"],
    a: {
      textDecoration: "none",
      color: "white",
    },
  },
  closeButton: {
    height: "32px",
    padding: "4px",
    minHeight: "auto",
    width: "32px",
    ml: "3px",
    path: {
      stroke: "text",
    },
  },
};
