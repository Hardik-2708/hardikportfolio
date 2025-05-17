import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={visible}>
      <Fab         
        onClick={scrollToTop}
        aria-label="scroll back to top"
        className="scroll-to-top-btn"
      >
        <KeyboardArrowUpIcon  fontSize="large"/>
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopButton;
