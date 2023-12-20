import "../stylesheets/Contact.css";
import phone from "../../../assets/phone.png";

function Contact() {
  return (
    <div className="contact-page" id="contact">
      <h2 className="contact-header">GET IN TOUCH WITH US</h2>
      <div className="send-message-container">
        <div className="left">
          <div className="input-container">
            <p className="contact-label">Full Name</p>
            <input className="contact-input" type="text" />
          </div>
          <div className="input-container">
            <p className="contact-label">Enter Valid Email Address</p>
            <input className="contact-input" type="text" />
          </div>
        </div>
        <div className="right">
          <p className="contact-label">Feedbacks</p>
          <textarea
            className="feedback-message"
            name="feedback"
            placeholder="// Let us know how we can work for you"
          ></textarea>
        </div>
      </div>
      <div className="contact-details-container">
        <div className="contact-details">
          <div className="icons mail"></div>
          <p>pristeam@gmail.com</p>
        </div>
        <div className="contact-details">
          <div className="icons phone"></div>
          <p>09XX XXX XXXX</p>
        </div>
        <div className="contact-details">
          <div className="icons fb"></div>
          <p>PRIS OFFICIAL</p>
        </div>
        <div className="contact-details">
          <div className="icons web"></div>
          <p>www.pris.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
