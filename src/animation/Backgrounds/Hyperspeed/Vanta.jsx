import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = WAVES({
      el: vantaRef.current,
      THREE: THREE,
      backgroundColor: 0x0b0c10,
      color: 0xe1113,
      waveHeight: 20,
      waveSpeed: 0.8,
      zoom: 1,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className="absolute inset-0 w-full h-full -z-10">
      {children}
    </div>
  );
};

export default VantaBackground;