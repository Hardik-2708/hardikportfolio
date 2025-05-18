
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom"; // Import NavLink

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';
import MenuClose from '@mui/icons-material/Close'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import headerLogo from "./image/logo/header.svg";
import Button from "@mui/material/Button";
import clsx from "clsx";
import HomeComponent from "./home";
import AboutComponent from "./About";

import "@mui/material/styles";
import "./tailwind.css/tailwind.css";
import "./App.scss";
import "./app-responsive.scss";
import { Divider } from "@mui/material";
import ExperienceDetails from "./ExperienceDetails";
import CompanyexperienceDetails from "./Experience-details-company";
import ScrollToTop from "./ScrollToTop";
import ScrollToTopButton from "./ScrollToTopButton";
import Footer from "./Footer";
import ServicesComponent from './Services';
import FeaturedComponent from './Featured';
import ContactSection from "./contactDetails";


// Page components
const Home = () => (
  <HomeComponent />
);

const About = () => (
  <AboutComponent />
);

const Services = () => (
  <ServicesComponent />

);
const Featured = () => (
  <FeaturedComponent />
)

const Contact = () => (
  <ContactSection />
);

// Define navigation items
const pages = [
  { path: "/home", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/services", title: "Services" },
  { path: "/contact", title: "Contact" },
];

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // TypeScript Event Type Narrowing
  const toggleDrawer = (open: boolean) => (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
  ) => {
    if ((event as React.KeyboardEvent).key && (event as React.KeyboardEvent).key === "Tab") {
      return; // Handle keyboard events (avoid toggling drawer when Tab is pressed)
    }

    setDrawerOpen(open); // Only toggle the drawer for mouse or other valid key events
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prev) => !prev);
    document.body.setAttribute("data-theme", !isDarkMode ? "dark" : "light");
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/Hardik-Baraiya-CV.pdf';
    link.download = 'Hardik-Baraiya-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <AppBar
        position="sticky"
        className={clsx("cm-main-header", { "scrolled-header": scrolled })}
      >
        <Container   >
          <Toolbar sx={{ padding: 0 }}>


             
            <Typography variant="body1" component="div" sx={{ flexGrow: 1, alignItems: { md: "center", lg: 'unset' } }} >
              <div className="cm-header-logo">
                <img src={headerLogo} alt="Header Logo" />
              </div>
            </Typography>
           
            <IconButton
              edge="start"
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={toggleDrawer(true)} 
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: "none", md: "flex" } }} className="nav-items">
              {pages.map(({ path, title }) => (
                <NavLink
                  key={path}
                  to={path}
                  // Correct way to apply class based on active state
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <Button color="inherit">{title}</Button>
                </NavLink>
              ))}
            </Box>
            <Divider sx={{ display: { xs: "none", md: "block" } }} orientation="vertical" flexItem variant="middle" />
            <Box sx={{ display: { xs: "none", md: "flex", gap: "10px", alignItems: "center" } }}>
              <IconButton onClick={handleToggle}>
                {isDarkMode ? (
                  <DarkModeOutlinedIcon sx={{ color: "var(--blue-50)" }} />
                ) : (
                  <LightModeOutlinedIcon sx={{ color: "var(--blue-50)" }} />
                )}
              </IconButton>
              <Button className="cm-button"
                onClick={handleDownload}
              ><span className="circle1"></span>
                <span className="circle2"></span>
                <span className="circle3"></span>
                <span className="circle4"></span>
                <span className="circle5"></span>
                <span className="text">Download CV</span>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer anchor="right" sx={{ width: '100%' }} className="cm-right-side-drawer" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: "100%" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {pages.map(({ path, title }) => (
              <ListItem
                key={path}
                component={NavLink}
                to={path}

              >
                <ListItemText primary={title} />
              </ListItem>              
            ))}
           <Divider sx={{ display: { xl: "none", md: "block" } }} orientation="horizontal" flexItem variant="middle" />
            <div className="switch-theme">
              <Typography component="p">Switch Theme</Typography> 
              <IconButton onClick={handleToggle} color="inherit" >
                {isDarkMode ? (
                  <DarkModeOutlinedIcon sx={{ color: "var(--blue-50)" }} />
                ) : (
                  <LightModeOutlinedIcon sx={{ color: "var(--blue-50)" }} />
                )}
              </IconButton>
              </div>
              <Button className="cm-button cm-button-download"
                onClick={handleDownload}
              ><span className="circle1"></span>
                <span className="circle2"></span>
                <span className="circle3"></span>
                <span className="circle4"></span>
                <span className="circle5"></span>
                <span className="text">Download CV</span>
              </Button>
            <IconButton
              edge="start"
              size="medium"
              color="inherit"
              aria-label="menu"
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                  position: "absolute",
                  right: 16,
                  top: 4,
                  zIndex: 1
                }
              }}
              onClick={toggleDrawer(true)} // Fixed event handling
            >
              <MenuClose fontSize="medium" />
            </IconButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

const App = () => (
  <Router>
    <Box>
      {/* Navigation Bar */}
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        {pages.map(({ path, title }) => (
          <Route
            key={path}
            path={path}
            element={
              title === "Home" ? (
                <>
                  <Home />
                  <About />
                  <Services />
                  <Featured />
                  <Contact />
                </>
              ) : title === "About" ? (
                <About />
              ) : title === "Services" ? (
                <>
                  <Services />
                  <Featured />
                </>
              ) : (
                <Contact />
              )
            }
          />
        ))}
        <Route path="/experience-details" element={<ExperienceDetails />} />
      </Routes>
      <Routes>
        <Route path="/Experience-details-company" element={<CompanyexperienceDetails />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Box>
  </Router>
);

export default App;
