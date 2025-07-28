import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, DollarSign, Truck, Award, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import hero1 from '../assets/Jimam General/6.jpg';
import hero2 from '../assets/Jimam General/2.jpg';
import brick1 from '../assets/Bricks 1/1.jpg';
import brick2 from '../assets/Bricks 1/2.jpg';
import brick3 from '../assets/Bricks 1/3.jpg';
import ctaBg from '../assets/Jimam Final/4.jpg';

const Homepage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Durable Materials',
      description: 'High-quality clay bricks built to last for generations'
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising on quality'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery to your construction site'
    },
    {
      icon: Award,
      title: 'Decades of Experience',
      description: 'Trusted by contractors and builders since 2019'
    }
  ];

  const products = [
    {
      name: 'Classic Clay Brick',
      image: brick1,
      description: 'Premium quality classic clay bricks for all construction needs',
      alt: 'Classic Clay Brick - Bricks 1/1.jpg',
    },
    {
      name: 'Modern Clay Brick',
      image: brick2,
      description: 'Modern clay bricks for stylish and durable builds',
      alt: 'Modern Clay Brick - Bricks 1/2.jpg',
    },
    {
      name: 'Heavy Duty Block',
      image: brick3,
      description: 'Heavy duty blocks for structural and industrial projects',
      alt: 'Heavy Duty Block - Bricks 1/3.jpg',
    },
  ];

  // Hero slider logic
  const heroImages = [hero1, hero2];
  const [currentHero, setCurrentHero] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative text-brand-white overflow-hidden min-h-screen flex items-center">
        {/* Slider images */}
        {heroImages.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
              idx === currentHero ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 -translate-y-8 z-0'
            }`}
            style={{
              backgroundImage: `url(${img})`,
            }}
            aria-hidden={idx !== currentHero}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 z-30">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight text-brand-white">
              {currentHero === 0 ? (
                <>
                  Strong Foundations.<br />
                  <span className="text-brand-white">Timeless Beauty.</span>
                </>
              ) : (
                <>
                  Building Ghana’s Future.<br />
                  <span className="text-brand-white">Quality You Can Trust.</span>
                </>
              )}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-brand-white leading-relaxed">
              Premium clay bricks and building materials for contractors, builders, and homeowners. 
              Quality you can trust, craftsmanship that lasts.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
              <Button to="/portfolio" variant="primary" size="lg">
                View Products
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Slider navigation dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex justify-center space-x-3 z-40">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentHero(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full border-2 border-brand-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue
              ${currentHero === idx ? 'bg-brand-blue scale-125 shadow-lg border-brand-blue' : 'bg-brand-white/60 hover:bg-brand-blue/60'}`}
            style={{ outline: 'none' }}
          />
        ))}
      </div>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 lg:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-black mb-4">
              Our Featured Products
            </h2>
            <p className="text-lg sm:text-xl text-brand-black max-w-3xl mx-auto px-4">
              Discover our range of premium building materials crafted for durability and beauty
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-brand-black mb-2">{product.name}</h3>
                  <p className="text-sm sm:text-base text-brand-black mb-4 leading-relaxed">{product.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-[#650909] hover:text-[#4b1313] font-medium text-sm sm:text-base transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-blue mb-4">
              Why Choose Jimam Bricks?
            </h2>
            <p className="text-lg sm:text-xl text-brand-black max-w-3xl mx-auto px-4">
              We've been the trusted choice for quality building materials for nearly four decades
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group p-4 sm:p-6 bg-brand-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-brand-blue">
                <div className="bg-brand-blue w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-brand-black transition-all duration-300 shadow-md">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-brand-blue mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-brand-black leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-[#3d2502] to-[#3d2502] text-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-brand-white">4+</div>
              <div className="text-sm sm:text-base text-brand-white">Years Experience</div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-brand-white">100+</div>
              <div className="text-sm sm:text-base text-brand-white">Projects Completed</div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-brand-white">50+</div>
              <div className="text-sm sm:text-base text-brand-white">Happy Clients</div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-brand-white">24/7</div>
              <div className="text-sm sm:text-base text-brand-white">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-12 sm:py-16 lg:py-24 relative text-brand-white"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 relative z-10">
            Start Your Project Today
          </h2>
          <p className="text-lg sm:text-xl text-brand-white mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed relative z-10">
            Ready to build something amazing? Get in touch with our team for a free consultation 
            and quote on your next construction project.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center relative z-10">
            <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}>
              Get Free Quote
            </Button>
            <Button href="tel:+233505277493" variant="outline" size="lg">
              <span className="hidden sm:inline">Call Now: +233 50 527 7493</span>
              <span className="sm:hidden">Call Now</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;