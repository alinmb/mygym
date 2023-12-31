import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner2.png'


const HeroBanner = () => (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '20px' } }} position="relative" p="20px" mb='200px'>
      <Typography color="#ff735c" fontWeight="600" fontSize="60px" fontFamily='Bebas Neue'>BIENVENUE SUR SCULPT</Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '30px', xs: '26px' } }} mb="23px" mt="5px">
        L'ULTIME GUIDE DU FITNESS
      </Typography>
      <Typography fontSize="20px" fontFamily="Alegreya" lineHeight="35px">
        Vous débutez dans le monde du Fitness ?<br/>
        Découvrez les exercices les plus efficaces qui existent.<br/>
        Découvrez les exercices les plus efficaces qui existent.<br/>
                
      </Typography>
      <Stack>
        <a href="#exercises" style={{ marginTop: '30px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#1a2e35', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '10px' }}>DÉCOUVRIR</a>
      </Stack>
      {/*<Typography fontWeight={600} color="#b41b99" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }} mt='100px'>
        FITNESS
      </Typography>*/}
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );

export default HeroBanner