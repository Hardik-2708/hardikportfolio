import { Box, Typography, Button, Container, Paper, Grid, Tooltip, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiSass, DiBootstrap, DiJavascript1, DiGit } from "react-icons/di";
import { SiTypescript, SiAngular, SiMui, SiFigma, SiAdobexd, SiTailwindcss, SiAdobeillustrator } from "react-icons/si";

function ExperienceDetails() {
    const navigate = useNavigate();
 const skills = [
    { name: "HTML", icon: <AiFillHtml5 className="text-red-500 text-5xl" /> },
    { name: "CSS", icon: <DiCss3 className="text-blue-500 text-5xl" /> },
    { name: "SCSS", icon: <DiSass className="text-pink-500 text-5xl" /> },     
    { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500 text-5xl" /> },                
    { name: "GIT", icon: <DiGit className="text-orange-500 text-5xl" /> },
    { name: "Figma", icon: <SiFigma className="text-white text-5xl" /> },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-500 text-5xl" /> },
    { name: "Adobe XD", icon: <SiAdobexd className="text-pink-500 text-5xl" /> },
  ];
    return (
        <Container maxWidth="md"  sx={{ mt: 4 }}  className="cm-skills-section">

            <div className="flex items-center justify-between cm-experiance-title">
                <Button variant="contained" className="custom-btn  btn-1" sx={{
                    backgroundColor: 'var(--purple-900) !important',
                }} onClick={() => navigate("/home")} startIcon={<ArrowBackIcon />}>
                    Go Back
                </Button>
                <Typography variant="h4" fontWeight="bold" sx={{ color: "var(--purple-500)", fontFamily: "Preahvihear , serif !important"}}>
                    UI/UX Designer Internship
                </Typography>
            </div>


            <Typography variant="subtitle1" sx={{ fontWeight: "400", color: "var(--purple-400)", mb: 4, mt: 4 }}>
            Trained under [Ketan Kumar bamniya] (Freelance Designer) <br/>  Duration: January 2021 - March 2022
            </Typography>

            <Typography variant="body1" paragraph>
              During my internship, I gained hands-on experience in UI/UX design by learning and applying HTML, CSS, and Bootstrap to convert mockups into responsive web pages. I designed wireframes and mockups using Adobe XD and Photoshop, ensuring visually appealing and user-friendly interfaces. Additionally, I worked on converting JPG designs into HTML, focusing on proper structuring and styling for a seamless user experience.
            </Typography>
            <Typography variant="body1" paragraph  className="mt-8">
             This experience strengthened my understanding of UI/UX principles, including layout, typography, and color theory. I also contributed to refining designs based on feedback and usability improvements, enhancing my ability to create functional and aesthetically pleasing interfaces.
            </Typography>
            <Grid container spacing={2} className="cm-skills-wrapper">
                {skills.map((skill, index) => (
                    <Grid item xs={6} sm={4} md={3} lg={1.5} key={index} textAlign="center" sx={{ textAlign: '-webkit-center' }}>
                        <Tooltip title={skill.name}>
                            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl flex flex-col items-center">
                                {skill.icon}
                            </Card>
                        </Tooltip>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ExperienceDetails;
