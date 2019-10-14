import React from 'react';
import './App.css';
import './components/Contact.css';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Contact 
      avatar ="https://randomuser.me/api/portraits/women/82.jpg" 
      alt= "Anita Sutton"
      name="Anita Sutton"
      online
      status
      />
      <Contact 
      avatar ="https://randomuser.me/api/portraits/men/63.jpg" 
      alt= "Jim George"
      name="Jim George"
      />
      <Contact 
      avatar ="https://randomuser.me/api/portraits/women/57.jpg" 
      alt= "Charlotte Ryan"
      name="Charlotte Ryan"
      online
      status
      />
      
    </div>
  );
}



export default App;
