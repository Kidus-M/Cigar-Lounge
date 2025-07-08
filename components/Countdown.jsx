import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const eventDate = new Date('2025-07-11T18:00:00');
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const difference = eventDate - now;

            if (difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-black py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">Countdown to Grand Opening</h3>
                {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
                    <p className="text-gray-300 text-xl">The Grand Opening has started!</p>
                ) : (
                    <div className="flex justify-center space-x-4">
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold text-teal-600">{timeLeft.days}</span>
                            <span className="text-gray-400">Days</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold text-teal-600">{timeLeft.hours}</span>
                            <span className="text-gray-400">Hours</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold text-teal-600">{timeLeft.minutes}</span>
                            <span className="text-gray-400">Minutes</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold text-teal-600">{timeLeft.seconds}</span>
                            <span className="text-gray-400">Seconds</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Countdown;