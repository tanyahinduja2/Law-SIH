import React, { useState } from 'react';
import { PopupModal, useCalendlyEventListener } from 'react-calendly';
import '../css/chat.css';

const Meet = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [eventTime, setEventTime] = useState(null); // State to store event time

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: (e) => console.log("onDateAndTimeSelected", e),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => {
      const eventData = e.data.payload;
      const time = eventData.eventTime; // Assuming eventTime is a property in the event payload
      setEventTime(time);
      console.log(`Event scheduled at: ${time}`);
    },
  });

  return (
    <div className='meet-container'>
      <button
        style={{ display: 'block', margin: '0 auto' }}
        onClick={() => setIsOpen(true)}
      >
        Custom Button
      </button>

      {eventTime && <p>Event Time: {eventTime}</p>} {/* Display event time */}
      
      <PopupModal
        url="https://calendly.com/varun-jajoo18"
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: true,
          hideLandingPageDetails: false,
          primaryColor: '00a2ff',
          textColor: '4d5055',
        }}
        utm={props.utm}
        prefill={{
          name: "Your Name",
          email: "your@email.com",
        }}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById('root')}
      />
    </div>
  );
};

export default Meet;
