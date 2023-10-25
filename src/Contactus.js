import React, { useEffect, useState } from 'react';
import Profiledropdown from './assets/Components/Profiledropdown';
import Loginbutton from './assets/Components/Loginbutton';
import './Contactus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import contactus from './assets/Images/contactus.png';
import Contactusform from './assets/Components/Contactusform';
import Topcurve from './assets/Images/Topcurve.png';
import ilostlogo from './assets/Images/iLostlogo.png';
import Footercomponent from './assets/Components/Footercomponent';
import copyrightsimage from './assets/Images/copyrights.png';



const Contactus = () => {
let auth;
    // useEffect(()=>{
        auth = localStorage.getItem('isAuth');
    // },[auth])
    
    // const navigate = useNavigate();
    
    console.log(auth,'auths');

    // const handlesignout = () =>{
    //     localStorage.setItem('isAuth','false');
    //     navigate('/contactus');
    //   }

    //   const [loginbutton,setLoginbutton]=useState(false);

    // const handleloginbutton = () =>{
    //     setLoginbutton(!loginbutton);
    // }
    // currentuser={localStorage.getItem('username')} handlesignout={handlesignout}
    // handleloginbutton={handleloginbutton}
  return (
    <div>
    <div className='contactusparentdiv'>
                <div className='topcurveimage'>
                    <img src={Topcurve} height='690px' width='1519px' alt='topcurve' />
                </div>
            
                <div className='logologin'>
                    <div className='ilostlogo'><img className='ilostlogoimage' alt='ilostlogo' src={ilostlogo} /></div>
                </div>
        {
            auth?
            <Profiledropdown currentuser={localStorage.getItem("currentuser")} />
            :
            <Loginbutton  />
        }

        <div className='contactus'>Contact Us</div>

        <div className='contactdetails'>
            <div className='feelfree'>Feel free to get in touch with us</div>
            <div className='callandemail'>
                <div className='callbox'>
                    <div className='fontandcall'>
                        <div className='callfont'><FontAwesomeIcon icon={faPhone} style={{color: "#00b8b8",height:'23.95px',width:'23.95px'}} /></div>
                        <div className='callus'>Call Us</div>
                    </div>
                    <div className='mobilenumber'>+12345657890</div>
                </div>
                <div className='emailbox'>
                    <div className='fontandcall'>
                        <div className='mailfont'><FontAwesomeIcon icon={faEnvelope} style={{color: "#00b8b8",height:'21.33px',width:'26.67px'}} /></div>
                        <div className='emailus'>Email Us</div>
                    </div>
                    <div className='emailid'>info@ilost.com</div>
                </div>
            </div>
        </div>

        <div className='imageandform'>
            <div><img src={contactus} alt='contactus' className='contactusimage'/></div>
            <div className='getintouchandform'>
                <div className='getintouch'>Get in Touch</div>
                <div className='input'>
                    <Contactusform />
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

export default Contactus