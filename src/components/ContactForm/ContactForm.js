import React from "react";
import "./ContactForm.css";

const ContactForm = (props) => {
    const { open, onClick } = props;

    return (
        <div className={`form ${open ? "open" : ""}`}>
            <div className="contact-form-container">
                <div className="exit" onClick={onClick}>
                    <div className="exit-line-1" />
                    <div className="exit-line-2" />
                </div>
                <form className="form-container">
                    <div className='form-item'>
                        <label for="first-name"
                               className="form-label">
                            First Name:
                        </label>
                        <input type="text"
                                id="first-name"
                                name="first-name"
                                placeholder="Your name"
                                className="form-input" required/>
                    </div>
                    <div className="form-item">
                        <label for="last-name"
                                   className="form-label">
                                Last Name:
                            </label>
                            <input type="text"
                                    id="last-name"
                                    name="last-name"
                                    placeholder="Your name"
                                    className="form-input" required/>
                    </div>
                    <div className="form-item">
                        <label for="email"
                               className="form-label">
                            Email:
                        </label>
                        <input type="text"
                                id="email"
                                name="email"
                                placeholder="Ex: chris@gmail.com"
                                className="form-input" required/>
                    </div>
                    <div className="form-item">
                        <label for="reason"
                                className="form-label">
                            Reason:
                        </label>
                        <select id="reason"
                                name="reason"
                                className="form-input" required>
                            <option value="project">Project</option>
                            <option value="collaboration">Collaboration</option>
                            <option value="chat">Chat</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-item-vertical">
                        <label for="inquiry"
                               className="form-label"
                               id="inquiry-label">
                            Inquiry:
                        </label>
                        <textarea type="text"
                                    id="inquiry"
                                    name="inquiry"
                                    placeholder="Type your message here" required/>
                    </div>
                    <input type="submit"
                            value="Submit"
                            className="button form-button"
                            onClick={onClick} />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
