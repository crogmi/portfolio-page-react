import React from "react";
import "./Contact.css";

const Contact = () => {
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
                        <button className="contact-button" type="button">
                            Start a Conversation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;