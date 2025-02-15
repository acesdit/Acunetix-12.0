import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import VANTA from 'vanta/dist/vanta.waves.min';

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = VANTA.WAVES({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x0,          // Black color for waves
      shininess: 52.00,    // Increased shininess
      waveHeight: 10.00,   // Taller waves
      waveSpeed: 0.90,     // Faster wave movement
      zoom: 0.95,          // Slightly closer zoom
      backgroundColor: 0xffffff  // White background for contrast
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="w-full h-full absolute top-0 left-0" />;
};

export default VantaBackground;