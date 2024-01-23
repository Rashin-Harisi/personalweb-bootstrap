import React from 'react';
import './footer.css';

const divStyle={
   border:'1px solid black',
   width: '800px',
   height: '50px', 
   marginTop: '20px',
   marginLeft: '50px',
   marginBottom: '20px',
   paddingTop:'10px',
   
}

const Footer=()=>{
    return(
        <div className='footer' style={{...divStyle}}>
            You can find me in <a href='https://github.com/Rashin-Harisi' target="_blank">Github <i class="fa-brands fa-github"></i></a> , <a href='https://www.freecodecamp.org/Rashin-Harisi' target="_blank"> FCC  <i class="fa-brands fa-free-code-camp"></i></a>, and <a href='https://www.linkedin.com/in/rashin-harisi/' target="_blank"> Linkedin <i class="fa-brands fa-linkedin"></i></a>
        </div>
    )
}

export default Footer;