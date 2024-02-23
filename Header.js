import React from "react";

import resumeSvg from "../../assets/resume.svg";

function Header() { 
  return (
    <div style={{}}>
      
      
      <center>
      <h1 style={{color:"black",textDecorationLine:"underline"}}>Resume Builder </h1>
      </center> 
      <div style={{width:'',display:'flex',backgroundColor:'White',marginTop:'20px'}}> 
      <div style={{backgroundColor:'',height:'auto' ,width:'50%' }}>
      <img src={resumeSvg} style={{height:'400px',margin:'20px',marginLeft:'80px',marginTop:'30px'}} alt="resume" />
        
      </div> 
      <div style={{backgroundColor:'',height:'auto' ,width:'50%' }}>
      <ul style={{marginLeft:'50px', marginTop:'50px',fontSize:'30px'}}>
        <li> Fast & Easy to Create</li>
        <li style={{marginTop:'10px'}}>Professional and User-friendly Interface</li>
        <li style={{marginTop:'10px'}}>Step by Step process</li>
        <li style={{marginTop:'10px'}}>Add,Edit and Rearrange resume sections easly</li>
        <li style={{marginTop:'10px'}}>Download as a pdf</li>
      </ul>
      </div>   
      </div> 
    </div>
  )
}


export default Header;
