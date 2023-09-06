import React, { useState } from 'react';
import { PopupModal } from 'react-calendly';
import '../css/chat.css'

const Meet = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const prefill =""
  return (
    <div >
      <button
        style={{ display: 'block', margin: '0 auto' }}
        onClick={() => setIsOpen(true)}
      >
        Custom Button
      </button>
      
      <PopupModal
      styles = {{height : "300px"}}
        url="https://calendly.com/varun-jajoo18"
        pageSettings={props.pageSettings}
        utm={props.utm}
        prefill= {prefill}
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
