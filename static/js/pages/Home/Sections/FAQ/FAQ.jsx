import React from 'react';
import Classes from './Faq.module.css';
import ContactCards from './AccordionMUI.jsx';

export default function FAQ() {
    return (
        <section className={Classes.hero} id="faq-section">
            <div className={Classes.container}>
                <h2>
                    Get In <span>Touch</span>
                </h2>
                <p style={{ color: '#ccc', maxWidth: '550px', margin: '0.5rem auto 0', lineHeight: '1.6' }}>
                    I'm open to full-time roles, freelance projects, and collaborations.
                    Let's build something great together.
                </p>
            </div>
            <div className={Classes.grid}>
                <div className={Classes.faqCon} style={{ marginTop: '2rem' }}>
                    <ContactCards />
                </div>
            </div>
        </section>
    );
}
