import React from 'react';
import './Mylistings.css';
import Topcurve from './assets/Images/Topcurve.png';
import ilostlogo from './assets/Images/iLostlogo.png';
import Profiledropdown from './assets/Components/Profiledropdown';

const Mylistings = () => {
  return (
    <div>
        <div className='mylistingsdiv'>
                <div className='topcurveimage'>
                    <img src={Topcurve} height='690px' width='1519px' alt='topcurve' />
                </div>
            
                <div className='logologin'>
                    <div className='ilostlogo'><img className='ilostlogoimage' alt='ilostlogo' src={ilostlogo} /></div>
                </div>

                <div>
                    <Profiledropdown currentuser={localStorage.getItem("currentuser")} />
                </div>

                <div className='mylistings'>
                My listings
                </div>
        </div>
    </div>
  )
}

export default Mylistings