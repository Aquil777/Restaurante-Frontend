'use client'
import React, { useState } from 'react'
import './booking.css'
import SectionTitle from '@/components/SectionTitle';
import WhatsAppButton from '@/components/WhatsappBtn';


function Booking() {
    const initialState = {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        people: '',
        message: '',
        validate: '',
    };

    const [text, setText] = useState(initialState);

    const handleTextChange = (e: Event | any) => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value, validate: '' });
    };

    const handleSubmitBooking = async (e: Event | any) => {
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
            const res = await fetch('http://localhost:3000/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(text),
            });

            setText({...text, validate: 'loading'});

            const result = await res.json();
            if (result) {
                setText({ ...text, validate: 'success' });	
                console.log('Success', result);
            }
        } catch (e) {
            console.error(e);
        }
    };

  return (
    <section id="book-a-table" className="book-a-table">
        <div className="container" data-aos="fade-up">
            <SectionTitle title="Reservation" subtitle="Book a Table" />

            <form
                onSubmit={handleSubmitBooking}
                className='booking-form'
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <div className="row">
                    <div className="col-lg-4 col-md-6 form-group">
                        <input 
                            type="text"
                            name="name"
                            value={text.name}
                            className='form-control'
                            placeholder='Your Name'
                            onChange={handleTextChange}
                         />
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                        <input 
                            type="email"
                            name="email"
                            value={text.email}
                            className='form-control'
                            placeholder='Your Email'
                            onChange={handleTextChange}
                         />
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                        <input 
                            type="text"
                            name="phone"
                            value={text.phone}
                            className='form-control'
                            placeholder='Your Phone'
                            onChange={handleTextChange}
                         />
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mt-3">
                        <input 
                            type="date"
                            name="date"
                            value={text.date}
                            className='form-control'
                            placeholder='Date'
                            onChange={handleTextChange}
                         />
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mt-3">
                        <input 
                            type="time"
                            name="time"
                            value={text.time}
                            className='form-control'
                            placeholder='Time'
                            onChange={handleTextChange}
                         />
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mt-3">
                        <input 
                            type="number"
                            name="people"
                            value={text.people}
                            className='form-control'
                            placeholder='People'
                            onChange={handleTextChange}
                         />
                    </div>
                    <div className="col-lg-12 col-md-12 form-group mt-3">
                        <textarea 
                            name="message"
                            value={text.message}
                            className='form-control'
                            placeholder='Message'
                            onChange={handleTextChange}
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        {text.validate === 'loading' && (
                            <div className="loading">Send Booking</div>    
                        )}
                        {text.validate === 'incomplete' && (
                            <div className="error-message">All fields are required</div>
                        )}
                        {text.validate === 'success' && (
                            <div className="sent-message">Your booking has been sent. We will call back or send an email to confirm your reservation. Thank you!</div>
                        )}
                        {text.validate === 'error' && (
                            <div className="error-message">Something went wrong in the server. Please try again later.</div>
                        )}
                    </div>
                    <div className="text-center">
                        <button type="submit">Book a Table</button>
                    </div>
                    {/* <div className="d-flex justify-content-center gap-3 mt-3">
                        <button type="submit">Book a Table</button>
                        <WhatsAppButton
                            number="258877937188"
                            message={`*New Booking Request*\n Name: ${text.name}\n Email: ${text.email}\n Phone: ${text.phone}\n Date: ${text.date}\n Time: ${text.time}\n People: ${text.people}\n Message: ${text.message || 'No message'}`}
                        />
                    </div> */}

                    
                </div>
            </form>
        </div>
    </section>
  )
}

export default Booking