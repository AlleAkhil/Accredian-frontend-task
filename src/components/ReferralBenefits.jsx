import React from 'react';

const ReferralBenefits = () => {
    const programs = [
        'Professional Certificate Program in Product Management',
        'PG Certificate Program in Strategic Product Management',
        'Executive Program in Data Driven Product Management',
        'Executive Program in Product Management and Digital Transformation',
        'Executive Program in Product Management',
        'Advanced Certification in Product Management',
        'Executive Program in Product Management and Project Management',
    ];

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center sm:text-left" data-aos="fade-up">
                What Are The <span className="text-blue-600">Referral Benefits?</span>
            </h2>
            <div className="mt-8 flex flex-col lg:flex-row">
                <div className="lg:w-1/4 mb-4 lg:mb-0">
                    <nav className="flex flex-col" data-aos="fade-right">
                        <a href="#" className="py-2 px-4 bg-blue-100 text-blue-700 rounded-lg mb-2 text-center lg:text-left">
                            ALL PROGRAMS
                        </a>
                        {programs.map((program, index) => (
                            <a key={index} href="#" className="py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg mb-2 text-center lg:text-left">
                                {program}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="lg:w-3/4 lg:pl-8">
                    <div className="overflow-x-auto shadow rounded-lg" data-aos="fade-left">
                        <table className="min-w-full bg-white">
                            <thead className="bg-blue-100">
                                <tr>
                                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Programs
                                    </th>
                                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Referrer Bonus
                                    </th>
                                    <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Referee Bonus
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {programs.map((program, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {program}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            ₹ 10,000
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            ₹ 10,000
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 flex justify-center lg:justify-end" data-aos="fade-up">
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                            Refer Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferralBenefits;
