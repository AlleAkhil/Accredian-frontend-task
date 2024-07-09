import React, { useState } from 'react';
import axios from 'axios';

const ReferralModal = ({ closeModal, openConfirmationModal }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    refereeName: '',
    refereeEmail: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.referrerName) newErrors.referrerName = 'Referrer name is required';
    if (!formData.refereeName) newErrors.refereeName = 'Referee name is required';
    if (!formData.refereeEmail) newErrors.refereeEmail = 'Referee email is required';
    else if (!validateEmail(formData.refereeEmail)) newErrors.refereeEmail = 'Invalid email format';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post('https://accredian-backend-task-ylvp.onrender.com/api/referrals', formData);
      openConfirmationModal('Data inserted successfully!');
      closeModal();
    } catch (error) {
      console.error('Error submitting form:', error);
      openConfirmationModal('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Referral Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="referrerName">Referrer Name</label>
            <input
              id="referrerName"
              name="referrerName"
              type="text"
              value={formData.referrerName}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.referrerName ? 'border-red-500' : ''}`}
              required
            />
            {errors.referrerName && <p className="text-red-500 text-xs italic">{errors.referrerName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="refereeName">Referee Name</label>
            <input
              id="refereeName"
              name="refereeName"
              type="text"
              value={formData.refereeName}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.refereeName ? 'border-red-500' : ''}`}
              required
            />
            {errors.refereeName && <p className="text-red-500 text-xs italic">{errors.refereeName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="refereeEmail">Referee Email</label>
            <input
              id="refereeEmail"
              name="refereeEmail"
              type="email"
              value={formData.refereeEmail}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.refereeEmail ? 'border-red-500' : ''}`}
              required
            />
            {errors.refereeEmail && <p className="text-red-500 text-xs italic">{errors.refereeEmail}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferralModal;
