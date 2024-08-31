import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";


const Home = () => {
    return (
        <div className="mt-12">
            <Banner></Banner>
            <Books></Books>
            <Contact></Contact>
        </div>
    );
};

export default Home;