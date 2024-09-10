import React, { useState } from 'react';
import './ContactUs.css'; // Assuming you're adding styles in a separate CSS file
import Title from '../../components/Title/Title';

const ContactUs = () => {
  const [result, setResult] = useState("");
  const [phone, setPhone] = useState(""); // State for the phone number

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "51d6a1bc-0b04-4c5a-8e7c-75f523f437ef");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  
  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); 
    const formattedPhone = input.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    setPhone(formattedPhone);
  };

  return (
    <div className='contact'>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch with Us</h1>
          <p>We’re here to assist you with any questions or concerns you may have.</p>
        </div>
      </section>
      <section className="contact-info">
          <Title title ='Get in Touch'/>
        <p><strong>Telephone:</strong> (+27) 82 821 8463</p>
        <p><strong>Email:</strong> Matsaungs@proteacoin.co.za</p>

        <h2>Gijima Training Academy Physical Location</h2>
        <p><strong>Address:</strong> Plot 135 Steenbok Street, Waterval, Pyramid, Gauteng, South Africa, 0120</p>
        <p><strong>Directions to GTA:</strong> Situated just north of Pretoria in a rural setting.</p>
        <p><strong>Google Pin:</strong> <a href="https://maps.app.goo.gl/g9QKwfwdiVYJapH5A" target="_blank">Click here to view on Google Maps</a></p>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.300384024687!2d28.265848175235732!3d-25.561671277478172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfdd3c6dce21bb%3A0x9affb4d30b1f3c0f!2sGijima%20Training%20Academy%20Bidvest%20Protea%20Coin!5e0!3m2!1sen!2sza!4v1725008023267!5m2!1sen!2sza"
        width="1000"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Gijima Training Academy Location"
      ></iframe>
      </section>
      {/* Second Section */}
      <section className="contact-details">
        <p>Feel free to reach out to us via phone, email, or our online contact form.</p>
        <form onSubmit={onSubmit}>
          <h2>Contact Information</h2>
          <div className="input-box">
            <label>Please fill in your Full Name</label>
            <input type="text" className="field" placeholder="Enter your Full Name" name="name" required />
          </div>
          <div className="input-box">
            <label>Please fill in your Phone Number</label>
            <input
              type="tel"
              className="field"
              placeholder="(+27) 456-7890"
              name="phonenumber"
              value={phone}
              onChange={handlePhoneChange}
              maxLength={14} // For (123) 456-7890 format
              pattern="\(\d{3}\) \d{3}-\d{4}" // Regex pattern for validation
              required
              title="Phone number format: (123) 456-7890"
            />
          </div>
          <div className="input-box">
            <label>Please fill in your Email Address</label>
            <input type="email" className="field" placeholder="Enter your Email Address" name="email" required />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea name="message" className="field-message" placeholder="Write your message here" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>

        {/* Display form result */}
        {result && <p>{result}</p>}
      </section>
    </div>
  );
}

export default ContactUs;
