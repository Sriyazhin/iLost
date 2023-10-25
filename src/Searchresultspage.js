import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Topcurve from './assets/Images/Topcurve.png';
import ilostlogo from './assets/Images/iLostlogo.png';
import './Searchresultspage.css';
import { Button } from '@mui/base';
import keys from './assets/Images/keys.jpg'
import Footercomponent from './assets/Components/Footercomponent';
import copyrightsimage from './assets/Images/copyrights.png';
import temp from './assets/Images/temporary.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap,faCalendar,faClock,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Profiledropdown from './assets/Components/Profiledropdown';

const Searchresultspage = () => {
    const [searchkey,setSearchkey]=useState('');
    const [isSearch,setIsSearch]=useState(false);
    const [users,setUsers]=useState([]);
    const [data,setData]=useState([]);
    console.log(searchkey,'sr');
    console.log(data,'data');

    const dummyData = {"itemname":"Keys",
    "category":"Home",
    "description":"edfsefs",
    "keywords":"sdvsf",
    "location":"here",
    "landmark":"near here",
    "name":"John",
    "mobilenumber":923823822,
    "mail":"hkfdbkj@fjs.com",
    "date":"today",
    "time":"now"}

    // axios.post('https://64dc7b7ce64a8525a0f68ee2.mockapi.io/Venu', dummyData);
    
    // useEffect(()=>{
        
    // },[searchkey])
    
    const handlesearch = () =>{
        if (searchkey) {
            axios.get('https://64dc7b7ce64a8525a0f68ee2.mockapi.io/Venu')
            .then(response => {setUsers(response.data); 
                const filteredData =response.data.filter(f=>f.itemname.toLowerCase().includes(searchkey));
                console.log(filteredData,'filteredData')
                setData(filteredData); })
            .catch(er=>console.log(er));
            }
        // setData(users.filter(f=>{return(f.itemname.toLowerCase().includes(searchkey))}));
        
    }

  return (
    <div className='searchresultparentdiv'>
    <div >   

                <div className='topcurveimage'>
                    <img src={Topcurve} height='690px' width='1519px' alt='topcurve' />
                </div>
            
                <div className='logologin'>
                    <div className='ilostlogo'><img className='ilostlogoimage' alt='ilostlogo' src={ilostlogo} /></div>
                </div>

                <Profiledropdown currentuser={localStorage.getItem("currentuser")} navigateto='/' />

                <div className='searchtitle'>Search results</div>

                
                <div className='searchresultbox'>
                    <input type='text' placeholder='Search...' className='searchinputbox' value={searchkey} onChange={(e)=>setSearchkey(e.target.value)}  />
                    <Button className='searchbutton' onClick={handlesearch}>Search</Button>
                </div>
        

                <div className='searchitems'>
                    
                        <div className='search '>
                            {data.map((items,i)=>{
                                return(
                                    <div className='searchcards'>
                                        
                                        <div>
                                            <img src={keys} className='keyimage' alt='keys' height='280px' width='280px' />
                                        </div>
                                        <div className='carddetails'>
                                            <div className='subcards'key={i}>
                                            <div className='itemname' >{items.itemname}</div>
                                            <div className='locationdetails'>
                                                <div className='locations'><FontAwesomeIcon icon={faMap} style={{color: "#00b8b8",margin:'3px'}} />  {items.location}</div>
                                                <div className='locations'><FontAwesomeIcon icon={faCalendar} style={{color: "#00b8b8",margin:'3px'}} /> {items.date}</div>
                                                <div className='locations'> <FontAwesomeIcon icon={faClock} style={{color: "#00b8b8",margin:'3px'}} /> {items.time}</div>
                                            </div>
                                            <div className='coontactandviewitem'>
                                                <div ><Button className='contact'>Contact</Button></div>
                                                <div className='viewitem'>View item <FontAwesomeIcon className='arrowicon' icon={faArrowRight} /></div>
                                            </div>
                                            </div>
                                        </div>
                                
                                    </div>
                                );
                            })}
                        </div>

                        <div className='sendalert'>
                            <img src={temp} alt='temp' />
                        </div>
                        
                        <div>
                            <div className='countryandlinks'>
                                <Footercomponent />
                            </div>

                            <div className='copyrightspart'>
                                <img  src={copyrightsimage} alt='copyrights' height='23px' />
                            </div>
                        </div>
                </div>
    
    </div>

    

    </div>
  )
}

export default Searchresultspage