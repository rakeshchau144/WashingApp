import React, { useState, useEffect } from 'react';
import './header.css';
import image1 from '../../../../asserst/img/jpeg/wash1.jpg';
import image2 from '../../../../asserst/img/jpeg/wash2.jpg';
import image3 from '../../../../asserst/img/jpeg/wash3.jpg';
import image4 from '../../../../asserst/img/jpeg/wash4.jpg';
import image5 from '../../../../asserst/img/jpeg/wash5.jpeg';


export default function Header() {
    const images = [image1, image2, image3, image4, image5];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);



    return (
        <>
            
            <header className="header-background">
                <div className="header-content">
                    <h1>Welcome</h1>
                    <p>We are providing the best Vehicle washing service</p>

                    <img src={images[currentImageIndex]} alt="carousel" className="carousel-image" />
                </div>
            </header>
        </>
    );
}
