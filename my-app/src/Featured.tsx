import React from "react";
import { Box, Grid, Card, CardContent, Typography, CardMedia, Button } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import Container from '@mui/material/Container';
import featuredDash from './image/screenshots/Featured-dash.png';
import freshcard from './image/freshcart-project/freshcard-home.png'
import featuredPrice from './image/screenshots/Featured-price.png';
import featuredcal from './image/screenshots/Featured-cal.png';
import featulogin from './image/screenshots/feature-login.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
interface Project {
  title: string;
  description: string;
  image: string;
}

const FeatureData: Project[] = [
  {
    title: 'Freshcart',
    description: 'Clean and Minimalistic Homepage Design for your online stores. Simplified layouts with ample white space for a clean and modern look. Minimalist navigation menus and straightforward user interfaces',
    image: freshcard,
  },
  {
    title: 'Freshcart',
    description: 'Clean and Minimalistic Homepage Design for your online stores. Simplified layouts with ample white space for a clean and modern look. Minimalist navigation menus and straightforward user interfaces',
    image: freshcard,
  },

  {
    title: 'Freshcart',
    description: 'Clean and Minimalistic Homepage Design for your online stores. Simplified layouts with ample white space for a clean and modern look. Minimalist navigation menus and straightforward user interfaces',
    image: freshcard,
  },

  {
    title: 'Freshcart',
    description: 'Clean and Minimalistic Homepage Design for your online stores. Simplified layouts with ample white space for a clean and modern look. Minimalist navigation menus and straightforward user interfaces',
    image: freshcard,
  },

  {
    title: 'Freshcart',
    description: 'Clean and Minimalistic Homepage Design for your online stores. Simplified layouts with ample white space for a clean and modern look. Minimalist navigation menus and straightforward user interfaces',
    image: freshcard,
  },

  {
    title: 'Freshcart',
    description: 'Clean and Minimalistic Homepage Design for your online stores. Simplified layouts with ample white space for a clean and modern look. Minimalist navigation menus and straightforward user interfaces',
    image: freshcard,
  },

 
  // {
  //   title: 'Secure Dashboard',
  //   description: 'Clean and Minimalistic Homepage Design for your online stores. Simplified layouts with ample white space for a clean and modern look. Minimalist navigation menus and straightforward user interfaces',
  //   image: featuredDash,
  // },

   
];



const Featured = () => {
  return (
    <Box className="cm-featured-section" >
      <Container>
        <Grid container spacing={14} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={12}>
            <Typography component="h4" variant='body1' className='cm-section-title'>Personal Projects </Typography>
            <Grid container spacing={4} justifyContent="center">
              {FeatureData.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{borderRadius:'20px 20px 20px 20px', cursor: 'pointer',backgroundColor: 'transparent',maxHeight:'440px' }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent >
                      <Typography variant="h6" sx={{ fontWeight: "700",color: "var(--indigo-50)", margin: "0px 0",
                      fontSize: "1.6rem",                     
                      fontFamily: 'Plus Jakarta Sans' }}>{project.title}</Typography>
                      <Typography variant="body2" component='p' sx={{color: 'var(--indigo-100)'}}>
                        {project.description}
                      </Typography>
                     <Typography variant="body2"  component='div'  sx={{ marginTop: "20px !important"}}>
                      <Button
                      startIcon={<ArrowForwardIosIcon />}
                        variant="outlined"
                        className="custom-btn btn-1" >
                        Learn More
                      </Button>
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

export default Featured;
