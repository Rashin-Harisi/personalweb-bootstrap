import React from 'react';
import NavBar from '../navbar/navbar';
import SlideShows from '../slideshows/slideshows';


const Home = ()=>{
    return(
        <div className='home'>
            <NavBar/>
            <SlideShows/>
        </div>
    )
};

export default Home;