import React,{ useEffect } from "react";
import "../css/description.css";
import hassle1 from "../illustrations/hassle1.svg";
import hassle2 from "../illustrations/hassle2.svg";
import hassle3 from "../illustrations/hassle3.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

export const Description = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);
  return (
    <div>
      <div>
        <div data-aos="fade-down"  className="title">Hassle-free Legal Documents</div>
        <div className="title-content">
          Looking to register a company or set up a trust fund? Constitute makes
          tracking your paper trail both simple and seamless. And that’s just
          the beginning. Our services go far beyond registration. Constitute is
          here to guide you through a variety of legal structures.
        </div>
      </div>
      <div className="features">
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
            Constitute offers fast, efficient online sign-ups with in-line ABN
            and TFN registrations.
          </div>
          <ul style={{ paddingBottom: "40px", fontSize: "19px" }}>
            <li>Hassle-free registration</li>
            <li>Quick turnaround time, to get your business up and running</li>
            <li>Pre-verified documents</li>
          </ul>
          <button className="features-button">
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
            Constitute offers our clients access to a wide array of high-quality
            trusts, all with flexible deed arrangements.
          </div>
          <ul style={{ paddingBottom: "40px", fontSize: "19px" }}>
            <li>Large selection of trusts</li>
            <li>Experienced trust advisers</li>
            <li>Flexible deed arrangements</li>
          </ul>
          <button className="features-button">
            <span>LEARN MORE</span>
            <AiOutlineArrowRight style={{}} />
          </button>
        </div>
        <img data-aos="fade-left" className="features-img" src={hassle2} alt="img"></img>
      </div>
      <div className="features">
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
            Constitute helps trustees and advisers fulfill the regulatory
            requirements of running a self-managed super fund.
          </div>
          <ul style={{ paddingBottom: "40px", fontSize: "19px" }}>
            <li>Stay within regulatory frameworks</li>
            <li>Service for both advisers and trustees</li>
            <li>Expert fund advice</li>
          </ul>
          <button className="features-button">
            <span>LEARN MORE</span>
            <AiOutlineArrowRight style={{}} />
          </button>
        </div>
      </div>
      <div data-aos="fade-down" className="constitute">Why Choose Constitute</div>
      <br />
      <br />
      <div data-aos="fade-up" className="constitutebox">
        <div className="box">
          <figure className="figure-img">
            <img
              src="https://constitute.com.au/wp-content/uploads/2021/10/customer-service-svgrepo-com.svg"
              alt=""
            />
          </figure>
          <br />
          <br />
          <h2>PERSONALISED SERVICE</h2>
          <p>
            Constitute advisers take time to get to know your project.They're
            fully decdicated to offering the highest level of customer service.
          </p>
        </div>
        <div className="box">
          <figure className="figure-img">
            <img
              src="https://constitute.com.au/wp-content/uploads/2021/10/documents-svgrepo-com.svg"
              alt=""
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
              src="https://constitute.com.au/wp-content/uploads/2021/10/hand-peace-svgrepo-com.svg"
              alt=""
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
  );
};
