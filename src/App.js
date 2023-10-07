import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
// Video-31.
// Dekho jab bhi hum log single page application banate hai to hota ye hai ki suppose aapke navbar mein bahut saare options hai jisse aap ek page se dusre page par jao do link reload karna padta hai par react k case mein agar aap single page par hi rehkar hi page ko change karna chahte ho to uske liye you have to use router and switch so at first install them simply type react router dom in google aur uski site ko open kare and copy the syntax to install react router dom aur us syntax ko vs code k terminal  par paste kar de and after install react router dom uski site se import kara le switch aur router. 
// Below is imported from react router site.

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {

  apiKey ="67731dcdf96849bf96844cefcc276e59";
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (<>
     <div>
      {/* har cheez router k andar ayegi aur router k andar fir ayega switch yaha par har switch k andar we have one navbar component. */}
      <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}//here we set the initial progress of the loading bar.
        // onLoaderFinished={() => setProgress(0)} this function is generally used ki jab loading finish ho jayegi to uske baad kya karna hai.
      />
        <Routes>
          <Route path="/" element={< News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={8} country="in" category="general"/>}></Route>
          <Route path="/Business" element={ <News setProgress = {this.setProgress}  apiKey = {this.apiKey}  key='business'  pageSize={8} country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey}  key='entertainment'  pageSize={8} country="in" category="entertainment"/>}></Route>
          <Route path="/General" element={ <News setProgress = {this.setProgress}  apiKey = {this.apiKey} key='general'  pageSize={8} country="in" category="general"/>}></Route>
          <Route path="/Health" element={ <News setProgress = {this.setProgress} apiKey = {this.apiKey}  key='health'  pageSize={8} country="in" category="health"/>}></Route>
          <Route path="/Science" element={ <News setProgress = {this.setProgress} apiKey = {this.apiKey}  key='science'  pageSize={8} country="in" category="science"/>}></Route>
          <Route path="/Sports" element={ <News setProgress = {this.setProgress} apiKey = {this.apiKey}  key='sports'  pageSize={8} country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={ <News setProgress = {this.setProgress} apiKey = {this.apiKey}   key='technology}>' pageSize={8} country="in" category="technology"/>}></Route>
        </Routes>
        </Router>
     </div>
     </>
    )
  }
}


