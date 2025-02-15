import PropTypes from 'prop-types';
import { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import RegistrationModal from './RegistrationModal';

function EventCard({ event }) {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const formattedDate = new Date(event.date).toLocaleDateString();

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:scale-105 border-2 border-gray-800 bg-black/50 backdrop-blur-sm relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative">
        <img 
          src={event.imageUrl} 
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/70 p-1 rounded-full">
          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-xs">+</span>
          </div>
        </div>
      </div>

      <CardHeader>
        <h3 className="text-xl font-bold text-white">
          {event.title}
        </h3>
      </CardHeader>

      <CardContent>
        <p className="text-gray-400 mb-4">
          {event.description}
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <Calendar className="h-4 w-4" />
          <span>{formattedDate}</span>
        </div>
        <Button 
          onClick={() => setShowRegistrationModal(true)}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
        >
          Register Now
        </Button>
      </CardContent>

      <RegistrationModal 
        event={event}
        isOpen={showRegistrationModal}
        onClose={() => setShowRegistrationModal(false)}
      />
    </Card>
  );
}

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;