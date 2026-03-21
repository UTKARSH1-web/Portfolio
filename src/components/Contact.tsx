import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:utkarshpareek70@gmail.com" data-cursor="disable">
                utkarshpareek70@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.E in Electronics and Communication</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/UTKARSH1-web"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/utkarshpareek"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.geeksforgeeks.org/profile/coolutk007"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              GeeksforGeeks <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/coolutk007/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Leetcode <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Utkarsh Pareek</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
