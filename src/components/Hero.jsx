import React, { useState } from 'react';
import HeroPng from '../assets/img.png';
import ReferralModal from './ReferralModal';

const bgImage = {
  backgroundColor: '#EEF5FF',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%'
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openConfirmationModal = (message) => {
    setConfirmationMessage(message);
    setIsConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  return (
    <>
      <div style={bgImage} className="min-h-[550px] sm:min-h-[600px] flex justify-center items-center text-[#232323]">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                Let's Learn {' '}
                <br />
                &&nbsp;
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive"
                >
                  Earn
                </span>{' '}
                together
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <button
                  className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                  onClick={openModal}
                >
                  Refer & Earn
                </button>
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
            >
              <img
                data-aos-once="true"
                src={HeroPng}
                alt="hero img"
                className="w-[400px] sm:w-[550px] lg:w-[600px] mx-auto float-animation"
              />
              <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10"
              >
                <h1 className="text-white text-3xl">Refer</h1>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10"
              >
                <h1 className="text-white text-3xl">Earn</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ReferralModal
          closeModal={closeModal}
          openConfirmationModal={openConfirmationModal}
        />
      )}

      {isConfirmationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full modal-animation">
            <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
            <p className="mb-4">{confirmationMessage}</p>
            <div className="flex items-center justify-center">
              <button
                className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={closeConfirmationModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
