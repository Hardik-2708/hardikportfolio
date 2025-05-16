import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import Arrrow from "./image/logo/arrorw.svg";
import { motion } from 'framer-motion';

const Home = () => {
  // Variants for staggered text animation
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25,
        type: "spring",
        stiffness: 50,
      },
    }),
  };

  return (
    <Box className="cm-home-section">
      <Container>
        <Grid container spacing={{ xs: 2, sm: 2, md: 4, lg: 6 }} justifyContent="center" alignItems="center">

          {/* Image with slide in + scale hover */}
          <Grid item xs={12} md={5} lg={5} sx={{ position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="cm-shadow cm-home-shadow"
            >
              <img src="User-image.png" alt="hero" />
            </motion.div>

            {/* Arrow with fade + bounce + rotate */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -15 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 80, damping: 10 }}
              className="cm-header-arrow"
            >
              <img src={Arrrow} alt="arrow Logo" />
            </motion.div>
          </Grid>

          {/* Text section with staggered fade + slide */}
          <Grid item xs={12} md={7} lg={7}>
            <div className='cm-text-wrapper'>
              {[
                <Typography key="greeting" variant="body1" component="p" className='cm-user-name-wrapper'>
                  Hello! I am <Typography variant="body1" component="span" className='cm-user-name'> Hardik Baraiya</Typography>
                </Typography>,

                <Typography key="role" component="h1" className='cm-user-role-wrapper'>
                  UI & UX <Typography variant="body1" component="div" className='cm-user-role'>Designer</Typography>
                </Typography>,

                <Typography key="desc" variant="body1" component="p" className='cm-user-text mt-8'>
                  I design intuitive and impactful digital experiences that bridge creativity and functionality.
                </Typography>,

                <Typography key="location" variant='body1' component="div" className='cm-avaviblity-wrapper'>
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
                </Typography>,
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={textVariant}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
