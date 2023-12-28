import React from 'react';
import {useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer';
import './Stylesheets/ScrollTransitionText.css'; // Importing the stylesheet


const ScrollTransitionText = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false // To ensure it triggers every time it comes in/out of view
    });

    const [offsetY, setOffsetY] = useState(0);
    
    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <div className="parallaxContainer">
            <div className="backgroundLayer"></div>
            <div 
                className="slidingLayer" 
                style={{ transform: `translateY(${offsetY * -2}px)` }}
            >
                <div ref={ref} className={`scroll-text1 ${inView ? 'visible' : ''}`}>
                    Hi, I'm David
                </div>
                <div ref={ref} className={`scroll-text ${inView ? 'visible' : ''}`}>
                    Hi, I'm David
                </div>
                <div ref={ref} className={`scroll-text1 ${inView ? 'visible' : ''}`}>
                    Hi, I'm David
                </div>
            </div>
        </div>

    );
};

export default ScrollTransitionText;
