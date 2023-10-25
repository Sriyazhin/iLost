import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './Homepage';
import Profilehome from './Profilehome';
import Contactus from './Contactus';
import Backgroundbase from './assets/Components/Backgroundbase';
import Myprofile from './Myprofile';
import Searchresultspage from './Searchresultspage';
import Addmoredetails from './Addmoredetails';
import Querypublished from './Querypublished';
import Mylistings from './Mylistings';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/profilehome/:id' element={<Profilehome />}></Route>
          <Route path='/contactus' element={<Contactus />}></Route>
          <Route path='/backgroundbase' element={<Backgroundbase />}></Route>
          <Route path='/myprofile' element={<Myprofile />}></Route>
          <Route path='/searchresults' element={<Searchresultspage />}></Route>
          <Route path='/moredetails' element={<Addmoredetails />}></Route>
          <Route path='/querypublished/:id' element={<Querypublished />}></Route>
          <Route path='/mylistings' element={<Mylistings />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
 