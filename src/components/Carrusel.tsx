    import { useState, useEffect } from 'react';

    const Carrusel = () => {
    const images = [
        "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", 
        "https://images.unsplash.com/photo-1522770179533-24471fcdba45"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        }, 5000); // 5 segundos

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="w-1/2 h-screen">
        <div 
            className="h-full w-full bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
        </div>
        </div>
    );
    };

    export default Carrusel;