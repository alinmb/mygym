import React, {useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material'

import {exerciseOptions, fetchData} from '../utils/fetchData'

import ExerciseCard from './ExerciseCard'


const Exercises = ({exercises, setExercises, bodyPart}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);


  const paginate = (e, value) => {
    setCurrentPage(value)

    window.scrollTo({top:1800, behavior:'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exercisesData);
    }
    fetchExercisesData();
    
  }, [bodyPart])

  const translate = () => {
    if (bodyPart == 'all') {
      return ' '
    } else if ( bodyPart === 'back') {
      return 'Dos'
    } else if ( bodyPart === 'cardio') {
      return 'Cardio'
    } else if ( bodyPart === 'chest') {
      return 'Pecs'
    } else if ( bodyPart === 'lower arms') {
      return 'Avant bras'
    } else if ( bodyPart === 'lower legs') {
      return 'Mollets'
    } else if ( bodyPart === 'neck') {
      return 'Cou'
    } else if ( bodyPart === 'shoulders') {
      return 'épaules'
    } else if ( bodyPart === 'upper arms') {
      return 'Bras'
    } else if ( bodyPart === 'upper legs') {
      return 'jambes'
    } else if ( bodyPart === 'waist') {
      return 'Abdos'
    }   
  }


  return (
    <Box id='exercises'
    sx={{mt: {lg:'110px'}}}
    mt='50px'
    p='20px'
    >

<Typography fontWeight={700}sx={{fontSize: {lg: '35px', xs:'30px'}}} mt='30px' mb='100px' textAlign='center' textTransform='upperCase' color='#1a2e35' >
        Votre séléction : {translate(bodyPart)}
      </Typography>
      <Stack direction='row' sx={{gap: {lg:'110px', xs:'50px'}}}
      flexWrap='wrap' justifyContent='center'>

        {currentExercises.map((exercise, index) => ( 
        <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
          {exercises.length > 9 && (
            <Pagination 
            color='standard'
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'

            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises