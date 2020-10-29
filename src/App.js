import React from "react";
import './App.css';
import ProfileComponent from "./profile/profileComponent";
import image from "./image.png";


function App() {
  const handleName = e => {alert(e);}
  return (
    <div className="App">
     <ProfileComponent handleName={handleName} fullName="William Shakespeare" bio="( 26 April 1564 – 23 April 1616) was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist. He is often called England's national poet and the Bard of Avon." profession="Playwright poet and actor" >
   <img className="image" src={image} alt='image'/></ProfileComponent> 
    </div>
  );

}

export default App;
