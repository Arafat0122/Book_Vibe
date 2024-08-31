import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-16 lg:mt-60">
            <div className="card card-side bg-base-100 w-96 lg:w-[500px] mx-auto">
                <figure><img src="https://cdn.pixabay.com/photo/2014/04/02/16/21/attention-307030_960_720.png" alt="" /></figure>
                <div className="card-body">
                    <h3 className="text-6xl font-bold">Oops!</h3>
                    <p className="text-2xl">Page not found</p>
                    <div className="card-actions">
                        <Link to={'/'}><button className="btn btn-primary">Go Back Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;