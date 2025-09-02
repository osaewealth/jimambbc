import React, { useState } from "react";
// Import your individual images.
import img1 from "../assets/Jimam General/new1.jpg";
import img2 from "../assets/Jimam General/new2.jpg";
import img3 from "../assets/Jimam General/new3.jpg";
import img4 from "../assets/jimam-construction/Picture1.jpg";
import img5 from "../assets/jimam-construction/Picture2.jpg";
import img6 from "../assets/jimam-construction/Picture3.jpg";
import img7 from "../assets/jimam-construction/Picture4.jpg";
import img8 from "../assets/jimam-construction/Picture5.jpg";
import img9 from "../assets/jimam-construction/Picture6.jpg";
import img10 from "../assets/jimam-construction/Picture7.jpg";
import img11 from "../assets/jimam-realestate/Picture8.jpg";
import img12 from "../assets/jimam-realestate/Picture9.jpg";
import img13 from "../assets/jimam-realestate/Picture10.jpg";
import img14 from "../assets/jimam-realestate/Picture11.jpg";
import img15 from "../assets/Jimam General/Picture12.png";
import heroBg from "../assets/Jimam General/ty.jpg";
import { Helmet } from "react-helmet";

// Import your new ImageGalleryModal component
import ImageGalleryModal from "../components/ImageModal"; // Assuming this is your file name
import Button from "../components/Button";

type Project = {
  thumbnail: string; // Add a thumbnail to display on the card
  images: string[];
  caption: string;
};

const Portfolio: React.FC = () => {
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalCaption, setModalCaption] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const openModal = (images: string[], caption: string) => {
    setModalImages(images);
    setModalCaption(caption);
    setCurrentImageIndex(0); // Always start at the first image
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImages([]);
    setModalCaption("");
    setCurrentImageIndex(0);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % modalImages.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + modalImages.length) % modalImages.length
    );
  };

  const projects: Project[] = [
    {
      thumbnail: img1, // Use the first image as the thumbnail
      images: [img1, img2, img3, img15],
      caption: "MODERN HOME",
    },
    {
      thumbnail: img4, // Use the first image of this set as the thumbnail
      images: [img4, img5, img6, img7, img8, img9, img10],
      caption: "CONSTRUCTION PROJECT",
    },
    {
      thumbnail: img12, // Use the first image of this set as the thumbnail
      images: [img12, img13, img14, img11],
      caption: "REAL ESTATE DEVELOPMENT",
    },
    // Add more projects with multiple images as needed
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <Helmet>
        <title>Premium Bricks for Construction | Jimambricks</title>
        <meta
          name="description"
          content="Buy durable, affordable, and eco-friendly bricks from Jimambricks. Perfect for modern construction projects in Ghana."
        />
        <meta
          name="keywords"
          content="bricks, blocks, construction, Ghana, Jimambricks"
        />
        <link rel="jimambricks" href="https://jimambricks.com/" />
      </Helmet>
      {/* Hero Section remains the same */}
      <section
        className="relative text-white py-16 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Project Portfolio
            </h1>
            <p className="text-xl text-white">
              Explore our completed projects showcasing the versatility and
              quality of our building materials.
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
                onClick={() => openModal(project.images, project.caption)}
              >
                <img
                  src={project.thumbnail}
                  alt={project.caption}
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
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

      {/* Call to Action remains the same */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#650909]">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let our team help you choose the perfect materials. Get in touch for
            a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button to="/contact" variant="primary" size="lg">
              Get Free Consultation
            </Button>
            <Button
              href="https://wa.me/233505277493"
              variant="outline"
              size="lg"
            >
              <span className="hidden sm:inline">
                WhatsApp: +233 50 527 7493
              </span>
              <span className="sm:hidden">WhatsApp</span>
            </Button>
          </div>
        </div>
      </section>

      {/* The Image Gallery Modal now receives the necessary props */}
      <ImageGalleryModal
        isOpen={isModalOpen}
        images={modalImages}
        caption={modalCaption}
        onClose={closeModal}
        currentImageIndex={currentImageIndex}
        onNext={showNextImage}
        onPrev={showPrevImage}
      />
    </div>
  );
};

export default Portfolio;
