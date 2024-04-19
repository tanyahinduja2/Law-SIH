import React,{ useState,useEffect } from "react";
import "../css/description.css";
import "../css/template.css";
import nda1 from "../icons/nda1.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FloatInput } from "./FloatInput";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import copyright4 from "../icons/copyright1.png";
import cad1 from "../icons/cad1.png";
import peace from "../icons/peace.png";
import book from "../icons/book.png";
import personal from "../icons/personal.png";

export const Description = () => { 
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
  },])
  const navigate = useNavigate()
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);
  return (
    <div >
      <div>
        <div data-aos="fade-down"  className="title"><span style={{color:"#d0b077"}}>Hassle-free </span>Legal Documents</div>
        <div className="title-content">
          Looking to register a company or set up a trust fund? InteLegal makes
          tracking your paper trail both simple and seamless. And that’s just
          the beginning. Our services go far beyond registration. InteLegal is
          here to guide you through a variety of legal structures.
        </div>
      </div>
      {/* <div className="features">
        <img data-aos="fade-right" className="features-img" src={hassle1} alt="img"></img>
        <div className="features-content">
          <div data-aos="fade-left"
            style={{
              fontSize: "36px",
              fontWeight: "700",
              paddingBottom: "20px",
            }}
          >
            Companies
          </div>
          <div style={{ paddingBottom: "20px", fontSize: "19px" }}>
            InteLegal offers fast, efficient online sign-ups with in-line ABN
            and TFN registrations.
          </div>
          <ul style={{ paddingBottom: "40px", fontSize: "19px" }}>
            <li>Hassle-free registration</li>
            <li>Quick turnaround time, to get your business up and running</li>
            <li>Pre-verified documents</li>
          </ul>
          <button className="features-button" onClick={() => navigate('/aboutus')}>
            <span>LEARN MORE</span>
            <AiOutlineArrowRight style={{}} />
          </button>
        </div>
      </div>
      <div className="features">
        <div className="features-content">
          <div data-aos="fade-right"
            style={{
              fontSize: "36px",
              fontWeight: "700",
              paddingBottom: "20px",
            }}
          >
            Trusts
          </div>
          <div style={{ paddingBottom: "20px", fontSize: "19px" }}>
            InteLegal offers our clients access to a wide array of high-quality
            trusts, all with flexible deed arrangements.
          </div>
          <ul style={{ paddingBottom: "40px", fontSize: "19px" }}>
            <li>Large selection of trusts</li>
            <li>Experienced trust advisers</li>
            <li>Flexible deed arrangements</li>
          </ul>
          <button className="features-button" onClick={() => navigate('/aboutus')}>
            <span>LEARN MORE</span>
            <AiOutlineArrowRight style={{}} />
          </button>
        </div>
        <img data-aos="fade-left" className="features-img" src={hassle2} alt="img"></img>
      </div> */}
      {/* <div className="features">
        <img data-aos="fade-right" className="features-img" src={hassle3} alt="img"></img>
        <div className="features-content">
          <div data-aos="fade-left"
            style={{
              fontSize: "36px",
              fontWeight: "700",
              paddingBottom: "20px",
            }}
          >
            SMSFs
          </div>
          <div style={{ paddingBottom: "20px", fontSize: "19px" }}>
            InteLegal helps trustees and advisers fulfill the regulatory
            requirements of running a self-managed super fund.
          </div>
          <ul style={{ paddingBottom: "40px", fontSize: "19px" }}>
            <li>Stay within regulatory frameworks</li>
            <li>Service for both advisers and trustees</li>
            <li>Expert fund advice</li>
          </ul>
          <button className="features-button" onClick={() => navigate('/aboutus')}>
            <span>LEARN MORE</span>
            <AiOutlineArrowRight style={{}} />
          </button>
        </div>
      </div> */}
       <div className="containe1"  id="temp">
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
        <div className="nexttemp" style={{display:"flex",justifyContent:"center"}}>
                <button id="" className="btn trash " style={{margin:"auto",borderRadius:"10px"}} onClick={()=>{navigate('/templates')}}>View All Templates <AiOutlineArrowRight/> </button>
               </div>
        <br />
        <br />
        <br />
        <div style={{backgroundColor:"black"}}>
          <br />
      <div data-aos="fade-right" className="constitute">Why Choose Us?</div>
      <br />
      <br />
      <div data-aos="fade-left" className="constitutebox">
        <div className="box">
          <figure className="figure-img">
            <img
              src={personal}
              alt=""
              height={25}
            />
          </figure>
          <br />
          <br />
          <h2>PERSONALISED SERVICE</h2>
          <p>
            <span style={{fontWeight:"bold",color:"black"}}>Legal </span><span style={{fontWeight:"bold",color:"black"}}>साथी</span> advisers take time to get to know your project.They're
            fully decdicated to offering the highest level of customer service.
          </p>
        </div>
        <div className="box">
          <figure className="figure-img">
            <img
              src={book}
              alt=""
              height={25}
            />
          </figure>
          <br />
          <br />
          <h2>QUALITY DOCUMENTS</h2>
          <p>
            Our products have been created by specailist tax, corporate and
            trust lawyers, and are externally reviewed to ensure the highest
            quality.
          </p>
        </div>
        <div className="box">
          <figure className="figure-img">
            <img
              src={peace}
              alt=""
              height={25}
            />
          </figure>
          <br />
          <br />
          <h2>PEACE OF MIND</h2>
          <p>
            We work with incorporated legal practices to ensure your documents
            are up to date. We are not just a document template provider. Our
            order forms guide the user through the process as a lawyer might,
            asking questions and providing options.
          </p>
        </div>
        </div>
      </div>
      <div className="aboutme" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"10vh"}}>
        <span style={{fontWeight:"bold",fontSize:"40px",marginBottom:"3vh"}}>Want to Know How we Work ?</span>
        <button className="btn trash" style={{fontSize:"20px",borderRadius:"20px"}} onClick={()=>{navigate('/aboutus')}}>About us</button>
      </div>
    </div>
  );
};
