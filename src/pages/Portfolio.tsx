import React, { useState } from 'react';
import img1 from '../assets/Jimam General/new1.jpg';
import img2 from '../assets/Jimam General/new2.jpg';
import img3 from '../assets/Jimam General/new3.jpg';
import heroBg from '../assets/Jimam General/ty.jpg';
import Button from '../components/Button';
import ImageModal from '../components/ImageModal';

type Project = {
  img: string;
  caption: string;
};

const Portfolio: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalCaption, setModalCaption] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (src: string, caption: string) => {
    setModalImage(src);
    setModalCaption(caption);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    setModalCaption('');
  };

  const projects: Project[] = [
    { img: img1, caption: 'MODERN HOME' },
    { img: img2, caption: 'MODERN HOME' },
    { img: img3, caption: 'CONSTRUCTION PROJECT' },
  ];

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
              Explore our completed projects showcasing the versatility and quality of our building materials.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                onClick={() => openModal(project.img, project.caption)}
              >
                <img src={project.img} alt={project.caption} className="w-full h-96 object-cover" />
                <div className="p-6 w-full">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">
                    {project.caption}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#650909]">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let our team help you choose the perfect materials. Get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button to="/contact" variant="primary" size="lg">
              Get Free Consultation
            </Button>
            <Button href="tel:+233505277493" variant="outline" size="lg">
              Call: +233 50 527 7493
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        imageSrc={modalImage}
        caption={modalCaption}
        onClose={closeModal}
      />
    </div>
  );
};

export default Portfolio;
