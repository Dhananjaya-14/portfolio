import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string;
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // EmailJS configuration
      // You'll need to replace these with your actual EmailJS credentials
      const serviceId = 'service_t4r44f5'; // Replace with your service ID
      const templateId = 'template_jagfadq'; // Replace with your template ID
      const publicKey = 'lUazy5-w_gy1IxFQR'; // Replace with your public key
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Dhananjaya', // Your name
        to_email: 'dhananjaya2859dk@gmail.com' // Your email
      };

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: '📧',
      title: 'Email',
      value: 'dhananjaya2859dk@gmail.com',
      link: 'mailto:dhana@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+94 716324240',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Kandy, Sri Lanka',
      link: '#'
    }
  ];

  const socialLinks: SocialLink[] = [
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/dhananjaya-bulumulla-777a6723b' },
    { name: 'Dribbble', icon: '🏀', url: 'https://dribbble.com' },
    { name: 'Behance', icon: '🎨', url: 'https://behance.net' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' }
  ];

  return (
    <section id="contact" className="contact section" ref={contactRef}>
      <div className="container">
        <h2 className="section-title fade-in">Get In Touch</h2>
        <p className="section-subtitle fade-in">
          Ready to start your next project? Let's create something amazing together!
        </p>

        <div className="contact-content">
          <div className="contact-info slide-in-left">
            <h3>Let's Connect</h3>
            <p className="contact-description">
              I'm always excited to hear about new projects and opportunities. 
              Whether you have a specific project in mind or just want to chat 
              about design, feel free to reach out!
            </p>

            <div className="contact-methods">
              {contactInfo.map((info: ContactInfo, index: number) => (
                <div key={index} className="contact-method">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    <a href={info.link}>{info.value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow My Work</h4>
              <div className="social-grid">
                {socialLinks.map((social: SocialLink, index: number) => (
                  <a key={index} href={social.url} className="social-link" target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form slide-in-right">
            <h3>Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                ✅ Message Sent! Thank you for reaching out. I'll get back to you soon!
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="error-message">
                ❌ Oops! Something went wrong. Please try again or contact me directly via email.
              </div>
            )}

            <form onSubmit={handleSubmit} className={submitStatus !== 'idle' ? 'hidden' : ''}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Project brief or inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 