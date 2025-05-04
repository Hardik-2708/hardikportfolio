import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button, Chip, List, ListItem, Tooltip } from '@mui/material';
import { Card, CardContent } from "@mui/material";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiSass, DiBootstrap, DiJavascript1, DiGit } from "react-icons/di";
import { SiTypescript, SiAngular, SiMui, SiFigma, SiAdobexd, SiTailwindcss, SiAdobeillustrator } from "react-icons/si";

import headerLogo from "./image/logo/header.svg";
import firstline from "./image/logo/first-line.svg";
import secoundline from "./image/logo/secound-line.svg";
import thirdline from "./image/logo/third-line.svg";
import fourline from "./image/logo/four.svg";
import fiveline from "./image/logo/five.svg";
import sixline from "./image/logo/six.svg";
import intership from "./image/logo/internship.png";
import Company from "./image/logo/company.png";
import { spacing } from '@mui/system';

const AboutComponent = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const skills = [
    { name: "HTML", icon: <AiFillHtml5 className="text-red-500 text-5xl" /> },
    { name: "CSS", icon: <DiCss3 className="text-blue-500 text-5xl" /> },
    { name: "SCSS", icon: <DiSass className="text-pink-500 text-5xl" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500 text-5xl" /> },
    { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500 text-5xl" /> },
    { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500 text-5xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-5xl" /> },
    { name: "Angular", icon: <SiAngular className="text-red-600 text-5xl" /> },
    { name: "MaterialUI", icon: <SiMui className="text-blue-400 text-5xl" /> },
    { name: "GIT", icon: <DiGit className="text-orange-500 text-5xl" /> },
    { name: "Figma", icon: <SiFigma className="text-white text-5xl" /> },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-500 text-5xl" /> },
    { name: "Adobe XD", icon: <SiAdobexd className="text-pink-500 text-5xl" /> },
  ];
  const navigate = useNavigate();
  return (
    <>
      <Box className="cm-about-section">
        <Container>
          <Grid container spacing={14} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={12}>
              <Typography component="h4" variant='body1' className='cm-section-title'>About me</Typography>
              <Typography component="h6" variant="body1">
                I'm a passionate UI/UX Designer,
              </Typography>
              <Typography component="div" variant="body1">
                currently working at
                <Typography component="span" className="cm-home-typography"> Triveni Global Software Services.</Typography>
              </Typography>
              <Typography component="div" variant="body1">
                Hi, I’m <Typography component="span" className="cm-home-typography">Hardik</Typography>, a self-taught and dedicated UI/UX Designer with <Typography component="span" className="cm-home-typography">3.4+ years</Typography> of experience in crafting seamless digital experiences. With a strong foundation in user-centered design principles, I specialize in creating interfaces that are not only visually engaging but also intuitive and accessible to a diverse audience.
              </Typography>
              <Typography component="div" variant="body1">
                Currently working as a UI / UX Designer at <Typography component="span" className="cm-home-typography">Triveni Global Software Services</Typography>, I focus on designing user-friendly, aesthetically appealing, and high-performing interfaces.
              </Typography>

              <Typography component="div" variant="body1">
                Skills & Expertis
                <br /> Frontend Technologies: <Typography component="span" className="cm-home-typography">HTML, HTML5, CSS, CSS3, Sass, jQuery</Typography>
                <br />Frameworks & Libraries: <Typography component="span" className="cm-home-typography">Bootstrap, Tailwind CSS, React Material UI, Angular Material UI </Typography>
                <br /> Design Tools: <Typography component="span" className="cm-home-typography">Figma, Adobe XD, Illustrator, Photoshop</Typography>
              </Typography>
              <Typography component="div" variant="body1">
                I am dedicated to creating high-quality, user-centric designs that enhance user experience and meet business goals. Always eager to learn and adapt, I stay updated with the latest UI/UX trends and technologies.
              </Typography>
            </Grid>

          </Grid>
        </Container>
      </Box>
      <Box className="cm-skills-section">
        <Container>
          <Grid container spacing={14} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={12}>
              <Typography component="h4" variant='body1' className='cm-section-title'>Skills</Typography>
              <Typography component="h6" variant="body1" textAlign="center">
                I'm currently looking to join a <Typography component="div" variant='body1' className="cm-skills-typography"> cross-functional  </Typography>
                &nbsp;team that values improving people's lives through accessible design
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center" alignItems="center" className="cm-skills-wrapper">
            {skills.map((skill, index) => (
              <Grid item xs={2} sm={4} md={1.5} lg={1.5} key={index} textAlign="center" sx={{ textAlign: '-webkit-center' }}>
                <Tooltip title={skill.name}>
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl flex flex-col items-center">
                    {skill.icon}
                  </Card>
                </Tooltip>
              </Grid>
            ))}
            <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center" >
              <div className="cm-skills-universe-main">
                <div className="cm-universe-vertical-line-main">
                  <div className="cm-universe-vertical-line cm-first-vertical-line">
                    <img src={firstline} alt="firstline" />
                  </div>
                  <div className="cm-universe-vertical-line cm-secound-vertical-line">
                    <img src={secoundline} alt="secoundline" />
                  </div>
                  <div className="cm-universe-vertical-line cm-third-vertical-line">
                    <img src={thirdline} alt="firstline" />
                  </div>
                  <div className="cm-universe-vertical-line cm-four-vertical-line">
                    <img src={fourline} alt="fourline" />
                  </div>
                  <div className="cm-universe-vertical-line cm-five-vertical-line">
                    <img src={fiveline} alt="firstline" />
                  </div>

                </div>
                <div className="cm-skkills-universe-inner">
                  <img src={headerLogo} alt="Header Logo" />
                </div>
                <div className="cm-universe-line">
                  <AiFillHtml5 className="Html5 text-red-500 text-5xl" />
                  <DiJavascript1 className="Javascript1 text-yellow-500 text-5xl" />
                </div>
                <div className="cm-universe-line">
                  <DiCss3 className="Css3 text-blue-500 text-5xl" />
                  <SiTypescript className="Typescript text-blue-600 typescript text-5xl " />
                </div>
                <div className="cm-universe-line">
                  <DiSass className="Sass text-pink-500 text-5xl" />
                  <SiMui className="Mui text-blue-400 mui text-5xl" />
                  <SiFigma className="Figma text-white text-5xl" />
                </div>
                <div className="cm-universe-line">
                  <SiTailwindcss className="Tailwindcss text-cyan-500 text-5xl" />
                  <SiAngular className="Angular text-red-600 text-5xl" />
                  <SiAdobexd className="Adobexd text-pink-500 text-5xl" />
                </div>
                <div className="cm-universe-line">
                  <DiBootstrap className="bootstrap text-purple-500 text-5xl" />
                  <DiGit className="text-orange-500 git text-5xl" />
                  <SiAdobeillustrator className="text-orange-500 Ai text-5xl" />
                </div>
              </div>

            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="cm-experience-section">
        <Container>
          <Grid container columnSpacing={{ xs: 0, md: 4 }} rowSpacing={{ xs: 4, md: 0 }} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={12}>
              <Typography component="h4" variant='body1' className='cm-section-title'>Work Experience</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Card className="cm-experirece-box">
                <Box sx={{ display: "flex", alignItems: "center", width: '100%' }}>
                  {/* Icon */}
                  <Box sx={{ width: "121px", height: "auto", position: 'absolute', top: '0', right: '0', opacity: '0.8', }}>
                    <img src={intership} alt="firstline" />
                  </Box>

                  {/* Text Content */}
                  <Box>
                    <Typography variant="h5" sx={{
                      fontWeight: "500",   color: "var(--bg-white)",  fontFamily: 'Plus Jakarta Sans',  
                    }}>
                      UI/UX Designer Internship
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "500",color: "var(--purple-300)", margin: "10px 0",
                      fontSize: " 1.25rem",                      
                      fontFamily: 'Plus Jakarta Sans' }}>
                     Trained under [Ketan bamniya] (Designer)
                    </Typography>
                    <Typography variant="body2" component='span' className='cm-experirece-content'>
                      During my internship, I gained hands-on experience in UI/UX design by learning and applying HTML, CSS, and Bootstrap to convert mockups into responsive web pages. 
                    </Typography>
                    <Button
                      variant="outlined"
                      className="custom-btn  btn-1"
                      onClick={() => navigate("/experience-details")}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
                <Chip label="January 2021 - March 2022" />
               
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card className="cm-experirece-box">
                <Box sx={{ display: "flex", alignItems: "center", width: '100%' }}>
                  {/* Icon */}
                  <Box sx={{ width: "121px", height: "auto", position: 'absolute', top: '0', right: '0', opacity: '0.8', }}>
                    <img src={Company} alt="firstline" />
                  </Box>

           
                  <Box>
                    <Typography variant="h5" sx={{
                      fontWeight: "500",   color: "var(--bg-white)",  fontFamily: 'Plus Jakarta Sans',  
                    }}>
                      UI/UX Designer 
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "500",color: "var(--purple-300)", margin: "10px 0",
                      fontSize: " 1.25rem",                      
                      fontFamily: 'Plus Jakarta Sans' }}>
                      Triveni global software services
                    </Typography>
                    <Typography variant="body2" component='span' className='cm-experirece-content'>
                        During my experience in User Interface Design, I collaborated closely with development teams to create visually appealing and user-friendly interfaces using Figma, ensuring adherence to design best practices and brand guidelines. I developed high-fidelity mockups, prototypes, and design systems to streamline the design process and maintain consistency across the Angular application. Working alongside Angular developers, I helped translate design concepts into fully functional user interfaces by providing detailed design specifications, assets, and guidance for accurate implementation. Additionally, I successfully refactored legacy code, leading to [describe benefit, e.g., reduced codebase complexity, improved maintainability], enhancing overall efficiency and usability.
                    </Typography>
                    <Button
                      variant="outlined"
                      className="custom-btn  btn-1"
                      onClick={() => navigate("/Experience-details-company")}
                    >
                      Learn More
                    </Button>
                    
                  </Box>
                </Box>
                <Chip label="March 2022 - Present" />
                   
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutComponent;
