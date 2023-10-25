import React from 'react';
import Topcurve from '../Images/Topcurve.png';
import ilostlogo from '../Images/iLostlogo.png';

const Backgroundbase = () => {
  return (
    <div className='entirediv'>
                <div className='topcurveimage'>
                    <img src={Topcurve} height='690px' width='1519px' alt='topcurve' />
                </div>
            
                <div className='logologin'>
                    <div className='ilostlogo'><img className='ilostlogoimage' alt='ilostlogo' src={ilostlogo} /></div>
                </div>
    </div>
  )
}

export default Backgroundbase