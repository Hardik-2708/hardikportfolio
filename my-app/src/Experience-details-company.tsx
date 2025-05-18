import { Box, Typography, Button, Container, Paper, Grid, Tooltip, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CardContent } from "@mui/material";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiSass, DiBootstrap, DiJavascript1, DiGit } from "react-icons/di";
import { SiTypescript, SiAngular, SiMui, SiFigma, SiAdobexd, SiTailwindcss, SiAdobeillustrator } from "react-icons/si";

function ExperienceDetails() {
    const navigate = useNavigate();
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
    return (
        <Container maxWidth="md" sx={{ mt: 4 }} className="cm-skills-section cm-experiance-details">

            <div className="flex items-center justify-between flex-wrap  cm-experiance-title ">
                <Button variant="contained" className="custom-btn  btn-1" sx={{
                    backgroundColor: 'var(--purple-900) !important',
                }} onClick={() => navigate("/home")} startIcon={<ArrowBackIcon />}>
                    Go Back
                </Button>
                <Typography variant="h4" fontWeight="500" sx={{ color: "var(--purple-500)", fontFamily: "Preahvihear , serif !important" }}>
                    UI/UX Designer
                </Typography>
            </div>
            <Typography variant="h3" sx={{ fontWeight: "500",  mb: 4, mt: 4 }}>
                Triveni global software services
            </Typography>
            <Container maxWidth="md" sx={{ mt: 4, mb:4 }}>                 
                <Typography variant="h4" gutterBottom>
                    Professional Experience
                </Typography>
                <Card>
                    <CardContent>
                        <Typography variant="body1">
                              While at Triveni Global Software Services, I played a key role in user interface design, collaborating closely with development teams to create visually appealing and user-friendly interfaces using Figma. My work focused on ensuring design consistency, usability, and maintainability across React (MUI, Fuse Theme) and Angular (Angular Material) applications.
                        </Typography>
                    </CardContent>
                </Card>

                 
                <Typography variant="h4" gutterBottom>
                  Key Responsibilities
                </Typography>

                <Card>
                    <CardContent>
                        <Typography variant="h6">User Interface (UI) Design:</Typography>
                        <Typography variant="body1">
                            - Designed visually appealing and user-friendly interfaces using Figma.<br />
                            - Developed high-fidelity mockups, prototypes, and design systems.<br />
                            - Provided design specifications and assets for Angular applications.<br />
                            - Successfully refactored legacy code for better maintainability.
                        </Typography>
                    </CardContent>
                </Card>

               
                <Typography variant="h4" gutterBottom>
                    Experience with React, MUI, and Fuse Theme
                </Typography>

                <Card>
                    <CardContent>
                        <Typography variant="body1">
                            - Designed custom MUI components and utilized the MUI theme system.<br />
                            - Customized the Fuse theme to align with brand guidelines and project requirements.<br />
                            - Implemented responsive design strategies using MUI’s Grid system.<br />
                            - Developed comprehensive design documentation to streamline development processes.
                        </Typography>
                    </CardContent>
                </Card>
                <Typography variant="h4" gutterBottom>
                     Experience with Angular Material & AG Grid:
                </Typography>

                <Card>
                    <CardContent>
                        <Typography variant="body1">
                            - Created a unified design system that worked across both Angular Material and MUI.<br />
                            - Designed custom AG Grid themes to match Material UI standards.
                            - Enhanced accessibility and usability by optimizing AG Grid configurations.
                        </Typography>
                    </CardContent>
                </Card>
               
                <Typography variant="h4" gutterBottom>
                    Cross-Functional Team Collaboration:
                </Typography>

                <Card>
                    <CardContent>
                        <Typography variant="body1">
                            - Participated in Agile/Scrum meetings.<br />
                            - Coordinated with project managers, developers, and stakeholders.
                        </Typography>
                    </CardContent>
                </Card>
 
                <Typography variant="h4" gutterBottom>
                    Responsive Design
                </Typography>

                <Card>
                    <CardContent>
                        <Typography variant="body1">
                            - Implemented responsive design techniques.<br />
                            - Conducted design testing for better UX across different devices.
                        </Typography>
                    </CardContent>
                </Card>
                <Typography variant="h4" gutterBottom>
                  Challenges & Solutions
                </Typography>

                <Card>
                    <CardContent>
                        <Typography variant="body1">
                        Maintaining Design Consistency Across Angular and React
                          -  Challenge: Since the project was developed using both Angular Material and MUI (Material-UI), ensuring a uniform design across both frameworks was crucial.
                        Solution:
                           - Established a design system in Figma, defining typography, spacing, and component behavior.
                           - Created a shared UI component library to maintain consistency across Angular and React.
                           - Standardized design tokens and themes to reduce UI discrepancies.
                        </Typography>
                    </CardContent>
                </Card>
                 <Typography variant="h4" gutterBottom>
                 Ensuring Code Consistency Across Teams
                </Typography>
                    <Card>
                        <CardContent>
                            <Typography variant="body1">
                            Challenge: Multiple teams worked on different modules, leading to inconsistent UI implementation.
                            
                            - Developed UI Component Documentation for standard usage guidelines.
                            - Implemented code consistency practices to maintain uniform styling.
                            - Regular design reviews to ensure UI adherence across teams..
                            </Typography>
                        </CardContent>
                    </Card>
                    <Typography variant="h4" gutterBottom>
                     Impact & Results
                    </Typography>
                    <Card>
                        <CardContent>
                            <Typography variant="body1">
                            Improved UI/UX Consistency: Standardized design across Angular and React, enhancing usability.                            
                            - Faster Development: Shared design system reduced UI development time.
                            - Implemented code consistency practices to maintain uniform styling.
                            - Code Maintainability: Standardized guidelines helped developers maintain and extend the UI easily.                            
                            </Typography>
                        </CardContent>
                    </Card>
            </Container>
            <Grid container spacing={3} className="cm-skills-wrapper" justifyContent="center">
                {skills.map((skill, index) => (
                    <Grid item xs={6} sm={4} md={3} lg={1.5} key={index}  textAlign="center" sx={{ textAlign: '-webkit-center' }}>
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
