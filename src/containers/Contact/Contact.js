import React, { useState } from "react";
import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
    const [open, setOpen] = useState(false);

    const onClick = (event) => {
        event.preventDefault();
        setOpen(!open);
    }
    
    return (
        <section className="main-info" id="contact" >
            <div className="container">
                <div className="columns is-centered">
                    <div className="column 
                                    is-three-fifths 
                                    is-centered 
                                    text-centered 
                                    last-child">
                        <h1 className="title">
                            Let's Talk
                        </h1>
                        <h2 className="subtitle
                                       subtitle-size-2-tablet">
                            Project? Collaboration? Just want to chat?
                        </h2>
                        <h3 className="information">
                            Any reason, I'm here to talk.
                        </h3>
                        <button className="button" 
                                type="button"
                                onClick={onClick}>
                            Start a Conversation
                        </button>
                        <ContactForm open={open}
                                     onClick={onClick} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;