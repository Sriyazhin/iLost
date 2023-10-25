
import { Button } from '@mui/base'
import React, { useState } from 'react'

const Loginbutton = ({handleloginbutton}) => {
    
    // localStorage.setItem('loginbutton',loginbutton);

    
    // localStorage.setItem('handleloginbutton',handleloginbutton);
    
  return (
        <div className='loginregisterbox'><Button onClick={handleloginbutton} className='loginword'>Login / Register</Button></div>
  )
}

export default Loginbutton