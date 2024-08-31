const Login = () => {
    return (
        <div className="hero min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-100 p-8 lg:p-16">
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:pr-16">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">Login to Your Account</h1>
                <p className="text-lg lg:text-xl text-gray-600 text-center lg:text-left">
                    Access a world of exclusive features tailored just for you. Log in to take your reading experience to the next level.
                </p>
            </div>
            <div className="card w-full max-w-md mt-8 lg:mt-0 bg-white shadow-lg rounded-lg p-8">
                <form className="space-y-6">
                    <div className="form-control">
                        <label className="label text-gray-700">
                            <span className="label-text text-lg font-medium">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label text-gray-700">
                            <span className="label-text text-lg font-medium">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                        <label className="label mt-2">
                            <a href="#" className="label-text-alt text-teal-500 hover:underline">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <button
                            type="submit"
                            className="btn btn-primary w-full py-3 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            Login
                        </button>
                        <p className="text-center mt-4 text-gray-600">
                            Do not have an account? <a href="#" className="text-teal-600 font-semibold hover:underline">Sign up</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;