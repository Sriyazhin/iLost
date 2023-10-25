import React, { useEffect, useState } from 'react';
import './App.css';
import copyrightsimage from './assets/Images/copyrights.png';
import Topbase from './assets/Components/Topbase';
import Faqcomponent from './assets/Components/Faqcomponent';
import Ourbrands from './assets/Components/Ourbrands';
import Footercomponent from './assets/Components/Footercomponent';
import Imageflow from './assets/Components/Imageflow';
import dropdownsymbol from './assets/Images/dropdownsymbol.png';
import Dropdowncomponent from './assets/Components/Dropdowncomponent';
import { Button } from '@mui/base';
import Loginbutton from './assets/Components/Loginbutton';
import axios from 'axios';


const Homepage = () => {

    const [storedusers,setStoredusers] = useState([]);

    useEffect(()=>{
        getdatafromapi();
    },[])
    const getdatafromapi = () =>{
        axios.get('https://64dc7b7ce64a8525a0f68ee2.mockapi.io/newfields')
        .then(res=>setStoredusers(res.data));
    }

    const [loginbutton,setLoginbutton]=useState(false);

    const handleloginbutton = () =>{
        setLoginbutton(!loginbutton);
    }

    // const loginbutton = localStorage.getItem('loginbutton');
    // const handleloginbutton = localStorage.getItem('handleloginbutton');

    const questions = [{questions:'How can I report a lost item on BT Zapp?',answers:'answer1'},
    {questions:'What should I do if I found an item and want to return it through BT Zapp?',answers:'answer2'},
    {questions:'Does BT Zapp charge any fees for reporting lost or found items?',answers:'answer3'},
    {questions:'What happens if I recover my lost item after reporting it on BT Zapp?',answers:'answer4'},
    {questions:'I have more questions. Who do I reach out to?',answers:'answer5'}];

        
  return (
    <div className='entirediv'>
        
        <div className='loginanddropdown'>
            <Topbase loginbutton={loginbutton} handleloginbutton={handleloginbutton} />
            <Loginbutton handleloginbutton={handleloginbutton} />
            <div className='businessdropdown'>
                <Dropdowncomponent dropdownsymbol={dropdownsymbol} menuitemone='Sign in for business' menuitemtwo='Ilost for your Business' menuitemthree='Need Help?' />
            </div>
        </div>

        <div>
            <Imageflow />
        </div>
        
        <div className='ourbusinesses'> 
            <Ourbrands />
        </div>
        
        <div className='faqs'>
            <Faqcomponent questions={questions} />
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

export default Homepage;