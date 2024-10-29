import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 2rem auto;
  background: #fff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.7rem;
  border: none;
  background-color: #4CAF50;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 1rem;
`;

const Message = styled.p`
  color: ${({ success }) => (success ? 'green' : 'red')};
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center;
`;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ message: '', success: false });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your actual EmailJS Service ID, Template ID, and Public Key (User ID)
    const serviceId = 'service_fi9qskj';
    const templateId = 'template_8dk1vdp';
    const publicKey = '2NfWrTtTa9EPEV2va';

    emailjs.send(serviceId, templateId, form, publicKey)
      .then((response) => {
        setStatus({ message: 'Message sent successfully!', success: true });
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setStatus({ message: 'Failed to send message. Please try again.', success: false });
        console.error('EmailJS Error:', error); // Log error for debugging
      });
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
      <h2>Contact Me</h2>
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <Textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
      />
      <Button type="submit">Send Message</Button>
      {status.message && (
        <Message success={status.success}>{status.message}</Message>
      )}
    </ContactForm>
  );
};

export default Contact;
