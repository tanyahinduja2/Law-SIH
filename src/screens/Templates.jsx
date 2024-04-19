import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/template.css";
import nda1 from "../icons/nda1.png";
import cad1 from "../icons/cad1.png";
import copy from "../icons/copy2.png";
import copy3 from "../icons/copy3.png";
import termination1 from "../icons/termination1.png";
import poa1 from "../icons/attherate.png";
import privacy1 from "../icons/lock.png";
import employ from "../icons/employ.png";
import { FloatInput } from "../components/FloatInput";
import copyright4 from "../icons/copyright1.png";

export default function Templates() {
  const [selectedCardIndex, setSelectedCardIndex] = useState("");
  const [floatinput,setFloatInput]=useState(false)
  const [cards] = useState([
    {
      icon: nda1,
      title: "Non-Disclosure Agreement",
      text: `A non-disclosure agreement is a legally binding contract that establishes a confidential relationship.`,
    },
    {
      icon: cad1,
      title: "Cease and Desist Letter",
      text: `The Cease and Desist acts as a formal request that the recipient stop and not continue this behaviour.`,
    },
    {
      icon: copyright4,
      title: "Copyright License Agreement",
      text: `A copyright license agreement is a legally enforceable contract that gives a licensee, authorization to use your work for designated purposes, typically in exchange for payment.`,
    },
    {
      icon: copy,
      title: "Copyright Notice",
      text: `A copyright notice is a notice of statutorily prescribed form that informs users of the underlying claim to copyright ownership in a published work.`,
    },
    {
      icon: copy3,
      title: "Copyright Assignment",
      text: `A copyright assignment agreement is an agreement that transfers the copyright for a work from the copyright owner to another party.`,
    },
    {
      icon: termination1,
      title: "Termination Letter",
      text: `A termination letter is a formal document given by an employer to the employee when he/she is terminated from the services.`,
    },
    {
      icon: poa1,
      title: "Power of Attorney",
      text: `A power of attorney is a written authorization to represent or act on another's behalf in private affairs, business, or some other legal matter.`,
    },
    {
      icon: privacy1,
      title: "Privacy Policy",
      text: `A privacy policy is a document that explains how an organization handles any customer, client or employee information gathered in its operations.`,
    },
    {
      icon: employ,
      title: "Employment Agreement",
      text: `An employment agreement is a contract between an employer and employee that outlines the terms and conditions of the working relationship.`,
    },
  ]);
  console.log(selectedCardIndex)
  return (
    <div>
      <section>
        <div className="containe">
          <h1> Templates </h1>
          <div className="cards">
            {cards.map((card, id) => (
              <div key={id} className="card">
                <img src={card.icon} alt="icon" className="icons"></img>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
                {/* <Link to={`/templates/${encodeURIComponent(card.title)}`}> */}
                <button className="btn card-btn" onClick={()=>{
                  setFloatInput(true)
                  setSelectedCardIndex(encodeURIComponent(card.title))
                }}>Generate</button>
              
                {/* </Link> */}
              </div>
            ))}

          </div>
          {
                !floatinput?<></>:<FloatInput card={selectedCardIndex} float={setFloatInput} />
               }
        </div>
      </section>
    </div>
  );
}
