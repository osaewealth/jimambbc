import React from 'react';
import { CheckCircle, Users, Factory, Award, Target, Heart, Zap } from 'lucide-react';
import storyImg from '../assets/Jimam General/story.jpg';
import whoWeAreImg from '../assets/Jimam General/6.jpg';
import visionImg from '../assets/Jimam General/4.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Quality Assurance',
      description: 'At JIMAM COMPANY LTD, quality is our top priority. We adhere to rigorous quality standards, employing skilled craftsmen, utilizing premium materials, and implementing best practices to ensure superior construction outcomes that exceed client expectations'
    },
    {
      icon: Heart,
      title: 'Safety and Compliance',
      description: 'Safety is ingrained in our culture, and we are committed to maintaining safe worksites for our employees, subcontractors, and stakeholders. We strictly adhere to industry regulations and implement comprehensive safety protocols to mitigate risks and promote a culture of safety excellence'
    },
    {
      icon: Zap,
      title: 'Our Team',
      description: 'Our success is driven by our dedicated team of professionals who bring a wealth of experience, expertise, and passion to every project. From skilled craftsmen and project managers to engineers and architects, our team collaborates seamlessly to deliver exceptional results.'
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
              <h2 className="text-3xl lg:text-4xl font-bold text-[#650909] mb-6">Who We Are</h2>
              <p className="text-lg text-black mb-6 text-justify">
                JIMAM COMPANY LTD is a leading construction firm committed to delivering high-quality, innovative, and sustainable construction solutions. The company is also into the production of clay burnt bricks and tiles. With a rich history spanning over 10 years, we have earned a reputation for excellence, reliability, and integrity in the construction industry. Our dedication to client satisfaction and our passion for construction excellence drive everything we do.
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#650909] mb-6">What We Do</h2>
              <ul className="list-disc pl-6 space-y-3 text-black text-justify">
                <li><b>General Contracting:</b> Our experienced team of professionals manages all aspects of the construction process, from pre-construction planning to project completion, ensuring smooth execution and timely delivery.</li>
                <li><b>Design-Build:</b> By integrating design and construction services, we streamline the construction process, minimize risks, and optimize project outcomes, providing clients with cost-effective and efficient solutions.</li>
                <li><b>Construction Management:</b> Our construction management services offer clients expert guidance and oversight throughout the construction process, from project planning and scheduling to budget management and quality control.</li>
                <li><b>Renovation and Remodeling:</b> Whether it's revitalizing existing structures or transforming spaces to meet evolving needs, our renovation and remodeling services breathe new life into buildings, enhancing functionality, aesthetics, and value.</li>
                <li><b>Green Building Solutions:</b> Committed to sustainability, we offer green building solutions that reduce environmental impact, enhance energy efficiency, and promote healthier indoor environments, aligning with our clients' sustainability goals.</li>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#650909] mb-4">Why Choose Jimam Bricks?</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Consistency & Quality, Technical Expertise, and a Customer-Centric Approach set us apart. Our products meet rigorous standards, our team brings years of experience, and we believe in building trust with every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-brand-white rounded-xl shadow-lg p-8 text-center border border-black hover:border-[#650909]">
                <div className="bg-[#650909] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-brand-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#650909] mb-4">{value.title}</h3>
                <p className="text-black">{value.description}</p>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-[#650909] mb-6">Our Vision</h2>
              <p className="text-lg text-black mb-8 text-justify">
                To be the most trusted name in brick manufacturing and construction solutions across West Africa, known for quality, innovation, and social impact.
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#650909] mb-6">Our Mission</h2>
              <p className="text-lg text-black text-justify">
                At JIMAM COMPANY LTD, our mission is to be first choose home solution for Africa and beyond, providing affordable houses that transcend generations.
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