import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10 mt-20">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    {/* Logo and Description */}
                    <div className="mb-6 lg:mb-0">
                        <h1 className="text-3xl font-extrabold text-teal-400">Book Vibe</h1>
                        <p className="mt-2 text-gray-400">Bringing the world of books closer to you. Explore, read, and connect with your favorite authors and genres.</p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col lg:flex-row lg:space-x-12 mb-6 lg:mb-0">
                        <div className="mb-6 lg:mb-0">
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-teal-300">Home</a></li>
                                <li><a href="#" className="hover:text-teal-300">About Us</a></li>
                                <li><a href="#" className="hover:text-teal-300">Contact</a></li>
                                <li><a href="#" className="hover:text-teal-300">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                                    <FaFacebookF size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                                    <FaTwitter size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                                    <FaInstagram size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                                    <FaLinkedinIn size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Book Vibe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;