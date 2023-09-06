import React, { useState } from 'react';
import { PopupModal,useCalendlyEventListener } from 'react-calendly';
import '../css/chat.css'

const Meet = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: (e) => console.log("onDateAndTimeSelected",e),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });
  return (
    <div className='meet-container' >
      <button
        style={{ display: 'block', margin: '0 auto' }}
        onClick={() => setIsOpen(true)}
      >
        Custom Button
      </button>
      
      <PopupModal
        
        url="https://calendly.com/varun-jajoo18"
        pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: true,
            hideLandingPageDetails:false,
            primaryColor: '00a2ff',
            textColor: '4d5055'
          }}
        utm={props.utm}
        prefill= {{
            name: "Your Name",
            email: "your@email.com",
          }}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById('root')}
      />
      </div>
    
  );
};

export default Meet;
