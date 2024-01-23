import React from 'react';

const divStyle={
    marginTop:'20px',
    color: '#191970',
}
const Header=()=>{
    return(
        <div className='footer' style={{...divStyle}}>
            Welcome To My Website.<br/> 
            I am Rashin Harisi a Junior FrontEnd Developer.
        </div>
    )
}

export default Header;