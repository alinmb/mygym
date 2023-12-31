import React, { useState} from 'react'
import { Box, Typography } from '@mui/material'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  return (
    <Box>
      <HeroBanner />
      <Typography fontWeight={700}sx={{fontSize: {lg: '30px', xs:'30px'}}} mt='50px' textAlign='center' textTransform='upperCase' color='#1a2e35'>
        Cibler une zone du corps :
      </Typography>
      {<SearchExercises 
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}/>}

      <Exercises 
      exercises={exercises}
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      />
    </Box>
  ) 
}

export default Home