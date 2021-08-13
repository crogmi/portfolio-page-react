import React from "react";
import "./ContactForm.css";

const ContactForm = (props) => {
    const { open, onClick } = props;

    return (
        <form className={`form ${open ? "open" : ""}`}>
            <div className="exit" onClick={onClick}>
                <div className="exit-line-1" />
                <div className="exit-line-2" />
            </div>
            <label for="first-name">
                First Name:
            </label>
            <input type="text" 
                   id="first-name" 
                   name="first-name" 
                   placeholder="Your name" required/>
            <label for="first-name">
                Last Name:
            </label>
            <input type="text" 
                   id="last-name" 
                   name="last-name" 
                   placeholder="Your name" required/>
            <label for="email">
                Email:
            </label>
            <input type="text"
                   id="email"
                   name="email"
                   placeholder="Ex: chris@gmail.com" required/>
            <label for="reason">
                Reason:
            </label>
            <select id="reason" 
                    name="reason" required>
                <option value="project">Project</option>
                <option value="collaboration">Collaboration</option>
                <option value="chat">Chat</option>
                <option value="other">Other</option>
            </select>
            <label for="email">
                Inquiry:
            </label>
            <textarea type="text"
                      id="inquiry"
                      name="inquiry" 
                      placeholder="Type your message here" required/>
            <input type="submit" 
                   value="Submit" 
                   className="button"
                   onClick={onClick} /> 
        </form>
    );
};

export default ContactForm;
