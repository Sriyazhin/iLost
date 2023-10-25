import { Button, Link, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Loginorregister = ({orimage,linksymbol,handleloginbutton,xcircle}) => {
    const navigate = useNavigate();
    const [emailaddress,setEmailaddress]=useState('');
    const [passwordbox,setPasswordbox]=useState(false);
    const [passwordcontainer,setPasswordcontainer]=useState(null);
    const [resetpasswordcontainer,setResetpasswordcontainer]=useState(null);
    const [enablelogin,setEnablelogin]=useState(false);
    const [errormessage,setErrormessage]=useState(false);
    const [username,setUsername]=useState('');
    const [storedusers,setStoredusers] = useState([]);
    const [checkuser,setCheckuser]=useState(false);
    const [passwordhere,setPasswordhere]=useState('');
    // const [authenticated,setAuthenticated] = useState(false);
    // localStorage.setItem('isAuth',"false");

    console.log(passwordcontainer,'passwordcontainer');
    console.log(resetpasswordcontainer,'passwordcontainer');
    // const userid = storedusers.id;
    

    useEffect(()=>{
        axios.get('https://64dc7b7ce64a8525a0f68ee2.mockapi.io/newfields')
        .then(res=>setStoredusers(res.data));
    },[])

    const handleloginpassword = () =>{
        const emailarray = storedusers.map(em => em.email);

    console.log(emailarray,'emailarray');
        if(validateEmail(emailaddress)){
            setPasswordbox(true);
            setErrormessage(false);
        }
        else{
            setErrormessage(!errormessage);
        }

        console.log(emailaddress,'checkuser')
        if(emailarray.includes(emailaddress)){
            setCheckuser(true);
        }
    }
    let currentname = emailaddress.split('@');  

useEffect(()=>{
    
},[localStorage.getItem("isAuth")]);

    const registerbutton = () =>{

        if(passwordcontainer===resetpasswordcontainer){
            localStorage.setItem("isAuth","true");
            axios.post('https://64dc7b7ce64a8525a0f68ee2.mockapi.io/newfields',{email:emailaddress,password:resetpasswordcontainer})
            .then((response) => {
                const newuserId = response.data.id;
                navigate(`/profilehome/${newuserId}`);
    
            })
            .catch(err=>console.log(err));
            
        }

        else{
            setErrormessage(!errormessage);
        }  
        
    }

    var finduser;
    var currentuserid;

    const loginbutton = () =>{
        // for (const user of storedusers) {
            finduser = storedusers.find((userdet)=>userdet.email===emailaddress&&userdet.password===passwordhere);
            console.log(finduser,'finduser')
        if(finduser){
            localStorage.setItem("isAuth","true");            
        }
        else{
            localStorage.setItem('isAuth',"false");
        }

        if(localStorage.getItem('isAuth')==="true"){
            let n
            storedusers.find((userdet)=>{
                
                if(userdet.email===emailaddress&&userdet.password===passwordhere){
                    n = userdet.id;
                    navigate(`/profilehome/${n}`);
                }
            })
        }
        if(localStorage.getItem('isAuth')==="false"){
            navigate('/');
        }
    // }
    }  


    

    const validateEmail = (email) => {
        // Use a regular expression for basic email validation
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(email);
      };


  return (
    <div className='outerdialogbox'>
        <div className='innerbox'>
                            <div className='loginandcontent'>
                                <div className='logintitle'>Login/Register</div>
                                <div className='logincontent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit onsectetur</div>
                            </div>
                            <div className='phonenumberandbusinesslogin'>
                                

                                {
                                passwordbox?
                                <div>
                                    
                                    
                                        {checkuser?
                                        <div>

                                        <div>
                                                <div className='emailaddresspassword'>Enter Password</div>
                                                    <TextField type='password' variant='filled' value={passwordhere} onChange={(e)=>setPasswordhere(e.target.value)} InputProps={{disableUnderline:true,borderRadius:'5px'}} sx={{width:'440px',height:'48px'}} />
                                        </div>
                                            <div> 
                                                {
                                                    errormessage ?
                                                    <div className='errornote'>Enter a valid password</div>
                                                    :
                                                    null
                                                }
                                            </div>
                                        <div className='registeronsubmit'>
                                        <Button variant='filled' onClick={loginbutton} >LOGIN</Button>
                                        </div>

                                    </div>
                                        
                                    :
                                    <div>
                                            <div>
                                                <div className='emailaddresspassword'>Enter Password</div>
                                                    <TextField type='password' variant='filled' value={passwordcontainer} onChange={(e)=>setPasswordcontainer(e.target.value)} InputProps={{disableUnderline:true,borderRadius:'5px'}} sx={{width:'440px',height:'48px'}} />
                                                <div className='resetpassword'>Re-enter Password</div>
                                                    <TextField type='password' variant='filled' value={resetpasswordcontainer} onChange={(e)=>setResetpasswordcontainer(e.target.value)} InputProps={{disableUnderline:true,borderRadius:'5px'}} sx={{width:'440px',height:'48px'}} />
                                            </div>
                                            <div> 
                                                {
                                                    errormessage ?
                                                    <div className='errornote'>Enter matching password in both the fields</div>
                                                    :
                                                    null
                                                }
                                            </div>
                                        <div className='registeronsubmit'>
                                        <Button variant='filled' onClick={registerbutton} >REGISTER</Button>
                                        </div>
                                    </div>
                                    }
                                </div>
                                :
                                <div>
                                <div className='emailaddresspassword'>Email Address</div>
                                <div className='phonenumberinputbo'>
                                    <TextField type='email' variant='filled' value={emailaddress} onChange={(e)=>setEmailaddress(e.target.value)} InputProps={{disableUnderline:true,borderRadius:'5px'}} sx={{width:'440px',height:'48px'}} ></TextField>
                                </div>

                                {
                                    errormessage ?
                                    <div className='errornote'>Enter a valid email address</div>
                                    :
                                    null
                                }
                                
                                <div className='continueonsubmit'>
                                    <Button sx={{backgroundColor:'#A7A9AC'}} variant='filled' onClick={handleloginpassword} >CONTINUE</Button>
                                </div>
                                <div className='orimage'><img src={orimage} alt='orimage' width='440px' height='17px' /></div>
                                <div className='businesssignin'>
                                    <div className='businessowner'>Are you a business owner?</div>
                                    <div className='loginlinkandimage'>
                                        <div className='linksymbol'><img src={linksymbol} alt='linksymbol' height='20px' width='20px' /></div>
                                        <div><Link to='#' className='businessloginlink'>Sign in for business</Link></div>
                                    </div>
                                </div>
                                </div>
                                
                                }

                                

                                
                            </div>
            </div>
                        <div className='xcircle'><Button onClick={handleloginbutton} className='xcirclebutton'><img src={xcircle} alt='xcircle' height='35px' /></Button></div>
                        <div className=''></div>
                        
    </div>
  )
}

export default Loginorregister