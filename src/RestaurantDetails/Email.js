import React, { useState } from 'react';
import axios from 'axios';

function EmailForm() {
  const [formData, setFormData] = useState({
    restaurantId: '',
    restaurantName: '',
    password: '',
    personalEmail: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-api-endpoint.com/api/email/sendingemail', formData);
      console.log(response.data);
      alert('Email sent successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to send email');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Restaurant ID:
        <input type="text" name="restaurantId" value={formData.restaurantId} onChange={handleChange} />
      </label>
      <label>
        Restaurant Name:
        <input type="text" name="restaurantName" value={formData.restaurantName} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <label>
        Personal Email:
        <input type="email" name="personalEmail" value={formData.personalEmail} onChange={handleChange} />
      </label>
      <button type="submit">Send Email</button>
    </form>
  );
}

export default EmailForm;
