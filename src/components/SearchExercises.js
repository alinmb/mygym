import React, {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import { exerciseOptions, fetchData} from '../utils/fetchData'
import HorizontalScrollBar from '../components/HorizontalScrollBar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('')

  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData =async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts (['all', ...bodyPartsData])
    }

    fetchExercisesData()
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      
      const searchedExercises = exercisesData.filter(
        (exercice) => exercice.name.toLowerCase().includes(search)
        || exercice.target.toLowerCase().includes(search)
        || exercice.equipment.toLowerCase().includes(search)
        || exercice.bodyPart.toLowerCase().includes(search)
    )

    setSearch('')
    setExercises(searchedExercises)
    }
  }



  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px' >
      
      <Box sx={{position: 'relative', width:'100%', p:'20px'}}>
          <HorizontalScrollBar data={bodyParts} bodyPart={bodyParts} setBodyPart={setBodyPart} isBodyParts/>
      </Box> 

      {/*<Typography fontWeight={700}sx={{fontSize: {lg: '44px', xs:'30px'}}} mt='50px' textAlign='center' >
        RECHERCHER DES EXERCICES 
      </Typography>

      <Box position='relative' mt='62px'>
        <TextField 
          sx = {{
            input: {fontWeight: '700', 
            border:'none', 
            borderRadius:'4px' },
            width:{lg:'800px', xs:'350px'},
            backgroundColor: '#fff',
            
          }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Rechercher un exercice'
          type='text'>
        </TextField>

        <Button className='search-btn'
          sx={{
            bgcolor: '#96adf3',
            color:'#fff',
            textTransform:'none',
            width:{lg: '175px', xs:'80px'},
            fontSize:{lg: '20px', xs:'14px'},
            height:'56px',
            position:'absolute',
            right: '0'
          }}
          onClick={handleSearch}>
          Rechercher
        </Button>
      </Box>*/}
      
    </Stack>
  )
}

export default SearchExercises