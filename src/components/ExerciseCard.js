import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Stack, Typography} from '@mui/material'

const ExerciseCard = ({exercise}) => {


  return (
    <Link to={`/exercise/${exercise.id}`} className='exercise-card'>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <Stack direction='row' >
            <Button sx={{ml: '21px', color:'#fff', background:'#ff735c', fontSize:'14px', borderRadius:'20px', textTransform:'uppercase', fontWeight:'bold'}}>
                {exercise.bodyPart}
            </Button> 

            <Button sx={{ml: '21px', color:'#fff', background:'#ff735c', fontSize:'14px', borderRadius:'20px', textTransform:'uppercase', fontWeight:'bold'}}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography ml='21px' color='#ffff' fontWeight='normal' mt='11px' mb='10px' textTransform='capitalize' fontSize='20px'>
                {exercise.name}

            </Typography>

    </Link>
  )
}

export default ExerciseCard