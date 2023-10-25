import React, { useEffect, useState } from 'react';
import search from '../Images/Search.png';
import collect from '../Images/collect.png';
import find from '../Images/find.png';
import doodlebackground from '../Images/doodle.png';

const Imageflow = () => {
    const imageWidths =[300,250,200];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesVisible, setImagesVisible] = useState(false);

  useEffect(()=>{
    const interval = setTimeout(() => {
        setCurrentImageIndex((prevIndex)=>prevIndex===imageWidths.length-1?0:prevIndex+1);
    }, 3000);
    
    return()=> clearInterval(interval);
    },[imageWidths])
    
  return (
    <div className='doodlebackground'   >
        <img className='doodlebackgroundimage' src={doodlebackground} alt='doodlebackground' width='1519px' height='583px'></img>
        <div className='lostflowimages'>
            <div className='searchimage'>
                <img  src={search} alt='search' style={{width:imageWidths[currentImageIndex]+'px'}} />
            </div>
            <div className='findimage'>
                <img  src={find} alt='find' style={{width:imageWidths[currentImageIndex]+'px'}} />
            </div>
            <div className='collectimage'>
                <img  src={collect} alt='collect' style={{width:imageWidths[currentImageIndex]+'px'}} />
            </div>
        </div>
    </div>
  )
}

export default Imageflow