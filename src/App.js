import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="wrapper">
     <div className="header">
       <div className="mobile-home">
       Hello, I'm <text className="name">William Ting</text>. I'm a fullstack web developer.
       <div className="btn">View my work <i className="fas fa-arrow-right"></i></div>
       </div>
     
     </div>
     <div className="projects">PROJECTS</div>
     <div className="real-estate">REAL ESTATE APP</div>
    </div>
  );
}

export default App;
