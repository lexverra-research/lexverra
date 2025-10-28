import React, { useState } from 'react';
import './ConsultantForm.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConsultantForm = () => {
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
  
    // Create a single hidden iframe
    let iframe = document.getElementById("hidden_iframe");
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.name = "hidden_iframe";
      iframe.id = "hidden_iframe";
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }
  
    // Create a form
    const form = document.createElement("form");
    form.action = "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8";
    form.method = "POST";
    form.target = "hidden_iframe"; // static target name
  
    const fields = {
      oid: "00DgL000006FQTP",
      retURL: "https://google.com", // use production redirect later
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
  
    // Allow enough time for Salesforce to receive it before cleanup
    setTimeout(() => {
      document.body.removeChild(form);
    }, 3000);
  
    setValue({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };
  
  
  return (
    <div className="contact-form">
      <ToastContainer position="top-center" autoClose={2000} />
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
  );
};

export default ConsultantForm;