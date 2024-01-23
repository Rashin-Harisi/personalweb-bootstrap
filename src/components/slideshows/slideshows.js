import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slideshows.css';

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '300px'
}
const slideImages = [
    {
        url: 'image1.png',
        caption: 'Slide 1'
    },
    {
        url: 'image2.jpg',
        caption: 'Slide 2'
    },
    {
        url: 'image4.jpg',
        caption: 'Slide 3'
    },
];

const SlideShows = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default SlideShows