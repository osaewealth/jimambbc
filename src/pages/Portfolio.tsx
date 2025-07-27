import React, { useState } from 'react';
import { Filter, ExternalLink } from 'lucide-react';
import img1 from '../assets/Jimam General/new1.jpg';
import img2 from '../assets/Jimam General/new2.jpg';
import img3 from '../assets/Jimam General/new3.jpg';
import heroBg from '../assets/Jimam General/ty.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Residential', 'Commercial', 'Landscaping'];

  const projects = [
    {
      id: 1,
      title: 'Modern Family Home',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful 3-bedroom family home featuring our premium clay bricks',
      materials: 'Red Clay Bricks, Mortar'
    },
    {
      id: 2,
      title: 'Downtown Office Complex',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern office building with contemporary brick facade',
      materials: 'Charcoal Bricks, Steel Reinforcement'
    },
    {
      id: 3,
      title: 'Garden Pathway Project',
      category: 'Landscaping',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant walkway using clay pavers and decorative elements',
      materials: 'Clay Pavers, Sand Base'
    },
    {
      id: 4,
      title: 'Luxury Villa Construction',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-end residential project with custom brick work',
      materials: 'Premium Clay Bricks, Custom Colors'
    },
    {
      id: 5,
      title: 'Shopping Center Facade',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Large-scale commercial project with mixed brick patterns',
      materials: 'Multi-tone Bricks, Weather Sealant'
    },
    {
      id: 6,
      title: 'Backyard Patio Design',
      category: 'Landscaping',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful outdoor living space with clay paver flooring',
      materials: 'Clay Pavers, Edging Stones'
    },
    {
      id: 7,
      title: 'Traditional Townhouse',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Classic townhouse design with timeless brick appeal',
      materials: 'Traditional Red Bricks, Lime Mortar'
    },
    {
      id: 8,
      title: 'School Building Renovation',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Educational facility upgrade with durable brick materials',
      materials: 'Institutional Grade Bricks, Fire-rated Mortar'
    },
    {
      id: 9,
      title: 'Garden Wall & Seating',
      category: 'Landscaping',
      image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Decorative garden wall with integrated seating areas',
      materials: 'Decorative Bricks, Capstone'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section
        className="relative text-white py-16 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Project Portfolio
            </h1>
            <p className="text-xl text-white">
              Explore our extensive collection of completed projects showcasing the versatility 
              and quality of our building materials across residential, commercial, and 
              landscaping applications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row justify-center items-stretch gap-6">
            {/* Image 1 */}
            <div className="flex-1 flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={img1} alt="Jewel Aeida, Lekki Phase 1" className="w-full h-96 object-cover" />
              <div className="p-6 w-full">
                <h3 className="text-lg font-bold text-gray-900 mb-1">MODERN HOME</h3>
            
              </div>
            </div>
            {/* Image 2 */}
            <div className="flex-1 flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={img2} alt="Modern Home" className="w-full h-96 object-cover" />
              <div className="p-6 w-full">
                <h3 className="text-lg font-bold text-gray-900 mb-1">MODERN HOME</h3>
                
              </div>
            </div>
            {/* Image 3 */}
            <div className="flex-1 flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={img3} alt="Construction Project" className="w-full h-96 object-cover" />
              <div className="p-6 w-full">
                <h3 className="text-lg font-bold text-gray-900 mb-1">CONSTRUCTION PROJECT</h3>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let our experienced team help you choose the perfect materials for your next 
            construction project. Get in touch for a personalized consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+1234567890"
              className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center"
            >
              Call: +233 50 527 7493
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;