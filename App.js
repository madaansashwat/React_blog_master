import React, { Component } from 'react';
import Header from './components/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Post from './components/Post'



class App extends Component { 
  
render() {
  return(
    
    <BrowserRouter>
    
    
    <div className="App">
    <Header />
    <Route exact path ='/' component={Home} />
    <Route path="/:post_id" component={Post} />
    
    </div>
  
   
    </BrowserRouter>




    
  );
 }
}

export default App

