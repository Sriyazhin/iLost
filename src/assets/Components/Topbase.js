import React, { useEffect, useState } from 'react';
import {Dialog} from '@mui/material';
import Loginorregister from './Loginorregister';
import orimage from '../Images/orimage.png';
import linksymbol from '../Images/linksymbol.png';
import xcircle from '../Images/xcircle.png';
import Topcurve from '../Images/Topcurve.png';
import ilostlogo from '../Images/iLostlogo.png';
import addressman from '../Images/AddressMan.png';
import { Button } from '@mui/base';
import Backgroundbase from './Backgroundbase';


const Topbase = ({loginbutton,handleloginbutton}) => {

    
    const[buttonactive,setButtonactive]=useState(true);
    
    

    
    const handlesearchbutton =()=>{
        setButtonactive(!buttonactive);
    };
    
    const handlereportbutton=()=>{
        setButtonactive(!buttonactive);
    }
    

    

  return (
    <div className='logologinandsearch'>
                {/* <div className='topcurveimage'>
                    <img src={Topcurve} height='690px' width='1519px' alt='topcurve' />
                </div>
            
                <div className='logologin'>
                    <div className='ilostlogo'><img className='ilostlogoimage' alt='ilostlogo' src={ilostlogo} /></div>
                </div> */}

                <Backgroundbase />

                <div className='logindialogbox'>
                    {
                        {loginbutton} ? 
                        <Dialog open={loginbutton} style={{ marginLeft: '48%', marginTop:'5%', backgroundColor: 'transparent'}} PaperProps={{style:{height:'500px', width:'540px',display:'flex', alignItems:'center', justifyContent:'center'}}} className='logindialogboxactive'>
                            <Loginorregister orimage={orimage} linksymbol={linksymbol} handleloginbutton={handleloginbutton} xcircle={xcircle} ></Loginorregister>
                        </Dialog>
                        :
                        null
                    }
                </div>

                <div className='addressman'><img className='addressmanimage' src={addressman} alt='addressman' height='450px'></img></div>

                <div className='searchreportbox'>
                    <div className='searchreport'>
                        <Button onClick={handlesearchbutton} className='searchreportbutton' style={{backgroundColor: buttonactive? '#266867':'white',color:buttonactive? 'white':'black'}}>Search lost item</Button>
                        <Button onClick={handlereportbutton} className='searchreportbutton' style={{backgroundColor: buttonactive? 'white':'#266867',color:buttonactive? 'black':'white'}}>Report found item</Button>
                    </div>
                    {  
                        buttonactive ? 
                        <div className='optionbox'>
                            <input className='searchinputbox' type='text' placeholder='Search...'/>
                            <Button className='searchbox'>Search</Button>
                        </div>
                        :
                        <div className='optionbox'>
                            <input className='searchinputbox' type='text' placeholder='Report...'/>
                            <Button className='searchbox'>Report</Button>
                        </div>
                    
                    }
                </div>
        </div>
  )
}

export default Topbase;