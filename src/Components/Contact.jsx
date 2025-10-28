import React, { useState } from 'react';
import './Contact.css';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [value, setValue] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', value);
    setValue({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="contact-container" id="contact">
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <div className="info-item">
          <Phone className="icon" />
          <div>
            <h3>Phone</h3>
            <p>+91 8700479671</p>
          </div>
        </div>
        <div className="info-item">
          <Mail className="icon" />
          <div>
            <h3>Email</h3>
            <p>Contact@lexverraresearch.com</p>
          </div>
        </div>
        <div className="info-item">
          <MapPin className="icon" />
          <div>
            <h3>Office</h3>
            <p>
            Noida, Uttar Pradesh, India
            </p>
          </div>
        </div>
        <hr />
        <div className="business-hours">
          <h3>Business Hours</h3>
          <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <h1>Request for Consultation</h1>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Full Name<sup>*</sup></label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={value.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email<sup>*</sup></label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={value.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="phone">Phone<sup>*</sup></label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={value.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="company">Company Name</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Enter your company name"
                value={value.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='select'>
            <label htmlFor="services">Service of Interest<sup>*</sup></label>
            <select
              id="services"
              name="service"
              value={value.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="Patent Filing">Patent Filing</option>
              <option value="Copyright Protection">Copyright Protection</option>
              <option value="Trademark Registration">Trademark Registration</option>
              <option value="IP Litigation">IP Litigation</option>
              <option value="Market Research">Market Research</option>
              <option value="Data Analysis">Data Analysis</option>
              <option value="Consulting">Consulting</option>
              <option value="Custom Solutions">Custom Solutions</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message">Message<sup>*</sup></label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={value.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
