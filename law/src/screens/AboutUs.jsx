import React from "react";
import "../css/about-us.css"

const AboutUs = () => {
    return (
        <div>
            <header className="about-title-container">
                <h2 className="about-title">What do we offer?</h2>
            </header>
            <div className="about-container">
                <div className="about-info-container">
                    <h4>AI-powered Legal Document Generation</h4>
                    <ul>
                        <li><b>Smart Document Creation:</b> Our AI-powered legal document generation feature simplifies the process of creating legal documents. With intelligent algorithms, it analyzes your specific requirements and generates accurate, customized documents swiftly.</li>
                        <li><b>Tailored Templates:</b> Access a library of pre-designed legal document templates that can be easily tailored to your unique needs. Our AI ensures that each template is adaptable to your specific situation, saving you time and effort.</li>
                        <li><b>Effortless Editing:</b> Make revisions and edits with ease. Our AI not only generates documents but also offers an intuitive editing interface, making it simple to fine-tune your legal documents to perfection.</li>
                    </ul>
                </div>
                <div className="about-info-container">
                    <h4>Chat with Legal Professionals</h4>
                    <ul>
                        <li><b>Instant Legal Guidance:</b> Connect with legal experts in real-time to receive immediate answers and guidance for your legal questions and concerns.</li>
                        <li><b>Professional Expertise:</b> Our team consists of experienced legal professionals with a deep understanding of various legal areas, ensuring you receive accurate and reliable advice.</li>
                        <li><b>Legal Problem-Solving:</b> Discuss legal issues, potential solutions, and strategies with experts who can help you navigate complex legal challenges.</li>
                    </ul>
                </div>
                <div className="about-info-container">
                    <h4>Expert-Backed Legal Video Chats</h4>
                    <ul>
                        <li><b>Virtual Consultations:</b> Schedule one-on-one video meetings with experienced legal experts from the comfort of your home or office.</li>
                        <li><b>Flexible Scheduling:</b> Choose appointment times that work for you, offering flexibility to accommodate your busy schedule.</li>
                        <li><b>Expertise Across Legal Fields:</b> Access a diverse panel of legal experts, each specializing in various areas of law, to meet your specific needs.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;