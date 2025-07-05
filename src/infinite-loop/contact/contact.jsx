import React, { useState } from 'react';
import './contact.css';

const icons = [
  { icon: 'fa-regular fa-comment', text: 'Chat Online' },
  { icon: 'fa-regular fa-envelope', text: 'mail@company.com' },
  { icon: 'fa-solid fa-location-dot', text: 'Our Location' },
  { icon: 'fa-solid fa-square-phone-flip', text: '255-662-5566' },
];

const Contact = ({submit, lorem }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const addingHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handler = (e) => {
    e.preventDefault();

    const newInfo = {
      name: form.name || 'Infinite Loop',
      email: form.email || 'Bootstrap 4.0 Parallax Theme',
      message: form.message || 'Free HTML Template by TOOPLATE',
    };

    submit(newInfo);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className='contact'>
      <div>
        <div className='text'>
          <h1>Contact Us</h1>
          <p className='lorem'>{lorem}</p>
        </div>
        <div className='info'>
          <form onSubmit={handler}>
            <input className='form-control' type='text' placeholder='Your Name' name='name' value={form.name} onChange={addingHandler} />

            <input className='form-control' type='text' placeholder='Your Email' name='email' value={form.email} onChange={addingHandler} />
            <input className='form-control form3' type='text' placeholder='Message' name='message' value={form.message} onChange={addingHandler} />
            <button className='button'>Submit</button>
          </form>
          <div>
            {icons.map((item, index) => (
              <div className='icons' key={index}>
                <i className={item.icon}></i>
                <span> {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='footer'>
        <p>Copyright <i class="fa-regular fa-copyright"></i> 2025 Infinite Loop . Designed with <i class="fa-solid fa-heart-crack"></i> by ELNOZA</p>
      </div>
    </div>
  );
};

export default Contact;
