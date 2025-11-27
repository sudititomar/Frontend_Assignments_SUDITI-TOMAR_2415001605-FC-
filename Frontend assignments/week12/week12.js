import React, { useState } from "react";

function Card({ image, title, description }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 16, width: 220, margin: 8 }}>
      <img src={image} alt={title} style={{ width: "100%" }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} /><br/>
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br/>
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} /><br/>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div>
          <h4>Submitted Data:</h4>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Message: {submitted.message}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: "flex" }}>
        <Card image="laptop.jpg" title="Laptop" description="Fast laptop" />
        <Card image="phone.jpg" title="Phone" description="Smartphone" />
      </div>

      <h2>Contact</h2>
      <ContactForm />
    </div>
  );
}

export default App;
