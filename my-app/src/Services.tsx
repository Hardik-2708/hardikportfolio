import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import Container from '@mui/material/Container';
import UIUXDesign from "./image/logo/UI-image.png";
import UXDesign from "./image/logo/UX-image.png";
import Customization from "./image/logo/Customization.png";

const servicesData = [
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing designs using Figma and Adobe XD. Ensuring user-friendly experiences through research and usability testing.",
    icon: <img src={(UIUXDesign)} />,
  },
  {
    title: "Frontend Development",
    description:
      "Building high-performance React & Angular applications with Material UI, AG Grid, and custom UI components.",
      icon: <img src={(UXDesign)} />,
  },
  {
    title: "Branding & Customization",
    description:
      "Crafting unique brand themes, custom UI components, and interactive animations for an engaging digital experience.",
      icon: <img src={(Customization)} />,
  },
];


const Services = () => {
  return (
    <Box className="cm-awsome-section">
      <Container>
        <Grid container spacing={14} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={12}>
            <Typography component="h4" variant='body1' className='cm-section-title'>Awesome Services </Typography>

            <Grid container spacing={{ xs: 2, sm: 2, md: 4, lg: 4 }} rowSpacing={{ xs: 2, sm: 2, md: 0, lg: 4 }} justifyContent="center"  className="serviceGrid">
              {servicesData.map((service, index) => (
                <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index}>
                  <Card sx={{ p: 3, textAlign: "center", boxShadow: 3, borderRadius: "12px" }} className="serviceCard">
                  <Typography component="div" className="cm-service-image">{service.icon}</Typography>   
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            </Grid>
            </Grid>
          </Container>
        </Box>
        );
};

export default Services;
