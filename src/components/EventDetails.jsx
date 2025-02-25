import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { events } from "../data/eventsData";

function EventDetails() {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 100); // Short delay ensures it works on mobile
  }, []);

  if (!event) {
    return <h1 className="text-white text-center mt-20">Event not found</h1>;
  }

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold">{event.title}</h1>
        <img src={event.image} alt={event.title} className="w-full h-auto mt-6 rounded-lg" />
        <p className="mt-4 text-lg">{event.description}</p>
      </div>
    </div>
  );
}

export default EventDetails;
