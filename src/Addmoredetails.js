import React, { useState } from 'react';
import Topcurve from './assets/Images/Topcurve.png';
import ilostlogo from './assets/Images/iLostlogo.png';
import Profiledropdown from './assets/Components/Profiledropdown';
import './Addmoredetails.css';
import { Button } from '@mui/base';
import Footercomponent from './assets/Components/Footercomponent';
import copyrightsimage from './assets/Images/copyrights.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Addmoredetails = () => {
    const [newreport,setNewreport]=useState({
        itemname:'',
        category:'',
        description:'',
        keywords:'',
        location:'',
        locationidentifier:'',
        name:'',
        mobilenumber:'',
        mail:'',
        date:'',
        time:'',
        reporterid:''
    })
    const navigate = useNavigate();
    
    // console.log(formattedTime,'date')
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewreport({ ...newreport, [name]: value });
    };
    const moment = require('moment');
    const handleSubmit = (e) => {
        
        const date = new Date();
        const formattedDate = moment(date).format('DD[th] MMMM YYYY');
        const formattedTime = moment(date).format('hh : mm A');
        const curruserid = localStorage.getItem("currentuserid");
        e.preventDefault();
        console.log(newreport,'newreport');
        axios.post('https://64dc7b7ce64a8525a0f68ee2.mockapi.io/Venu', {
            ...newreport,
            date: formattedDate,
            time: formattedTime,
            reporterid: curruserid
        })
        .then((response) => {
            const newReportId = response.data.id;
            navigate(`/querypublished/${newReportId}`);

        })
        .catch(err=>console.log(err));
    };

  return (
    <div>
        <div className='moredetailsdiv'>
                <div className='topcurveimage'>
                    <img src={Topcurve} height='690px' width='1519px' alt='topcurve' />
                </div>
            
                <div className='logologin'>
                    <div className='ilostlogo'><img className='ilostlogoimage' alt='ilostlogo' src={ilostlogo} /></div>
                </div>

                <div>
                    <Profiledropdown currentuser={localStorage.getItem("currentuser")} />
                </div>

                <div className='moredetails'>
                    <div className='moredetailstitle'>Add More details</div>
                </div>

                <div className='productdetails'>
                    
                <div className='formtopbox'>
                        <div className='fieldsforinput'>
                            <label>Item Name</label>
                            <input type='text' name='itemname' value={newreport.itemname} onChange={handleInputChange} placeholder='Type Name' />
                            <div className='subtitleforfields'>Item Name</div>
                        </div>

                        <div className='fieldsforinput'>
                            <label>Item Category</label>
                            <input type='text' name='category' value={newreport.category} onChange={handleInputChange} placeholder='Select Category' />
                            <div className='subtitleforfields'>Item Category</div>
                        </div>

                        <div className='fieldsforinput'>
                            <label>Item Description</label>
                            <input className='forph' name='description' value={newreport.description} onChange={handleInputChange} id='itemdescription' type='text' placeholder='Type desc' />
                            <div className='subtitleforfields'>Item Description</div>
                        </div>

                        <div className='fieldsforinput keywordbox'>
                            <label>Keywords</label>
                            <input type='text' name='keywords' value={newreport.keywords} onChange={handleInputChange} placeholder='Keywords' />
                            <div className='subtitleforfields'>Keywords</div>
                        </div>

                        <div className='fieldsforinput'>
                            <label>Upload Images</label>
                            <Button className='imageupload'>Upload Image</Button>
                            <div className='subtitleforfields'>Upload Images</div>
                        </div>

                        </div>

                        <div className='formtopbox'>
                        <div className='fieldsforinput location'>
                            <label>Location</label>
                            <input type='text' name='location' value={newreport.location} onChange={handleInputChange} placeholder='Type Address' />
                            <div className='subtitleforfields'>Location</div>
                        </div>

                        <div className='fieldsforinput'>
                            <label>Location Identifiers</label>
                            <input type='text' name='locationidentifier' value={newreport.locationidentifier} onChange={handleInputChange} placeholder='Landmarks of the location' />
                            <div className='subtitleforfields'>Location Identifiers</div>
                        </div>
                        </div>

                        <div className='fieldsforinput location'>
                            <label>Your Name</label>
                            <input type='text' name='name' value={newreport.name} onChange={handleInputChange} placeholder='Full name' />
                            <div className='subtitleforfields'>Your Name</div>
                        </div>

                        <div className='fieldsforinput'>
                            <label>Your Phone Number</label>
                            <input type='tel' name='mobilenumber' value={newreport.mobilenumber} onChange={handleInputChange} placeholder='Phone number' />
                            <div className='subtitleforfields'>Your Phone Number</div>
                        </div>

                        <div className='fieldsforinput'>
                            <label>Your Mail address</label>
                            <input type='email' name='mail' value={newreport.mail} onChange={handleInputChange} placeholder='Mail address' />
                            <div className='subtitleforfields'>Your Mail address</div>
                        </div>
                    
                        <div className='cancelandsave'>
                    <div><Button className='cancelbutton'>Cancel</Button></div>
                    <div><Button className='savebutton' onClick={handleSubmit}>Submit form</Button></div>
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

export default Addmoredetails