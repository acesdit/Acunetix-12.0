import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import PropTypes from 'prop-types';
import * as THREE from 'three';
import WAVES from "vanta/dist/vanta.waves.min";
import CountdownTimer from "@/components/CountdownTimer";
import EventCard from "@/components/EventCard";
import FAQSection from "@/components/FAQSection";
import SponsorsSection from "@/components/SponsorsSection";
import PastEvents from "@/components/PastEvents";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  useEffect(() => {
    WAVES({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x0,
      shininess: 100.00,
      waveHeight: 40.00,
      waveSpeed: 1.50,
      zoom: 0.65,
      THREE: THREE,
      backgroundColor: 0x0,
    });
  }, []);

  const { data: events, isLoading } = useQuery({ 
    queryKey: ["/api/events"]
  });

  return (
    <div className="min-h-screen bg-black">
      <div id="vanta-bg" className="fixed inset-0 -z-10 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />

      <header className="container mx-auto px-4 py-16">
        <h1 className="text-7xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          ACUNETIX 12.0
        </h1>
        <div className="text-2xl text-center mb-12 text-gray-400">
          10 : 21 : 01
        </div>
        <CountdownTimer targetDate={new Date("2025-03-15")} />
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Events
          </h2>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-[300px] w-full" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events?.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </section>

        <FAQSection />
        <SponsorsSection />
        <PastEvents />
      </main>
    </div>
  );
}