import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    if (!vantaEffectRef.current && vantaRef.current) {
      vantaEffectRef.current = WAVES({
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
    }

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed top-0 left-0 w-full h-full -z-10 min-h-screen"
      style={{ position: "fixed", width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      {children}
    </div>
  );
};

export default VantaBackground;