import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 2,
        backgroundColor: "var(--main-header)",
        mt: 4,
        borderTop: "1px solid var(--purple-700)",
          
      }}
    >
      <Container>
        <Typography variant="body1"  component="p">
          © 2025 | Designed and coded with ❤️ by <strong>Hardik Baraiya</strong>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
