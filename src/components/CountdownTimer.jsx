import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Card } from "@/components/ui/card";

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <Card key={unit} className="p-4 text-center min-w-[100px]">
          <div className="text-4xl font-bold">
            {value}
          </div>
          <div className="text-sm text-muted-foreground capitalize">
            {unit}
          </div>
        </Card>
      ))}
    </div>
  );
}

CountdownTimer.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
};

export default CountdownTimer;
