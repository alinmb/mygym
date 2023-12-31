import React from 'react'
import {Stack, Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png'


const BodyPart = ({item, setBodyPart, bodyPart}) => {

  const translate = () => {
    if (item == 'all') {
      return 'Tous'
    } else if ( item === 'back') {
      return 'Dos'
    } else if ( item === 'cardio') {
      return 'Cardio'
    } else if ( item === 'chest') {
      return 'Pecs'
    } else if ( item === 'lower arms') {
      return 'Avant bras'
    } else if ( item === 'lower legs') {
      return 'Mollets'
    } else if ( item === 'neck') {
      return 'Cou'
    } else if ( item === 'shoulders') {
      return 'épaules'
    } else if ( item === 'upper arms') {
      return 'Bras' 
    } else if ( item === 'upper legs') {
      return 'jambes'
    } else if ( item === 'waist') {
      return 'Abdos'
    }   
  }
  return (
    <Stack
        type='button'
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{
            borderTop: bodyPart === item ? '4px solid #ff2625' : ' ',
            backgroundColor:'#1a2e35',
            borderRadius:'20px',
            width:'270px',
            height:'270px',
            cursor:'pointer',
            gap:'47px',
            boxShadow: '5px 14px 10px rgba(0,0,0,0.25)'
        }}
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({top:1700, left:100, behavior:'smooth'})
        }}
        >
        {/*<img src={Icon} alt='dumbell' style={{width:'40px', height:'40px'}}/>*/}

        <Typography fontSize='24px' fontWeight='bold' color='#ffff' textTransform='uppercase' >{translate(item)}</Typography>
    </Stack>
  )
}

export default BodyPart