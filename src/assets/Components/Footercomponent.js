import React from 'react';
import ilostlogoagain from '../Images/ilostlogoagain.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import dotimage from '../Images/dot.png';

const Footercomponent = () => {

    // const navigate = useNavigate();

    const footerlists = [
        {title:'About us',dotimage:dotimage,linkshere:'/contactus'},{title:'Contact Us',dotimage:dotimage,linkshere:'/contactus'},{title:'Terms of Use',dotimage:dotimage,linkshere:'/contactus'},{title:'Privacy Policy',linkshere:'/contactus'}];

  return (
    <div>
            <div className='ilostlogoandchangecountry'>
                <div className='ilostlogoagain'><img src={ilostlogoagain} alt='ilostlogoagain' /></div>

                <div className='linkandlistspart'>
                {footerlists.map((items,i)=>{
                return(
                    <div key={i} className='linkandlists'>
                        <Link to={items.linkshere} className='titlelinks'>{items.title}</Link>
                            {items.dotimage?<img className='dots' src={items.dotimage} alt='dots' />:null}
                    </div>
                );
                })}
                </div>

                <Link className='businesssigninherelink' to='#'>
                <div className='businesssigninhere'>
                    Are you a business user?Sign in here
                </div>
                </Link>
                
            </div>

            
    </div>
  )
}

export default Footercomponent