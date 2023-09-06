import React, { useEffect } from 'react';
// import '../css/calender.css'
const Meet = () => {
  useEffect(() => {
    // Load the Calendly widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/varun-jajoo18/personal-meeting" style={{ minWidth: '320px', height: '700px' }} />
  );
};

export default Meet;
