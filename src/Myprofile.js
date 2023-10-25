import React, { useEffect, useState } from 'react';
import Topcurve from './assets/Images/Topcurve.png';
import ilostlogo from './assets/Images/iLostlogo.png';
import './Myprofile.css';
import { Button } from '@mui/base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Footercomponent from './assets/Components/Footercomponent';
import copyrightsimage from './assets/Images/copyrights.png';
import Profiledropdown from './assets/Components/Profiledropdown';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Myprofile = () => {

    const[editbutton,Seteditbutton] = useState(false);
    const [currentusers,setCurrentusers] = useState([]);
    const [id,setId]=useState('');
    console.log(id,'id');
    const [users,setUsers]=useState(
        {
            id:'',
            username: '',
            mobilenumber: '',
            email:'',
            password:''
        }
    )


    useEffect(()=>{
        getdatafromapi()
      },[])

    const getdatafromapi = () =>{
        axios.get('https://64dc7b7ce64a8525a0f68ee2.mockapi.io/newfields')
        .then(res=>setUsers({...users,id:res.data.id,username:res.data.name,email:res.data.email,mobilenumber:res.data.mobilenumber,password:res.data.password}))
        .catch(err=>console.log(err));
    }

    const handleeditbutton = () =>{
        Seteditbutton(!editbutton);
        // axios.put(`https://64dc7b7ce64a8525a0f68ee2.mockapi.io/newfields`+id,users)
        // .then(res=>setExistingusers(res.data));
    }

    const handlename = () =>{
  
    }

  return (
    <div>
    <div className='myprofileparentdiv'>
                <div className='topcurveimage'>
                    <img src={Topcurve} height='690px' width='1519px' alt='topcurve' />
                </div>
            
                <div className='logologin'>
                    <div className='ilostlogo'><img className='ilostlogoimage' alt='ilostlogo' src={ilostlogo} /></div>
                </div>

                <Profiledropdown currentuser={localStorage.getItem("currentuser")} />

                <div className='myprofileandeditbutton'>
                    <div className='myprofiletitle'>My Profile</div>
                    {editbutton?null:<div ><Button className='editbutton' onClick={handleeditbutton}>Edit <FontAwesomeIcon icon={faPenToSquare} /></Button> </div>}
                </div>

                <div className='userdetails'>

                    <div className='formtopbox'>
                    <div className='fieldsforinput'>
                    <label>Name</label>
                    <input type='text' value={users.username} onChange={handlename} placeholder='Enter your Name' />
                    <div className='subtitleforfields'>Your Name</div>
                    </div>
                    
                    

                    <div className='fieldsforinput'>
                    <label>Mobile Number</label>
                    <input type="tel" value={users.mobilenumber} placeholder='Enter your Number' />
                    <div className='subtitleforfields'>Your Mobile Number</div>
                    </div>

                    <div className='fieldsforinput'>
                    <label>Mail ID</label>
                    <input type='email' value={users.email} disabled={!editbutton} className={`${editbutton?null:'disablefield'}`} placeholder='abc@xyz.com' />
                    <div className='subtitleforfields'>Your Mail ID</div>
                    </div>
                    </div>

                    <div>
                        <div className='changepassword'>
                        Change Password
                        </div>
                    <div className='fieldsforinput'>
                    <label>Enter Current password</label>
                    <input type="password" disabled={!editbutton} className={`${editbutton?null:'disablefield'}`} placeholder='Enter your current password' />
                    </div>

                    <div className='fieldsforinput'>
                    <label>Enter New password</label>
                    <input type='text' disabled={!editbutton} className={`${editbutton?null:'disablefield'}`} placeholder='New password' />
                    </div>

                    <div className='fieldsforinput'>
                    <label>Re - Enter New password</label>
                    <input type="password" disabled={!editbutton} className={`${editbutton?null:'disablefield'}`} placeholder='New password' />
                    </div>
                    </div>

                </div>

                {editbutton?
                <div className='cancelandsave'>
                    <div><Button onClick={handleeditbutton} className='cancelbutton'>Cancel</Button></div>
                    <div><Button onClick={handleeditbutton} className='savebutton'>Save Changes</Button></div>
                </div>
                :
                null}

                
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

export default Myprofile