import React from 'react';
import starbucks from '../Images/startbucks.png';
import amazon from '../Images/amazon.png';
import airarabia from '../Images/airarabia.png';
import suitcase from '../Images/suitcase.png';

const Ourbrands = () => {

    const businessbrands =[starbucks,amazon,airarabia,suitcase,amazon,starbucks,suitcase,airarabia,amazon];
    
  return (
    <div>
        <div className='businesstitle'>Businesses that use our platform</div>
            <div className='brandcards'>
                {businessbrands.map((items)=>{
                    return(
                        <div className='cardone'><img src={items} alt='brandimages' /></div>
                    );
                })}
                
            </div>
    </div>
  )
}

export default Ourbrands