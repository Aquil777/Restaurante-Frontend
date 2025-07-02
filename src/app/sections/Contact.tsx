'use client'
import React, { useState } from 'react'
import './contact.css'
import SectionTitle from '@/components/SectionTitle'
import WhatsAppButton from '@/components/WhatsappBtn';

const initialState = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  people: '',
  subject: '',
  message: '',
  validate: '',
};

function Contact() {
  const [text, setText] = useState(initialState);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value, validate: '' });
  };

  const handleSubmitBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      text.name === '' ||
      text.email === '' ||
      text.phone === '' ||
      text.date === '' ||
      text.time === '' ||
      text.people === ''
    ) {
      setText({ ...text, validate: 'incomplete' });
      return;
    }

    try {
      setText({ ...text, validate: 'loading' });

      const res = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(text),
      });

      const result = await res.json();
      if (result) {
        setText({ ...initialState, validate: 'success' });
        console.log('Success', result);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Contact" subtitle="Contact Us" />
      </div>

      <div data-aos="fade-up">
        <iframe
          style={{ border: '0', width: '100%', height: '350px' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7174.324963342926!2d32.56477293375401!3d-25.962711053580158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69ae2f30ebbc5%3A0x427930b596566e6a!2sKFC%20Freedom%20Park!5e0!3m2!1sen!2smz!4v1745929249708!5m2!1sen!2smz"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="open-hours">
                <i className="bi bi-clock"></i>
                <h4>Open Hours:</h4>
                <p>
                  Monday-Saturday:<br />
                  11:00 AM - 11:00 PM
                </p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>8kY6K@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form role="form" className="contact-form" onSubmit={handleSubmitBooking}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    value={text.name}
                    onChange={handleTextChange}
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={text.email}
                    onChange={handleTextChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  value={text.subject}
                  onChange={handleTextChange}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  value={text.message}
                  onChange={handleTextChange}
                  required
                ></textarea>
              </div>
              <div className="my-3">
                {text.validate === 'loading' && <div className="loading">Loading</div>}
                {text.validate === 'incomplete' && <div className="error-message">Please fill in all required fields.</div>}
                {text.validate === 'success' && <div className="sent-message">Your message has been sent. Thank you!</div>}
              </div>

              {/* <div className="d-flex justify-content-center gap-3 mt-3">
                <button type="submit">Send Message</button>
                <WhatsAppButton
                  number="258877937188"
                  message={`*Good Afternoon*\n👤 Name: ${text.name}\n Email: ${text.email}\n Subject: ${text.subject}\n Message: ${text.message || 'No message'}`}
                />
              </div> */}
              
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
