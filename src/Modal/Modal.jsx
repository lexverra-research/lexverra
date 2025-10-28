import React, {  useRef } from 'react'
import './Modal.css'
import ConsultantForm from '../Form/ConsultantForm'
import { X } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    
      const iframe = document.createElement("iframe");
      iframe.name = "hidden_iframe";
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    
      const form = document.createElement("form");
      form.action = "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";
      form.method = "POST";
      form.target = "hidden_iframe";
    
      const fields = {
        oid: "00DgL000006FQTP",
        retURL: "https://www.lexverraresearch.com/", // or any dummy URL
        last_name: value.name,
        email: value.email,
        phone: value.phone,
        company: value.company,
        description: value.message,
        "00NgL0000282Ozt": value.service,
      };
    
      Object.entries(fields).forEach(([key, val]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = val;
        form.appendChild(input);
      });
    
      document.body.appendChild(form);
      form.submit();
    
      toast.success("Your request has been submitted!");
      setValue({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    
      setTimeout(() => {
        setModal();
      }, 1500);
    };

    const ref=useRef(null);
    const closeModal = (e) => {
        if(ref.current === e.target) {
            setModal();
        }
    }
  return (
    <div className='modal-container' ref={ref} onClick={closeModal}>
      <ToastContainer position="top-center" autoClose={2000} />
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