'use client';
import React, { useEffect } from 'react';
import styles from './Circle.module.css';

const CircleFollower: React.FC = () => {
  useEffect(() => {
    const circle = document.querySelector('.circle') as HTMLElement;

    const moveCircle = (e: MouseEvent) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Constraints for circle's movement
      const circleRadius = 50; // Assuming the circle's diameter is 100px
      const maxX = window.innerWidth - circleRadius * 2; // Adjusting for the circle's full diameter
      const maxY = window.innerHeight - circleRadius * 2; // Adjusting for the circle's full diameter

      // Ensuring the circle stays within the viewport boundaries
      mouseX = Math.max(circleRadius, Math.min(mouseX, maxX));
      mouseY = Math.max(circleRadius, Math.min(mouseY, maxY));

      // Update circle position within constraints
      if (circle) {
        circle.style.left = `${mouseX}px`;
        circle.style.top = `${mouseY}px`;
      }
    };

    window.addEventListener('mousemove', moveCircle);

    return () => {
      window.removeEventListener('mousemove', moveCircle);
    };
  }, []);

  return <div className="circle"></div>;
};

export default CircleFollower;
