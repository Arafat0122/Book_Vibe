import NewsletterSection from "../Newsletter/Newsletter";

const About = () => {
    return (
        <div className="mt-10 px-4 lg:px-8 pb-8">
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-6 rounded-lg mb-5 shadow-xl">
                <h2 className="text-2xl lg:text-4xl font-extrabold text-center text-white leading-tight">
                    Welcome to Our Bookish Haven!
                </h2>
                <p className="mt-2 text-center text-white opacity-80 lg:text-lg">
                    Discover a world of literature and immerse yourself in stories that inspire and entertain.
                </p>
            </div>

            <div className="diff aspect-[16/9] h-[200px] lg:h-[300px] rounded-xl">
                <div className="diff-item-1">
                    <div className="bg-primary text-primary-content text-5xl lg:text-9xl font-black grid place-content-center">BOOK VIBE</div>
                </div>
                <div className="diff-item-2">
                    <div className="bg-base-200 text-5xl lg:text-9xl font-black grid place-content-center">BOOK VIBE</div>
                </div>
                <div className="diff-resizer"></div>
            </div>

            <div className="mt-10 text-center bg-gray-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                    Our Passion for Books
                </h2>
                <p className="mx-4 lg:mx-36 text-gray-800 leading-relaxed tracking-wide">
                    Books have the power to transport us to far-off lands, spark our imaginations, and illuminate the depths of the human experience. That is why we are dedicated to curating a diverse selection of book recommendations, author interviews, and thought-provoking discussions to ignite your passion for reading.
                </p>
            </div>

            <div className="mt-10 text-center bg-gray-50 p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                    Cultivating a Reading Habit
                </h2>
                <p className="mx-4 lg:mx-40 text-gray-800 leading-relaxed">
                    We believe that cultivating a reading habit can transform your life in countless ways. Our mission is to support and inspire you on this journey with:
                </p>
                <div className="mt-8 text-left mx-auto max-w-3xl">
                    <ul className="list-disc list-inside text-gray-800 space-y-4">
                        <li>
                            <span className="font-semibold">Curated Book Lists:</span> Personalized selections tailored to your interests and reading goals, making it easier to find your next great read.
                        </li>
                        <li>
                            <span className="font-semibold">Daily Reading Tips:</span> Practical strategies and advice to help you seamlessly integrate reading into your daily routine, no matter how busy you are.
                        </li>
                        <li>
                            <span className="font-semibold">Engaging Community Events:</span> Join discussions and participate in events that keep you motivated and connected with fellow readers.
                        </li>
                        <li>
                            <span className="font-semibold">Exclusive Content:</span> Access in-depth content from authors and experts that will enhance your understanding and enjoyment of your favorite books.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-10">
                <NewsletterSection />
            </div>
        </div>
    );
};

export default About;