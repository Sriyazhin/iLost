import React, { useEffect, useState } from 'react';
import Topbase from './assets/Components/Topbase';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Imageflow from './assets/Components/Imageflow';
import Ourbrands from './assets/Components/Ourbrands';

import './profilehome.css';
import Faqcomponent from './assets/Components/Faqcomponent';
import Footercomponent from './assets/Components/Footercomponent';
import copyrightsimage from './assets/Images/copyrights.png';
import Profiledropdown from './assets/Components/Profiledropdown';
import axios from 'axios';

const Profilehome = () => {

  const [currusers,setCurrusers] = useState([]);

  console.log(currusers.name,'sum');

  const currentuser = useParams();
localStorage.setItem("currentuserid",currentuser.id);

    useEffect(()=>{
        axios.get(`https://64dc7b7ce64a8525a0f68ee2.mockapi.io/newfields/${currentuser.id}`)
        .then((res)=>setCurrusers(res.data))
        .catch(err=>console.log(err));
    },[]);



  // localStorage.setItem('username',currentuser.name);
  // localStorage.setItem('isAuth',authenticated);

  // let newSize = parseInt(400/currentuser.length);
  // let nnn = newSize+1000;
  // loginregister={`Hi ${currentuser.name}!`}
  // style={{ width: newSize+'px'}}
  // style={{fontSize: newSize+'px'}}

  // const [authenticated,setAuthenticated] = useState(true);
  //   localStorage.setItem('isAuth',authenticated);


  const questions = [{questions:'Are your courses beginner friendly?',answers:'answer1'},
    {questions:'How long are your courses?',answers:'answer2'},
    {questions:'Do I get a certificate?',answers:'answer3'},
    {questions:'Do I get in-person help from teachers?',answers:'answer4'},
    {questions:'I have more questions. Who do I reach out to?',answers:'answer5'}];

    // const handlemyprofile = () =>{
    //   navigate('/myprofile');
    // }

  return (
    <div className='entirediv'>
        <div className='topbase'>
            <Topbase />
            <Profiledropdown currentuser={currusers.name} handlemyprofile='./myprofile' />
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

export default Profilehome