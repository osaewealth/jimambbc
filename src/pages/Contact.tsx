import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import yuyuImg from '../assets/Jimam General/yuyu.webp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent('New Quote Request from Jimam Bricks Website');
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}

Message:
${formData.message}

---
This message was sent from the Jimam Bricks website contact form.
    `);
    
    // Open email client with CEO email
    window.location.href = `mailto:ceo@jimambricks.com?subject=${subject}&body=${body}`;
    
    // Also log for debugging
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Ghana', '(Contact for directions)']
    },
    {
      icon: Phone,
      title: 'Phone/WhatsApp',
      details: ['+233 50 527 7493']
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: ['ceo@jimambricks.com', 'info@jimambricks.com']
    },
    {
      icon: Mail,
      title: 'Website',
      details: ['www.jimambricks.com']
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section
        className="relative text-white py-16 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${yuyuImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white">
              Ready to start your project? Get in touch with our team for expert advice, 
              quality materials, and exceptional service. We're here to help bring your 
              construction vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#650909] mb-6">
                Get a Free Quote
              </h2>
              <p className="text-black mb-8">
                Fill out the form below and we'll get back to you within 24 hours with 
                a detailed quote for your project.
              </p>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-green-700">Thank you! We'll be in touch soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="(234) 567-8900"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="renovation">Renovation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Please describe your project, including materials needed, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  icon={<Send className="w-5 h-5" />}
                >
                  Send Quote Request
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#650909] mb-6">
                  Contact Information
                </h2>
                <p className="text-black mb-8">
                  Reach out to us through any of the following channels. Our team is ready 
                  to assist you with all your building material needs.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="bg-[#650909]/10 p-3 rounded-lg mr-4">
                        <info.icon className="w-6 h-6 text-[#650909]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            info.title === 'Phone/WhatsApp' ? (
                              <p key={idx} className="text-gray-600">
                                <a href="tel:+233505277493" className="text-[#650909] hover:underline">{detail}</a> |{' '}
                                <a href="https://wa.me/233505277493" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp Chat</a>
                              </p>
                            ) : info.title === 'E-mail' ? (
                              <p key={idx} className="text-gray-600">
                                <a href={`mailto:${detail}`} className="text-[#650909] hover:underline">{detail}</a>
                              </p>
                            ) : info.title === 'Website' ? (
                              <p key={idx} className="text-gray-600">
                                <a href="https://www.jimambricks.com" className="text-[#650909] hover:underline" target="_blank" rel="noopener noreferrer">{detail}</a>
                              </p>
                            ) : (
                              <p key={idx} className="text-gray-600">{detail}</p>
                            )
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-red-800 mb-2">Emergency Deliveries</h3>
                <p className="text-red-700 text-sm mb-3">
                  Need materials urgently? Our emergency delivery service is available 
                  24/7 for critical construction projects at additional cost.
                </p>
                <a
                  href="tel:+233505277493"
                  className="text-red-600 font-medium hover:text-red-800 transition-colors"
                >
                  Emergency Line: +233 50 527 7493
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#650909] mb-4">
              Visit Our Facility
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Come see our manufacturing facility and material warehouse. We welcome 
              contractors and builders to visit and inspect our products firsthand.
            </p>
          </div>

          {/* Embedded Map */} 
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.191737626375!2d-0.9258985756158197!3d5.232551386818713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfde175098a2d4cd%3A0x9eace33f80780c3a!2sJimam%20Company%20LTD!5e0!3m2!1sen!2sgh!4v1753706074625!5m2!1sen!2sgh" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Jimam Company LTD Location"
              className="w-full"
            ></iframe>
          </div>

          {/* Facility Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-[#650909]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#650909]" />
              </div>
              <h3 className="font-semibold text-[#650909] mb-2">Easy Access</h3>
              <p className="text-black text-sm">
                Located on Industrial Avenue with easy truck access and loading facilities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#650909]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#650909]" />
              </div>
              <h3 className="font-semibold text-[#650909] mb-2">Extended Hours</h3>
              <p className="text-black text-sm">
                Open Monday through Saturday with flexible scheduling for large orders
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#650909]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-[#650909]" />
              </div>
              <h3 className="font-semibold text-[#650909] mb-2">Expert Consultation</h3>
              <p className="text-black text-sm">
                Our material specialists are available for on-site consultations and advice
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;