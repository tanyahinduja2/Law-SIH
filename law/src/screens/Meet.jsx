import React, { useState, useEffect } from 'react';
import { PopupModal, useCalendlyEventListener } from 'react-calendly';
// import '../css/chat.css';
import "../css/meet.css";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

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

  const [expertsData, setExpertData] = useState([]);
  const colours = ['#2B3467', '#590696', '#3D087B', '#005792'];;
  useEffect(() => {
    const db = getFirestore();
    const usersCollectionRef = collection(db, "users");

    getDocs(usersCollectionRef)
      .then((querySnapshot) => {
        const expertDataArray = [];
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          if (userData.expert) {
            expertDataArray.push(userData);
          }
        });
        setExpertData(expertDataArray);
      })
      .catch((error) => {
        console.error("Error fetching documents: ", error);
      });
  }, []);
  console.log(expertsData);

  return (
    <div>
      <div className="meet-container">
        {expertsData.map((expert, i) => (
          <>
            <div className="meet-card" style={{ backgroundColor: "#d0b077", borderColor: "#d0b077"}}>
              <h2 className="meet-name" style={{color:"black"}}>{expert.name}</h2>
              <img src={expert.photoURL} className="meet-img" style={{ borderColor: "#d0b077"}}></img>
              <h4 className="meet-expertise" style={{color:"black"}}>{expert.expertise}</h4>
              <p className="meet-mail" style={{color:"black"}}>{expert.email}</p>
              <button type="submit" className="meet-btn" style={{ backgroundColor: "#d0b077" ,color:"black"}}>
                <span onClick={()=>setIsOpen(true)}>Schedule</span>
                 {/* <button
          style={{ display: 'block', margin: '0 auto' }}
          onClick={() => setIsOpen(true)}
        >
          Schedule
        </button>> */}
              </button>
            </div>
          </>
        ))}
      </div>
      <div className='meet-container'>
       

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
         <PopupModal
          url="https://calendly.com/sanjudumy"
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
          <PopupModal
          url="https://calendly.com/sanjanalalwani610"
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
         <PopupModal
          url="https://calendly.com/610sanjana"
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
    </div>
  );
};

export default Meet;
