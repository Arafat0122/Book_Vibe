import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() === '') {
      toast.error('Please enter your email address.');
    } else {
      // Send the email to your backend or API for subscription handling
      // For demonstration purposes, we'll just show a success message
      toast.success(`Thank you for subscribing! You will receive our newsletter at ${email}.`);
      // Clear the email input field after submission
      setEmail('');
    }
  };

  return (
    <div className="newsletter-section text-center my-10 py-8 bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 rounded-lg shadow-lg">
      <h2 className="text-3xl lg:text-4xl font-semibold text-teal-800 mb-4">Stay Updated with Our Latest News</h2>
      <p className="text-lg text-gray-700 mb-6">Join our newsletter to receive updates, special offers, and more. Enter your email below to subscribe.</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        <div className="relative w-full max-w-md">
          <input
            className="w-full px-4 py-2 border bg-gray-100 border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
            required
            aria-label="Email address"
          />
          <button
            className="absolute inset-y-0 right-0 flex items-center px-4 py-2 text-white bg-teal-600 rounded-r-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default NewsletterSection;