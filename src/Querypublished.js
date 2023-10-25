import React, { useEffect, useState } from 'react';
import Topcurve from './assets/Images/Topcurve.png';
import ilostlogo from './assets/Images/iLostlogo.png';
import Profiledropdown from './assets/Components/Profiledropdown';
import './Querypublished.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import keys from './assets/Images/keys.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap,faCalendar,faClock,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@mui/base';
import Footercomponent from './assets/Components/Footercomponent';
import copyrightsimage from './assets/Images/copyrights.png';

const Querypublished = () => {
    const newid = useParams();
    const[newproduct,setNewproduct]=useState([]);
    console.log(newproduct,'newproduct');
    useEffect(()=>{
        axios.get(`https://64dc7b7ce64a8525a0f68ee2.mockapi.io/Venu/${newid.id}`)
        .then(res=>setNewproduct(res.data))
    },[])
  return (
    <div>
        <div className='querypublisheddiv'>
                <div className='topcurveimage'>
                    <img src={Topcurve} height='690px' width='1519px' alt='topcurve' />
                </div>
            
                <div className='logologin'>
                    <div className='ilostlogo'><img className='ilostlogoimage' alt='ilostlogo' src={ilostlogo} /></div>
                </div>

                <div>
                    <Profiledropdown currentuser={localStorage.getItem("currentuser")} />
                </div>

                <div className='querypublished'>
                    <div className='querypublishedtitle'>Your query has been published!</div>
                </div>
                <div className='pdetail'>
                    <div><img src={keys} alt='keys' className='productimage'></img></div>
                    <div className='details'>
                                            <div className='subcard'>
                                            <div className='productname' >{newproduct.itemname}</div>
                                            <div className='locationanddetail'>
                                                <div className='productlocation'><FontAwesomeIcon icon={faMap} style={{color: "#00b8b8",margin:'3px'}} />  <div className='locationname'>{newproduct.location}</div></div>
                                                <div className='productdate'><FontAwesomeIcon icon={faCalendar} style={{color: "#00b8b8",margin:'3px'}} /> {newproduct.date}</div>
                                                <div className='producttime'> <FontAwesomeIcon icon={faClock} style={{color: "#00b8b8",margin:'3px'}} /> {newproduct.time}</div>
                                            </div>
                                            <div className='contactandeditcontent'>
                                                <div ><Button className='editcontent'>Edit Content</Button></div>
                                                <div ><Button className='contactbttn'>Contact Us</Button></div>
                                            </div>
                                            </div>
                                        </div>
                    
                </div>

        </div>
        <div className='countryandlinks'>
                    <Footercomponent />
                </div>

                <div className='copyrightspart'>
                <img  src={copyrightsimage} alt='copyrights' height='23px' />
                </div>
    </div>
  )
}

export default Querypublished