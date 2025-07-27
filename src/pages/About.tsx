import React from 'react';
import { CheckCircle, Users, Factory, Award, Target, Heart, Zap } from 'lucide-react';
import storyImg from '../assets/Jimam General/story.jpg';
import whoWeAreImg from '../assets/Jimam General/6.jpg';
import visionImg from '../assets/Jimam General/4.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Consistency & Quality',
      description: 'Our products meet rigorous standards and are tested to ensure durability in all weather conditions.'
    },
    {
      icon: Heart,
      title: 'Technical Expertise',
      description: 'Our team of engineers, technicians, and project managers bring years of industry experience to every project.'
    },
    {
      icon: Zap,
      title: 'Customer-Centric Approach',
      description: 'We believe in building more than structures—we build trust. From your first inquiry to final delivery, we ensure a seamless and satisfying experience.'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'Green Building Council Member',
    'Local Building Standards Certified',
    'Environmental Safety Compliance'
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section
        className="relative text-brand-white py-16 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${storyImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
             Welcome to Jimam Bricks – The Epitome of Brick Manufacturing and Construction Excellence
            </h1>
          
          </div>
        </div>
      </section>

      {/* Who We Are & What We Do */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-6">Who We Are</h2>
              <p className="text-lg text-brand-black mb-6">
                Jimam Bricks is a premier brick manufacturing and construction company committed to producing durable, 
                eco-friendly, and aesthetically superior bricks for residential, commercial, and industrial use. Whether you're building a home, a school, or a complex infrastructure project, we are your trusted partner for quality materials and expert advice.
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-6">What We Do</h2>
              <ul className="list-disc pl-6 space-y-3 text-brand-black">
                <li><b>High-Quality Brick Manufacturing:</b> Our bricks are made using the finest raw materials and modern techniques to ensure consistency, strength, and long-lasting performance.</li>
                <li><b>Custom Construction Solutions:</b> We work with developers, contractors, and homeowners to deliver tailored construction solutions that match project goals and budgets.</li>
                <li><b>Sustainable Practices:</b> Sustainability is at the heart of our operations. We use environmentally responsible processes to reduce waste and minimize our impact on the environment.</li>
              </ul>
            </div>
            <div className="relative">
              <img
                src={whoWeAreImg}
                alt="Jimam Bricks facility - Who We Are"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-blue text-brand-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">Legacy of Quality</div>
                <div className="text-sm">Trusted in Ghana’s construction industry</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-4">Why Choose Jimam Bricks?</h2>
            <p className="text-xl text-brand-black max-w-3xl mx-auto">
              Consistency & Quality, Technical Expertise, and a Customer-Centric Approach set us apart. Our products meet rigorous standards, our team brings years of experience, and we believe in building trust with every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-brand-white rounded-xl shadow-lg p-8 text-center border border-brand-blue">
                <div className="bg-brand-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-brand-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-blue mb-4">{value.title}</h3>
                <p className="text-brand-black">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-6">Our Vision</h2>
              <p className="text-lg text-brand-black mb-8">
                To be the most trusted name in brick manufacturing and construction solutions across West Africa, known for quality, innovation, and social impact.
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue mb-6">Our Mission</h2>
              <p className="text-lg text-brand-black">
                To provide top-grade bricks and construction services that empower communities, support sustainable development, and inspire excellence in every build.
              </p>
            </div>
            <div className="relative">
              <img
                src={visionImg}
                alt="Jimam Bricks - Our Vision"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-6 -left-6 bg-brand-white p-4 rounded-lg shadow-lg">
                <Factory className="w-8 h-8 text-brand-blue" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;