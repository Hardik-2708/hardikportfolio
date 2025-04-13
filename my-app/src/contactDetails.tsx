import { Box, Typography, Button, Stack, Container, Grid } from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContectImg from "./image/contact-img.svg";
const ContactSection: React.FC = () => {
    return (
        <Box className="cm-contect-section-wrapper">
        <Container>
            <Typography component="h4" variant='body1' className='cm-section-title'>Get in touch</Typography>
            <Grid container spacing={0} className="cm-contact-section" sx={{ justifyContent: { lg: 'center' } }}>
                <Grid xs={12} sm={8} md={6} lg={6} xl={6}className="cm-contact-logo">
                    <img src={ContectImg} alt="contact Logo" />
                </Grid>
                <Grid xs={12} sm={8} md={6} lg={6} xl={6} sx={{backgroundColor:'var(--purple-900)' }}>
                    <Box className="" textAlign="center">
                        <Typography variant="h4" mb={4} fontWeight={500}>
                            What’s Next?
                        </Typography>
                        <Typography variant="h5" mb={4}>
                            Feel free to reach out to me if you're looking for a <Typography variant="body1" component="span" className='cm-contact-role'>UI/UX designer</Typography>, have a query, or simply want to connect.
                        </Typography>

                        <Stack spacing={2} alignItems="center" justifyContent="start">

                            <Button className="cm-social-btn" startIcon={<Typography className="sing"><WhatsAppIcon className="socialSvg whatsappSvg" /></Typography>} href="https://wa.me/7096001406">  Let’s Chat on WhatsApp
                            </Button>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <EmailIcon />
                                <Typography variant="body2">Hardik.baraiya27@gmail.com</Typography>
                            </Stack>

                            <Stack direction="row" spacing={1} alignItems="center">
                                <PhoneIcon />
                                <Typography variant="body2">+91-7096001406</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        </Box>
    );
};

export default ContactSection;
