import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo3.png'

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" alignItems='center' sx={{gap:{sm: '122px', xs:'20px'}, mt:{sm: '32px', xs:'20px'}, justifyContent:'none' }} px='20px'>

      <Link to='/'>
        <img src={Logo} alt='Logo' style={{width:'120px', height:'120px', margin:'0 10px'}}/>
      </Link>

      <Stack 
      direction='row'
      gap="40px"
      fontSize="18px"
      alignItems="center"
      >

        <Link to='/' style={{textDecoration:'none', color:'white', background: '#1a2e35', padding:'2px 10px', borderRadius:'10px'}}>Accueil</Link>
          <a href='#exercises' style={{textDecoration: 'none', color:'#0d1215'}}>Exercices</a>
        

      </Stack>

    </Stack>

  )
}

export default Navbar