import { Button } from '@mui/base'
import React, { useState } from 'react'
import plusicon from '../Images/plusicon.png';
import minusicon from '../Images/minusicon.png';
import faqlogo from '../Images/faqlogo.png';

const Faqcomponent = ({questions}) => {

  const [plusminus,setPlusminus]=useState(null);

  const handleplusminusicon = (index) =>{
    if(plusminus===index){
        return setPlusminus(null);
    }
    setPlusminus(index);
}

  return (
    <div>
                  <div className='faqtitleone'>Frequently asked questions</div>
            <div className='faqtitletwo'>Everything you need to know about the product and billing.</div>
        <div className='questionandlogo'>
                        
            <div className='questionshere'>
                        {questions.map((items,idx)=>{
                            return(
                                <div className={plusminus===idx?'ansbox':'quesbox'} >
                                    <div className='questionpart'>
                                        <div className='questions' key={idx}>{items.questions}</div>
                                        <div><Button onClick={()=>handleplusminusicon(idx)} className='iconbutton'>{plusminus===idx?<img src={minusicon} alt='minusicon' />:<img src={plusicon} alt='plusicon' />}</Button></div>
                                        </div>
                                        <div>
                                            <div className='answersforfaq'>
                                            {plusminus===idx?<div>{items.answers}</div>:null}  
                                        </div>
                                        </div>
                                </div>
                            );
                        
                        })}
            </div>
                <div className='faqlogohere'>
                    <img className='faqlogoimage' height='407px' src={faqlogo} alt='faqlogo' />
                </div>
        </div>                     
    </div>
  )
}

export default Faqcomponent