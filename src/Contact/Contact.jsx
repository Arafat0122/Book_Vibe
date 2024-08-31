import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        if (name && email && message) {
            toast.success('Your message has been sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } else {
            toast.error('Please fill out all fields.');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text">
                    Get in Touch
                </h1>
                <p className="text-lg lg:text-xl text-gray-700 max-w-xl mx-auto px-4">
                    We would love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out.
                    Your thoughts and inquiries are important to us, and we are here to assist you in any way we can.
                </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 text-lg font-medium mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border bg-gray-100 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-lg font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border bg-gray-100 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-lg font-medium mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full p-3 border bg-gray-100 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Your Message"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            <div className="text-center mt-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Information</h2>
                <p className="text-lg text-gray-600 mb-2">You can also reach us via:</p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Email: <a href="mailto:support@bookvibe.com" className="text-teal-600 hover:underline">support@bookvibe.com</a></li>
                    <li>Follow us on <a href="#" className="text-teal-600 hover:underline">Twitter</a> and <a href="#" className="text-teal-600 hover:underline">Facebook</a></li>
                </ul>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Contact;