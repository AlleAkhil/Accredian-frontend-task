import React, { useState } from 'react';

const FAQ = () => {
    const [activeTab, setActiveTab] = useState('eligibility');
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    const tabs = [
        {
            key: 'eligibility',
            label: 'Eligibility',
            questions: [
                {
                    question: 'Do I need to have prior Product Management and Project Management experience to enroll in the program?',
                    answer: 'No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.',
                },
                {
                    question: 'What is the minimum system configuration required?',
                    answer: 'The minimum system configuration required is ...',
                },
            ],
        },
        {
            key: 'howToUse',
            label: 'How To Use?',
            questions: [
                {
                    question: 'How do I access the course materials?',
                    answer: 'You can access the course materials through our online portal after enrollment.',
                },
                {
                    question: 'Can I download the course materials?',
                    answer: 'Yes, you can download the course materials for offline use.',
                },
            ],
        },
        {
            key: 'terms',
            label: 'Terms & Conditions',
            questions: [
                {
                    question: 'What is the refund policy?',
                    answer: 'The refund policy is ...',
                },
                {
                    question: 'What are the terms and conditions for using the course materials?',
                    answer: 'The terms and conditions for using the course materials are ...',
                },
            ],
        },
    ];

    const activeTabData = tabs.find(tab => tab.key === activeTab);

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center sm:text-left" data-aos="fade-up">
                Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <div className="mt-8 flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0" data-aos="fade-right">
                    <nav className="flex flex-col">
                        {tabs.map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`py-2 px-4 rounded-lg mb-2 text-center md:text-left ${activeTab === tab.key ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="md:w-3/4 md:pl-8">
                    {activeTabData.questions.map((question, index) => (
                        <div key={index} className="mb-4" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                            <button
                                className="w-full text-left text-gray-900 font-medium focus:outline-none"
                                onClick={() => toggleQuestion(index)}
                            >
                                {question.question}
                                <span className="float-right">{activeQuestion === index ? '−' : '+'}</span>
                            </button>
                            {activeQuestion === index && (
                                <p className="mt-2 text-gray-600">
                                    {question.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-8 flex justify-center" data-aos="fade-up">
                <div className="bg-blue-600 text-white py-4 px-6 rounded-lg text-center">
                    <h3 className="text-lg font-bold">Want to delve deeper into the program?</h3>
                    <p className="mt-2">Share your details to receive expert insights from our program team!</p>
                    <button className="mt-4 bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-100">
                        Get in touch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
