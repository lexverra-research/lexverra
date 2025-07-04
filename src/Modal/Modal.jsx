import React, { use, useRef } from 'react'
import './Modal.css'
import ConsultantForm from '../Form/ConsultantForm'
import { X } from 'lucide-react';
const Modal = ({setModal}) => {
    const [value, setValue] = React.useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });
const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }
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
    }

    const ref=useRef(null);
    const closeModal = (e) => {
        if(ref.current === e.target) {
            setModal();
        }
    }
  return (
    <div className='modal-container' ref={ref} onClick={closeModal}>
        <div className="contact-form modal-form" >
        <div className="modal-close" onClick={setModal}><X/></div>
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
    </div>
  )
}

export default Modal