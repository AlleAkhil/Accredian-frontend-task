import React from 'react';

const Footer = () => {
    const programs = [
        'Data Science & AI',
        'Product Management',
        'Business Analytics',
        'Digital Transformation',
        'Business Management',
        'Project Management',
        'Strategy & Leadership',
        'Senior Management',
        'Fintech',
    ];

    const socialLinks = [
        { icon: '🔗', url: 'https://www.facebook.com' },
        { icon: '🔗', url: 'https://www.twitter.com' },
        { icon: '🔗', url: 'https://www.linkedin.com' },
        { icon: '🔗', url: 'https://www.instagram.com' },
        { icon: '🔗', url: 'https://www.youtube.com' },
    ];

    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between" data-aos="fade-up">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-white font-bold mb-4">Programs</h3>
                        <ul>
                            {programs.map((program, index) => (
                                <li key={index} className="mb-2">
                                    <a href="#" className="hover:underline">
                                        {program}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-white font-bold mb-4">Contact Us</h3>
                        <p>Email Us for Data Science Queries: admin@accredian.com</p>
                        <p>Email Us for Product Management Queries: admin@accredian.com</p>
                        <p>Office Address: 123 Street, City, Country</p>
                        <p>Phone: +1 234 567 890</p>
                    </div>
                    <div className="md:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-white font-bold mb-4">Why Accredian</h3>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Admission Policy</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                    <div className="md:w-1/4">
                        <h3 className="text-white font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm" data-aos="fade-up">
                    © 2024 Accredian. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
