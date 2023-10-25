import React, { useEffect } from 'react';
import dropdownsymbol from '../Images/profiledropdown.png';
import profilesymbol from '../Images/profilenamesymbol.png';
import { Link, useNavigate } from 'react-router-dom';

const Profiledropdown = ({currentuser}) => {
  const navigate = useNavigate();
  console.log(currentuser,'currentuser')
  localStorage.setItem("currentuser",currentuser);

  const handlemyprofile = () => {
    navigate('/myprofile');
  }

  useEffect(()=>{
    let authenticated = localStorage.getItem("isAuth");
    console.log(authenticated,'authenticated')
    if(authenticated==='false'){
        navigate('/');
        
    }
  },[localStorage.getItem("isAuth")]);

  const handlesignout = () =>{
    localStorage.setItem('isAuth','false');
  }

  console.log(handlemyprofile,'handlemyprofile');
  return (
    <div className="profiledropdown" >

                  <div className='profilename' ><img src={profilesymbol} alt='profilesymbol' height='14px' className='profilesymbol' /> <div className='currentusername'> Hi, {currentuser}! </div> <img src={dropdownsymbol} alt='dropdownsymbol' className='dropdownsymbolimage' /> </div>
              
                  <div className="profiledropdown-content">
                      <div><Link to='/mylistings' className='itemfirst'>My listing</Link></div>
                      <div><Link to='/myprofile' className='itemone'>My Profile</Link></div>
                      <div><Link className='itemone'>Need Help?</Link></div>
                      <div><Link className='itemlast' onClick={handlesignout}>Sign Out</Link></div>
                  </div>

            </div>
  )
}

export default Profiledropdown