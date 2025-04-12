// src/Home.js
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import Arrrow from "./image/logo/arrorw.svg";
const Home = () => {
  return (
    <Box className="cm-home-section">
      <Container>
        <Grid container spacing={{ xs: 2, sm: 2, md: 4, lg: 6 }} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={5} lg={5} sx={{ position: 'relative' }}>
            <Typography component="div" className='cm-shadow cm-home-shadow'>
              <img src="User-image.png" alt="hero" />
            </Typography>
            <div className="cm-header-arrow">
              <img src={Arrrow} alt="arrow Logo" />
            </div>
          </Grid>

          <Grid item xs={12} md={7} lg={7}>
            <Typography variant="body1" component="p" className='cm-user-name-wrapper'>
              Hello! I am <Typography variant="body1" component="span" className='cm-user-name'> Hardik Baraiya</Typography>
            </Typography>
            <Typography component="h1" className='cm-user-role-wrapper'>
              UI & UX <Typography variant="body1" component="div" className='cm-user-role'>Designer</Typography>
            </Typography>
            <Typography variant="body1" component="p" className='cm-user-text mt-8'>
              I design intuitive and impactful digital experiences that bridge creativity and functionality.
            </Typography>
            <div className='cm-avaviblity-wrapper'>
              <Typography variant='body1' component="div" className='avaviblity'>
                <LocationOnSharpIcon /> <Typography variant="body1" component="span"> Ahmedabad, India </Typography>
              </Typography>
              <Typography variant='body1' component="div" className='avaviblity mt-2'>
                <div className="ring-container">
                  <div className="ringring"></div>
                  <div className="circle"></div>
                </div>
                <Typography variant="body1" component="span"> Available for new projects </Typography>
              </Typography>
            </div>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
