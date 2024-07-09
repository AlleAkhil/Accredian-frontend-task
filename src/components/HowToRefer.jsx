import React from 'react';

const HowToRefer = () => {
    const steps = [
        {
            icon: '👤',
            title: 'Submit referrals',
            description: 'Submit referrals easily via our website’s referral section.',
        },
        {
            icon: '🏆',
            title: 'Earn rewards',
            description: 'Earn rewards once your referral joins an Accredian program.',
        },
        {
            icon: '💰',
            title: 'Receive bonus',
            description: 'Both parties receive a bonus 30 days after program enrollment.',
        },
    ];

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center" data-aos="fade-up">
                How Do I <span className="text-blue-600">Refer?</span>
            </h2>
            <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                        data-aos="fade-up"
                        data-aos-delay={`${index * 200}`}
                    >
                        <div className="text-4xl text-blue-600 mb-4">{step.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-gray-600 mt-2">{step.description}</p>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-center">
                <button
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transform transition-transform duration-300 hover:scale-105"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    Refer Now
                </button>
            </div>
        </div>
    );
};

export default HowToRefer;
