import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

// Video-33.
// Dekho jab bhi hum log single page application banate hai to hota ye hai ki suppose aapke navbar mein bahut saare options hai jisse aap ek page se dusre page par jao do link reload karna padta hai par react k case mein agar aap single page par hi rehkar hi page ko change karna chahte ho to uske liye you have to use router and switch so at first install them simply type react router dom in google aur uski site ko open kare and copy the syntax to install react router dom aur us syntax ko vs code k terminal  par paste kar de and after install react router dom uski site se import kara le switch aur router. 
// Below is imported from react router site.

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (<>
     <div>
      {/* har cheez router k andar ayegi aur router k andar fir ayega switch yaha par har switch k andar we have one navbar component. */}
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Home" element={< News  key='general' pageSize={8} country="in" category="general"/>}></Route>
          <Route path="/Business" element={ <News key='business'  pageSize={8} country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={<News key='entertainment'  pageSize={8} country="in" category="entertainment"/>}></Route>
          <Route path="/General" element={ <News key='general'  pageSize={8} country="in" category="general"/>}></Route>
          <Route path="/Health" element={ <News key='health'  pageSize={8} country="in" category="health"/>}></Route>
          <Route path="/Science" element={ <News key='science'  pageSize={8} country="in" category="science"/>}></Route>
          <Route path="/Sports" element={ <News key='sports'  pageSize={8} country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={ <News  key='technology}>' pageSize={8} country="in" category="technology"/>}></Route>
        </Routes>
        </Router>
     </div>
     </>
    )
  }
}


