import React,{ useState } from "react";
import "../css/template.css";
export default function Templates() {
  const[cards]=useState([
    {
      title: 'Card-1',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto.`
    },
    {
      title: 'Card-2',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto.`
    },
    {
      title: 'Card-3',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto.`
    },
    {
      title: 'Card-4',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto.`
    },
    {
      title: 'Card-5',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto.`
    },
    {
      title: 'Card-6',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto.`
    },
    {
      title: 'Card-7',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto.`
    },
    {
      title: 'Card-8',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto.`
    },
    {
      title: 'Card-9',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto.`
    },
    {
      title: 'Card-10',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto.`
    },
    {
      title: 'Card-11',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto.`
    },
    {
      title: 'Card-12',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto.`
    },
  ])
  return (
    <div>
      <section>
        <div className="containe">
          <h1>  Templates </h1>
          <div className="cards">
            {
              cards.map((card, i) => ( 
            <div key={i} className="card">
            <h3>
              {card.title}
            </h3>
            <p>{ card.text }</p>
            <button className="btn card-btn">Explore</button>
          </div>
              ))
        }
        </div>
        </div>
      </section>
    </div>
  )
}
